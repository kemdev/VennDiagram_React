import React from 'react';
import Venn from '@/components/venn/Venn';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Alert, Paper } from '@mui/material';
interface SearchParamsProps {
  exampleData: string;
}
//  URLSearchParams | string | string[] | null
type Props = {
  searchParams: {
    exampleData: string;
  };
};

export default function Result({ searchParams }: Props) {
  const { exampleData } = searchParams;
  console.log('🚀 ~ file: page.tsx:18 ~ Result ~ searchParams:', searchParams);

  return (
    <Box>
      <Typography variant='h4'>Venn Diagram</Typography>
      {exampleData && (
        <Paper
          sx={{
            width: 'fit-content',
          }}
        >
          <Alert severity='warning'>
            This is an example data, you didn&apos;t choose any file
          </Alert>
        </Paper>
      )}
      <Venn />
    </Box>
  );
}
