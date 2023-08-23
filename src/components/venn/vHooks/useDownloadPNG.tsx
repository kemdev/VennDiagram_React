import d3 from 'd3';
import { useCallback } from 'react';

const useDownloadPNG = (
  svgRef: SVGSVGElement | null,
  name: string | null,
  title: string | undefined
) => {
  return useCallback(() => {
    async function saveSvgAsPng(svgRef: SVGSVGElement, name: string | null) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      const serializer = new XMLSerializer();
      const svgStr = serializer.serializeToString(svgRef);

      img.src = 'data:image/svg+xml;base64,' + btoa(svgStr);

      const titleHeight = 30; // Height for the title text

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height + titleHeight;
        if (ctx) {
          // Set font properties for the title
          ctx.font = '20px Arial';
          ctx.textAlign = 'center';

          // Draw the title at the center of the canvas
          ctx.fillText(title || '', canvas.width / 2, 20);

          // Add a background to the title
          ctx.fillStyle = 'white';

          // Draw the SVG image below the title
          ctx.drawImage(img, 0, titleHeight);

          const imgData = canvas.toDataURL('image/png');
          const downloadLink = document.createElement('a');
          downloadLink.href = imgData;
          downloadLink.download = name ? name + '.png' : 'image.png';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      };

      img.onerror = (error) => {
        console.log('Image loading error:', error);
      };
    }
    if (!svgRef) return console.log('No SVG Ref');
    const svg = svgRef;
    saveSvgAsPng(svg, name);
  }, [svgRef, name, title]);
};

export { useDownloadPNG };
