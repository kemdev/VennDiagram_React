import { useCallback } from 'react';

const useDownloadPNG = (svgRef: any) => {
  return useCallback(() => {
    if (!svgRef) return;
    const svg = svgRef;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);

    // Create an image from the SVG string
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(svgStr);

    img.onload = () => {
      // Draw the image onto a canvas
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);

      // Create a download link for the PNG
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'diagram.png';
      downloadLink.click();
    };
  }, [svgRef]);
};

export default useDownloadPNG;
