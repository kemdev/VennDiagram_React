import { errorDefaultProps } from '@/types/messages';
import { FileSet, ManualSet } from '@/types/setsTypes';

import { setsProps } from '@/types/vennChart';

const FileSetsDefault: FileSet[] = [
  { customName: '', fileName: '', file: null },
  { customName: '', fileName: '', file: null },
  { customName: '', fileName: '', file: null },
  { customName: '', fileName: '', file: null },
  { customName: '', fileName: '', file: null },
  { customName: '', fileName: '', file: null },
];

const ManualSetsDefault: ManualSet[] = [
  { name: '', data: '' },
  { name: '', data: '' },
  { name: '', data: '' },
  { name: '', data: '' },
  { name: '', data: '' },
  { name: '', data: '' },
];

const vennSetsDefault: setsProps[] = [
  { sets: ['A'], size: 10 },
  { sets: ['B'], size: 10 },
  { sets: ['C'], size: 10 },
  { sets: ['D'], size: 10 },
  { sets: ['F'], size: 10 },
  { sets: ['A', 'B'], size: 2 },
  { sets: ['A', 'D'], size: 2 },
  { sets: ['A', 'C'], size: 2 },
  { sets: ['B', 'D'], size: 2 },
  { sets: ['B', 'F'], size: 2 },
  { sets: ['B', 'C'], size: 2 },
  { sets: ['A', 'B', 'C'], size: 1 },
];

const errorDefault: errorDefaultProps = {
  error: false,
  message: '',
};

export { FileSetsDefault, ManualSetsDefault, vennSetsDefault, errorDefault };
