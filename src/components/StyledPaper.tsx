import React from 'react';
import { Paper, PaperProps } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface StyledPaperProps extends PaperProps {
  sx?: SxProps<Theme>;
}

const StyledPaper: React.FC<StyledPaperProps> = ({ children, sx, ...otherProps }) => {
  const defaultStyles: SxProps<Theme> = {
    padding: '20px',
    marginTop: '20px',
    height: '100%',
    ...sx, // Merge any additional styles passed in via the sx prop
  };

  return (
    <Paper sx={defaultStyles} {...otherProps}>
      {children}
    </Paper>
  );
};

export default StyledPaper;
