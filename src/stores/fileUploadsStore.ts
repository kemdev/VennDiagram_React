import { create } from 'zustand'
import { FileSet } from '@/types/setsTypes'
import { FileSetsDefault } from '@/constants/setsDefaults'


interface FileUploadProps {
  fileSets: FileSet[];
  dropzoneHeights: number[];
  setFileSets: (newFileSets: FileSet[] | ((prevFileSets: FileSet[]) => FileSet[])) => void;
  setDropzoneHeights: (index: number, height: number) => void;
}


export const useFileUploadsStore = create<FileUploadProps>((set) => ({
  fileSets: FileSetsDefault,
  dropzoneHeights: Array(FileSetsDefault.length).fill(0), // Initialize with default heights

  setFileSets: (newFileSets: FileSet[] | ((prevFileSets: FileSet[]) => FileSet[])) =>
    set((state) => {
      // If newFileSets is a function, call it with the current state and use the result
      // Otherwise, use newFileSets directly
      const updatedFileSets = typeof newFileSets === 'function' ? newFileSets(state.fileSets) : newFileSets;
      return { fileSets: updatedFileSets, loading: true };
    }),



  setDropzoneHeights: (index: number, height: number) => set((state) => {
    const newHeights = [...state.dropzoneHeights];
    newHeights[index] = height;
    return { dropzoneHeights: newHeights };
  }),


}));


