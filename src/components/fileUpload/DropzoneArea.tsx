import React, { useEffect, useMemo, useRef } from 'react';
import { Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';

// import constantsStyles from asset file
import {
  focusedStyle,
  acceptStyle,
  rejectStyle,
  baseStyle,
} from '@/assets/constantStyles';
import { useFileUploadsStore } from '@/stores/fileUploadsStore';
import { FileSet } from '@/types/setsTypes';

interface DropzoneAreaProps {
  file: File | null;
  fileIndex: number;
  [key: string]: any;
}

interface StyleProps {
  isFocused: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
  any: any;
}

const DropzoneArea: React.FC<DropzoneAreaProps> = ({
  // onDrop,
  fileIndex,
  file,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const setFileSets = useFileUploadsStore((state) => state.setFileSets);
  const setDropzoneHeights = useFileUploadsStore(
    (state) => state.setDropzoneHeights
  );

  const onDrop = (acceptedFiles: File[], fileIndex: number) => {
    if (ref.current) {
      ref.current.value = '';
    }
    if (fileInputRef.current) {
      (fileInputRef.current as any).value = '';
    }

    const file = acceptedFiles[0];
    const fileName = file.name.split('.')[0] + Date.now();

    setFileSets((prevFileSets: FileSet[]) =>
      prevFileSets.map((fileSet: FileSet, index: number) =>
        index === fileIndex
          ? {
              ...fileSet,
              file,
              fileName,
            }
          : fileSet
      )
    );
  };

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop: (acceptedFiles) => onDrop(acceptedFiles, fileIndex),
      accept: { 'text/csv': ['.csv'] },
      multiple: false,
      maxFiles: 1,
    });

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...props.style,
    }),
    [isFocused, isDragAccept, isDragReject, props.style]
  );

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      setDropzoneHeights(fileIndex, height);
    }
  }, [ref, file, setDropzoneHeights, fileIndex]);
  return (
    <div
      {...getRootProps({ style })}
      ref={ref}
      className='dropzone'
    >
      <input
        {...getInputProps()}
        ref={fileInputRef}
      />
      <Typography
        variant='body2'
        color='textSecondary'
      >
        {file
          ? 'Change file'
          : 'Drag & drop a file here, or click to select a file'}
      </Typography>
      {file && (
        <Typography
          variant='body1'
          color='textPrimary'
        >
          {file.name}
        </Typography>
      )}

      {file && (
        <Typography
          variant='body2'
          color='textSecondary'
          sx={{
            mt: 1,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        >
          {file.size / 1000} KB
        </Typography>
      )}
    </div>
  );
};

export default DropzoneArea;
