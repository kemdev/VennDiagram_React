import React from 'react';
import Venn from '@/components/venn/Venn';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


type Props = {};

export default function Result({}: Props) {
  return (
    <Box>
      <Typography variant='h4'>Venn Diagram</Typography>
      <Venn />
    </Box>
  );
}
