'use client';
import React, { useState } from 'react';
import VennChart from './vComponents/VennChart';
import Tooltip from './vComponents/Tooltip';
// import useLevaControl from '../Hooks/useLevaControl';
import { VennProps } from '@/types/vennChart';
import DataInformationProps from './vComponents/DataInformation';
import { useVennSetsStore } from '@/stores/vennSetsStore';
import Container from '../Container';
import { Divider, Button } from '@mui/material';
import useDownloadPNG from './vhooks/useDownloadPNG';

const Venn = () => {
  const vennSets = useVennSetsStore((state) => state.vennSets);
  const [svgRef, setSvgRef] = useState<SVGSVGElement | null>(null);

  const downloadPNG = useDownloadPNG(svgRef);
  return (
    <Container>
      <VennChart
        vennSets={vennSets}
        setSvgRef={setSvgRef}
      />
      <DataInformationProps vennSets={vennSets} />

      <Divider />

      <Button onClick={downloadPNG}>Download PNG</Button>
    </Container>
  );
};

export default Venn;
