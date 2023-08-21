'use client';
import React, { useEffect } from 'react'
import StyledPaper from './StyledPaper'
import LoadingScreen from './Loading/Loading'
import { useLoadingStore } from '@/stores/loadingStore';

type Props = {
  children?: React.ReactNode
}

export default function Container(props: Props) {

  const { children } = props;

  const loading = useLoadingStore(state => state.loading);
  const setLoading = useLoadingStore(state => state.setLoading);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, [setLoading, loading]);

  if (loading) return <LoadingScreen />
  return (
    <StyledPaper className='container'>
      {children}
    </StyledPaper>
  )
}