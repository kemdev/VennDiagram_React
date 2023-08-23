import * as venn from 'venn.js'; // The error because there is no typescript version of venn.js
import * as d3 from 'd3';
import { VennProps, setsProps } from '@/types/vennChart';
import randomColor from '@/helpers/randomColor';

interface IChartRenderProps {
  vennSets: setsProps[];
  vennSize: number | undefined;
  container: any;
  setLoading: (loading: boolean) => void;
}

const colorGenerator = (vennSets: setsProps[]) => {
  return vennSets?.map(() => randomColor());
};

const chart = ({
  container,
  vennSets,
  vennSize,
  setLoading, // NOTE this is a function that sets the loading state
}: IChartRenderProps): SVGSVGElement | null => {
  const chart = venn.VennDiagram().width(vennSize).height(vennSize);
  const div = d3.select(container);

  // NOTE check the chart type
  div?.datum(vennSets)?.call(chart as any);
  const svg = div.select('svg');

  // add the text

  // div
  //   .append('text')
  //   .attr('x', (vennSize || 500) / 2)
  //   .attr('y', 50)
  //   .attr('text-anchor', 'middle')
  //   .style('font-size', '1.2rem')
  //   .style('fill', '#000')
  //   .style('font-weight', 'bold')
  //   .style('font-family', 'sans-serif')
  //   .text('Venn Diagram');

  setLoading(false);
  return svg.node() as SVGSVGElement;
};

function renderChart({
  container,
  vennSets,
  vennSize,
  setLoading,
}: IChartRenderProps): SVGSVGElement | null {
  const colors = colorGenerator(vennSets);

  return chart({ container, vennSets, vennSize, setLoading });
  // // Apply Circle Styles
  // d3.selectAll('.venn-circle path')
  //   .style('fill-opacity', 0)
  //   .style('stroke-width', 10)
  //   .style('stroke-opacity', 0.5)
  //   .style('stroke', (d, i) => colors[i % colors.length]);

  // d3.selectAll('.venn-circle text')
  //   .style('fill', (d, i) => colors[i % colors.length])
  //   .style('font-size', '42px')
  //   .style('font-weight', '100');

  // // Setup Tooltip
  // const tooltip = d3
  //   .select(container)
  //   .append('div')
  //   .attr('class', 'venntooltip')
  //   .style('opacity', 0);

  // d3.selectAll('.venn-circle')
  //   .on('mouseover', (e: any, i: number) => {
  //     if (container)
  //       venn.sortAreas(container, e);
  //     tooltip.transition().duration(400).style('opacity', 1);
  //     tooltip
  //       .text(e.size + ' users')
  //       .style('left', e.pageX + 'px')
  //       .style('top', e.pageY - 28 + 'px');
  //   })
  //   .on('mousemove', (e: any) => {
  //     tooltip
  //       .style('left', e.pageX + 'px')
  //       .style('top', e.pageY - 28 + 'px');
  //   })
  //   .on('mouseout', () => {
  //     tooltip.transition().duration(400).style('opacity', 0);
  //   });

  // // Setup Hover Effects
  // d3.selectAll('.venn-circle')
  //   .on('mouseover', function (d: any, i) {
  //     var selection = d3.select(this).transition('tooltip').duration(400);
  //     selection
  //       .select('path')
  //       .style('stroke-width', 3)
  //       .style('fill-opacity', d?.sets?.length === 1 ? 0.4 : 0.1)
  //       .style('stroke-opacity', 1);
  //   })
  //   .on('mouseout', function (d, i) {
  //     var selection = d3.select(this).transition('tooltip').duration(400);
  //     selection
  //       .select('path')
  //       .style('fill-opacity', 0)
  //       .style('stroke-width', 10)
  //       .style('stroke-opacity', 0.5);
  //   });
}

export { renderChart, chart };
