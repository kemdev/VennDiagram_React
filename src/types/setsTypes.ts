// create an object type
interface FileSet {
  customName: string;
  fileName: string;
  file: File | null;
}

interface ManualSet {
  name: string;
  data: string;
  // map(arg0: (set: any, i: any) => any): ManualSet[];
}


export type {
  FileSet,
  ManualSet,
}