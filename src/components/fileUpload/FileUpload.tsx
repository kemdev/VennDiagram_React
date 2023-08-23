import React, { useRef, useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { commonStyle, closeIconHoverStyle } from '@/assets/constantStyles';

// import components
import DropzoneArea from './DropzoneArea';
import { FileSet } from '@/types/setsTypes';
import { FileSetsDefault } from '@/constants/setsDefaults';

import { useFileUploadsStore } from '@/stores/fileUploadsStore';

const FileUpload = () => {
  // const [fileSets, setFileSets] = useState<FileUploadProps>(FileSetsDefault);

  const { fileSets, dropzoneHeights } = useFileUploadsStore((state: any) => ({
    fileSets: state.fileSets,
    dropzoneHeights: state.dropzoneHeights,
  }));

  const setFileSets = useFileUploadsStore((state) => state.setFileSets);

  const dropzoneRefs = useRef(fileSets?.map(() => React.createRef()));

  const deleteFileHandler = (index: number) => {
    const newFileSets = [...fileSets];
    newFileSets[index].file = null;
    newFileSets[index].fileName = '';
    setFileSets(newFileSets);
  };

  return (
    <Box>
      <Typography
        variant='h4'
        gutterBottom
      >
        Upload Files
      </Typography>
      {fileSets.map((fileSet: FileSet, index: number) => (
        <div
          key={index}
          style={{ marginTop: '10px' }}
        >
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              marginTop: '20px',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            Set {index + 1}
          </Typography>

          <Box
            className='file-upload-sets-container'
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Box sx={{ marginRight: '20px', width: '50%', flexGrow: 1 }}>
              <TextField
                variant='outlined'
                label={`Set ${index + 1} Name`}
                value={fileSet.customName || fileSet.fileName || ''} // Read name directly from fileSet
                onChange={(e) => {
                  // Update the name in the corresponding fileSet
                  const newFileSets = [...fileSets];
                  newFileSets[index].customName = e.target.value;
                  setFileSets(newFileSets);
                }}
                sx={{
                  width: '100%',
                }}
              />
            </Box>
            <Box
              ref={dropzoneRefs?.current[index]}
              sx={{
                flexGrow: 1,
                width: '50%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              className='drop-zone-area-container'
            >
              <DropzoneArea
                // onDrop={(acceptedFiles) => onDrop(acceptedFiles, index)}
                fileIndex={index}
                file={fileSet.file}
              />

              {fileSet.file && (
                <CloseIcon
                  sx={{
                    // top: '0',
                    // right: '0',
                    borderLeft: '2px solid #ccc !important',
                    borderTopLeftRadius: '0px !important',
                    borderBottomLeftRadius: '0px !important',
                    height: `${dropzoneHeights[index]}px`,
                    width: '20%',
                    fontSize: '0.8rem',
                    px: 1,
                    ...commonStyle,
                    ...closeIconHoverStyle,
                  }}
                  onClick={(e) => deleteFileHandler(index)}
                />
              )}
            </Box>
          </Box>
        </div>
      ))}
    </Box>
  );
};

export default FileUpload;
