import * as React from 'react';
import { VennProps, setsProps } from '@/types/vennChart';
import { Box, Typography } from '@mui/material';

export interface IDataInformationProps {
  vennSets: setsProps[];
  info?: VennProps;
}

export default function DataInformationProps(props: IDataInformationProps) {
  const { vennSets, info } = props;

  console.log(
    '🚀 ~ file: DataInformation.tsx:14 ~ DataInformationProps ~ vennSets:',
    vennSets
  );

  return (
    <Box>
      {/* <Typography
        sx={{ mr: 0.5 }}
        variant='h6'
        color='inherit'
        noWrap
      >
        {vennSets?.length} Sets
      </Typography>
      <Typography
        sx={{ mr: 0.5 }}
        variant='h6'
        color='inherit'
        noWrap
      >
        {vennSets
          ?.map((set) => set)
          .map((set, index) => (
            <Typography key={index}>{set.sets}</Typography>
          ))}
      </Typography> */}
    </Box>
  );
}
