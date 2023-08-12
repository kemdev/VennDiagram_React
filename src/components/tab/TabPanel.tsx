import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}


const TabPanel = styled((props: TabPanelProps) => {

  const { children, value, index, ...other } = props;

  return (
    <div
    className='tabpanel'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${ index }`}
      aria-labelledby={`full-width-tab-${ index }`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
})(({ theme }) => ({
  '& .MuiBox-root': {
    padding: 0,
  },
}));

export default TabPanel;
