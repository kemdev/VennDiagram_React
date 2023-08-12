'use client';
import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useState,
  createRef,
} from 'react';
// import * as d3 from 'd3';
import * as d3 from 'd3';
import randomColor from '@/helpers/randomColor';
import { useVennSetsStore } from '@/stores/vennSetsStore';
import { VennProps, setsProps } from '@/types/vennChart';
import { renderChart } from '../vHelpers/helpers';
import { Box } from '@mui/material';

interface VennChartProps {
  vennSets: setsProps[];
  setSvgRef?: React.Dispatch<React.SetStateAction<SVGSVGElement | null>>;
  size?: number | undefined;
}

const VennChart: React.FC<VennChartProps> = ({ size, vennSets, setSvgRef }) => {
  const containerRef = useRef(null);
  // const currentSetsRef = useRef(vennSets); // Keep track of current sets
  const currentSetsRef = useRef(vennSets); // Keep track of current sets
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [vennSize, setVennSize] = useState<number | undefined>(800);

  useEffect(() => {
    setVennSize(window.innerHeight / 2);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    // renderChart({ container, vennSets, vennSize });

    svgRef.current = renderChart({ container, vennSets, vennSize });

    return () => {
      // Cleanup
      d3.select(container).selectAll('*').remove();
    };
  }, [vennSets, size, vennSize]);

  useEffect(() => {
    if (size) {
      return setVennSize(size);
    }
  }, [size]);

  useEffect(() => {
    if (svgRef.current) {
      setSvgRef?.(svgRef.current);
    }
  }, [setSvgRef, svgRef.current]);

  // TODO add a controller to change the size of the chart.
  return (
    <Box
      className='venn-container flex-center wh-100'
      ref={containerRef}
    ></Box>
  );
};

export default VennChart;
