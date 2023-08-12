import React from 'react';

interface TooltipProps {
  visible: boolean;
  text: string;
  x: number;
  y: number;
}

const Tooltip: React.FC<TooltipProps> = ({ visible, text, x, y }) => {
  return visible ? (
    <div className='tooltip' style={{ left: x, top: y }}>
      {text}
    </div>
  ) : null;
};

export default Tooltip;
