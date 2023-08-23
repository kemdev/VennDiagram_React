'use client';
import React, { Suspense, useEffect, useState } from 'react';
import VennChart from './vComponents/VennChart';
import Tooltip from './vComponents/Tooltip';
// import useLevaControl from '../Hooks/useLevaControl';
import { VennProps } from '@/types/vennChart';
import RenderDataInfo from './vComponents/RenderDataInfo';
import { useVennSetsStore } from '@/stores/vennSetsStore';
import Container from '../Container';
import { Divider, Button, TextField, Box, Typography } from '@mui/material';
import { useDownloadImage } from './vHooks/useDownloadPNG';
import { useLoadingStore } from '@/stores/loadingStore';
import CustomButton from '@/common/Buttons/cButton';

import Color from 'color';

const Venn = () => {
  const vennSets = useVennSetsStore((state) => state.vennSets);
  const [svgRef, setSvgRef] = useState<SVGSVGElement | null>(null);

  const [title, setTitle] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  const setLoading = useLoadingStore((state) => state.setLoading);

  const downloadPNG = useDownloadImage(svgRef, fileName, title, 'PNG');
  const downloadSVG = useDownloadImage(svgRef, fileName, title, 'SVG');

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  console.log('🚀 ~ file: Venn.tsx:22 ~ Venn ~ title:', title);
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
            width: 'fit-content',
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
      />
      <RenderDataInfo vennSets={vennSets} />

      <Divider />

      <Container sx={{ mt: 2 }}>
        <TextField
          variant='filled'
          label={`File Name`}
          placeholder={'Enter File Name'}
          value={fileName}
          onChange={(e) => {
            const value = e.target.value;

            setFileName(value);
          }}
          sx={{
            width: 'fit-content',
            mr: 2,
            '& .MuiFilledInput-root': {
              borderRadius: 1,
              textAlign: 'center',
              '&:before': {
                borderBottom: 'none',
              },

              '&:after': {
                borderBottom: 'none',
              },
            },
          }}
        />

        <CustomButton
          func={downloadSVG}
          variant='contained'
          // sx={{ ', color: 'white', b }}
          sx={{
            p: 2,
            h: 1,
            bgcolor: Color('#e8175d').lighten(0.2).hex(),

            '&:hover': {
              bgcolor: Color('#e8175d').darken(0.3).hex(),
            },
          }}
        >
          Download SVG
        </CustomButton>

        <CustomButton
          func={downloadPNG}
          variant='contained'
          // sx={{ ', color: 'white', b }}
          sx={{
            p: 2,
            h: 1,
            mx: 2,
            bgcolor: Color('#3f51b5').lighten(0.2).hex(),

            '&:hover': {
              bgcolor: Color('#3f51b5').darken(0.2).hex(),
            },
          }}
        >
          Download PNG
        </CustomButton>

        {/* Add detail about the file name */}
        <Typography
          variant='body2'
          color='textSecondary'
          mt={1}
        >
          The default file name is the <b>venn diagram</b>.
        </Typography>
      </Container>
    </Container>
  );
};

export default Venn;
