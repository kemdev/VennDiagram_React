import * as React from 'react';
import { VennProps, setsProps } from '@/types/vennChart';
import { Box, Typography } from '@mui/material';

export interface IRenderDataInfo {
  vennSets: setsProps[];
  info?: VennProps;
}

export default function RenderDataInfo(props: IRenderDataInfo) {
  const { vennSets, info } = props;

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
