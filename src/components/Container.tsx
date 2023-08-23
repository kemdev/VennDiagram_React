'use client';
import React, { useEffect } from 'react';
import StyledPaper from './StyledPaper';
import Loading from './Loading/Loading';
import { useLoadingStore } from '@/stores/loadingStore';

type Props = {
  children?: React.ReactNode;
};

export default function Container(props: Props) {
  const { children } = props;

  // const loading = useLoadingStore((state) => state.loading);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, [setLoading, loading]);

  // if (loading) return <Loading />;
  return <StyledPaper className='container'>{children}</StyledPaper>;
}
