'use client';
import React, { Suspense, useEffect, useState } from 'react';
import VennChart from './vComponents/VennChart';
import Tooltip from './vComponents/Tooltip';
// import useLevaControl from '../Hooks/useLevaControl';
import { VennProps } from '@/types/vennChart';
import RenderDataInfo from './vComponents/RenderDataInfo';
import { useVennSetsStore } from '@/stores/vennSetsStore';
import Container from '../Container';
import { Divider, Button, TextField, Box } from '@mui/material';
import { useDownloadPNG } from './vHooks/useDownloadPNG';
import { useLoadingStore } from '@/stores/loadingStore';
import CustomButton from '@/common/Buttons/cButton';

import Color from 'color';
// import the useDownloadPNG hook as lazy to prevent it from being imported on the server

const Venn = () => {
  const vennSets = useVennSetsStore((state) => state.vennSets);
  const [svgRef, setSvgRef] = useState<SVGSVGElement | null>(null);
  const [updateDownloader, setUpdateDownloader] = useState<boolean>(false);

  const [title, setTitle] = useState<string>('');
  const setLoading = useLoadingStore((state) => state.setLoading);

  const downloadPNG = useDownloadPNG(svgRef, 'venn-diagram', title);

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  return (
    <Container>
      <Box sx={{ width: 'fit-content', margin: 'auto' }}>
        <TextField
          variant='filled'
          label={`Diagram Title`}
          placeholder={'Add Diagram Title'}
          value={title}
          onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
          }}
          sx={{
            width: '100%',
            '& .MuiFilledInput-root': {
              borderRadius: 1,
              textAlign: 'center',
              '&:before': {
                borderBottom: 'none',
              },
            },
          }}
        />
      </Box>
      <VennChart
        vennSets={vennSets}
        setSvgRef={setSvgRef}
        updateDownloader={updateDownloader}
      />
      <RenderDataInfo vennSets={vennSets} />

      <Divider />

      <CustomButton
        func={downloadPNG}
        variant='contained'
        // sx={{ ', color: 'white', b }}
        sx={{
          mt: 2,
          p: 2,
          bgcolor: Color('#3f51b5').lighten(0.2).hex(),

          '&:hover': {
            bgcolor: Color('#3f51b5').darken(0.2).hex(),
          },
        }}
      >
        Download PNG
      </CustomButton>
    </Container>
  );
};

export default Venn;
