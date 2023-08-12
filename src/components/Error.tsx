import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material';
import StyledPaper from './StyledPaper';

interface ErrorProps {
  message: string;
  resetEverything: () => void;
}

const Error: React.FC<ErrorProps> = ({ message, resetEverything }) => {
  return (
    <Container
      maxWidth='xl'
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <StyledPaper
      >
        <Typography
          variant='h4'
          gutterBottom
          sx={{ textAlign: 'center' }}
        >
          Venn Diagram Generator
        </Typography>

        <Divider sx={{ marginTop: '20px' }} />

        <Box sx={{ marginTop: '20px', display: 'flex' }}>
          <Typography
            variant='h4'
            gutterBottom
          >
            Error
          </Typography>
          <Typography
            variant='h6'
            gutterBottom
          >
            {message}
          </Typography>
        </Box>

        <Divider sx={{ marginTop: '20px' }} />

        <Box sx={{ marginTop: '20px', display: 'flex' }}>
          <Button
            variant='contained'
            color='primary'
            sx={{ marginLeft: 'auto' }}
            onClick={resetEverything}
          >
            Try Again
          </Button>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default Error;
