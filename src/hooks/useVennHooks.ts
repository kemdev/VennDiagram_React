// import { useEffect } from 'react';
// import * as d3 from 'd3';

// interface CircleStylesProps {
//   colors: string[];
// }

// export const useCircleStyles = ({ colors }: CircleStylesProps) => {
//   useEffect(() => {
//     const applyCircleStyles = () => {
//       d3.selectAll('.venn-circle path')
//         .style('fill-opacity', 0)
//         .style('stroke-width', 10)
//         .style('stroke-opacity', 0.5)
//         .style('stroke', (d, i) => colors[i % colors.length]);

//       d3.selectAll('.venn-circle text')
//         .style('fill', (d, i) => colors[i % colors.length])
//         .style('font-size', '42px')
//         .style('font-weight', '100');
//     };
//     applyCircleStyles();
//   }, [colors]);

//   return null;
// };

// export const useTooltip = () => {
//   const setupTooltip = () => {
//     const tooltip = select(containerRef.current)
//       .append('div')
//       .attr('class', 'venntooltip')
//       .style('opacity', 0);

//     d3.selectAll(containerRef.current)
//       .on('mouseover', (e, i) => {
//         venn.sortAreas(containerRef.current, e);
//         tooltip.transition().duration(400).style('opacity', 1);
//         tooltip
//           .text(e.size + ' users')
//           .style('left', e.pageX + 'px')
//           .style('top', e.pageY - 28 + 'px');
//       })
//       .on('mousemove', (e) => {
//         tooltip
//           .style('left', e.event.pageX + 'px')
//           .style('top', e.event.pageY - 28 + 'px');
//       })
//       .on('mouseout', () => {
//         tooltip.transition().duration(400).style('opacity', 0);
//       });
//   };
// };

// export const useHoverEffects = () => {
//   // Logic for hover effects
//   // ...
// };

// // Additional hooks as needed
