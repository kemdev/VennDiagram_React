import d3 from 'd3';
import { useCallback } from 'react';
import { Canvg } from 'canvg';

const useDownloadPNG = (
  svgRef: SVGSVGElement | null,
  name: string | null,
  title: string | null
) => {
  async function saveSvgAsPng(svgRef: SVGSVGElement, name: string | null) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgRef);
    const titleHeight = 30; // Height for the title text

    canvas.width = svgRef.clientWidth;
    canvas.height = svgRef.clientHeight + titleHeight;

    // Draw the title at the center of the canvas
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(title || '', canvas.width / 2, 20);

    const v = await Canvg.from(ctx, svgStr, {
      ignoreMouse: true,
      ignoreAnimation: true,
      offsetX: 0,
      offsetY: titleHeight,
      scaleWidth: canvas.width,
      scaleHeight: canvas.height - titleHeight,
    });

    // Start SVG rendering, and stop immediately to make it synchronous
    v.start();
    v.stop();

    const imgData = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imgData;
    downloadLink.download = name ? name + '.png' : 'image.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return useCallback(() => {
    if (!svgRef) return console.log('No SVG Ref');
    const svg = svgRef;
    saveSvgAsPng(svg, name);
  }, [svgRef, name, title]);
};

export { useDownloadPNG };
