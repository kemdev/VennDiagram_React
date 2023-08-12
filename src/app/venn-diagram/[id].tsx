import Venn from '@/components/venn/Venn';
import { Box } from '@mui/material';
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function Page({ }: Props) {
  const router = useRouter()
  const { id } = router.query;



  return (
    <Box className='venn-diagram-viewer'>
      <Venn />
    </Box>

  )
}