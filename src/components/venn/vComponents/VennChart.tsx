'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { setsProps } from '@/types/vennChart';
import { renderChart } from '../vHelpers/helpers';
import { Box } from '@mui/material';
import { useLoadingStore } from '@/stores/loadingStore';

interface VennChartProps {
  vennSets: setsProps[];
  setSvgRef?: React.Dispatch<React.SetStateAction<SVGSVGElement | null>>;
  size?: number | undefined;
}

const VennChart: React.FC<VennChartProps> = ({ size, vennSets, setSvgRef }) => {
  const containerRef = useRef(null);
  // const currentSetsRef = useRef(vennSets); // Keep track of current sets
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [svgUpdateTrigger, setSvgUpdateTrigger] = useState(0);

  const [vennSize, setVennSize] = useState<number | undefined>(800);

  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    setVennSize(window.innerHeight / 2);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    // renderChart({ container, vennSets, vennSize });

    const svg = renderChart({ container, vennSets, vennSize, setLoading });

    svgRef.current = svg;

    setSvgUpdateTrigger((prevTrigger) => prevTrigger + 1); // Trigger the effect

    return () => {
      // Cleanup
      d3.select(container).selectAll('*').remove();
    };
  }, [vennSets, size, vennSize, setSvgRef, setLoading]);

  useEffect(() => {
    if (size) {
      return setVennSize(size);
    }
  }, [size]);

  useEffect(() => {
    if (setSvgRef) {
      setSvgRef(svgRef.current);
    }
  }, [setSvgRef, svgUpdateTrigger]);

  // TODO add a controller to change the size of the chart.
  return (
    <Box
      className='venn-container flex-center wh-100'
      ref={containerRef}
    ></Box>
  );
};

export default VennChart;
