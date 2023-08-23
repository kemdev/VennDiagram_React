import d3 from 'd3';
import { useCallback } from 'react';
import { Canvg } from 'canvg';

const useDownloadImage = (
  svgRef: SVGSVGElement | null,
  name: string = 'venn-diagram',
  title: string | null,
  format: 'SVG' | 'PNG' = 'SVG'
) => {
  return useCallback(() => {
    async function saveAsPng(svgRef: SVGSVGElement, name: string) {
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

    function saveAsSvg(svgRef: SVGSVGElement, name: string) {
      svgRef.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      var svgData = svgRef.outerHTML;
      var preface = '<?xml version="1.0" standalone="no"?>\r\n';
      var svgBlob = new Blob([preface, svgData], {
        type: 'image/svg+xml;charset=utf-8',
      });
      var svgUrl = URL.createObjectURL(svgBlob);
      var downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = name ? name + '.svg' : 'image.svg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }

    if (!svgRef) return console.log('No SVG Ref');
    const svg = svgRef;
    switch (format) {
      case 'PNG':
        saveAsPng(svg, name);
        break;
      case 'SVG':
      default:
        saveAsSvg(svg, name);
        break;
    }
  }, [svgRef, format, title, name]);
};

export { useDownloadImage };
