'use client';
import React from 'react';
import '@/assets/loading.css';
import StyledPaper from '../StyledPaper';

const Loading: React.FC = () => (
  <StyledPaper className='container'>
    <div className='loading-container'>
      <div className='loading-circle'></div>
      <div className='loading-circle'></div>
    </div>
  </StyledPaper>
);

export default Loading;
