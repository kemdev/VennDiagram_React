'use client'
import React, { useEffect, useState } from 'react';

import { Paper, Button, Typography, Box, Divider } from '@mui/material';
import styles from '@/app/page.module.css'
import Venn from '@/components/venn/Venn';
import { calculateSets, parseFile } from '@/helpers/vennHelpers';
import FileUpload from '@/components/fileUpload/FileUpload';
import ManualDataSection from '@/components/ManualData';

import CenteredTabs from '@/components/tab/Tabs';

export default function Dashboard() {

  return (
    <Paper
      elevation={3}
      className='dashboard'
      sx={{
        padding: '20px',
        height: '100%',
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Venn Diagram Generator
      </Typography>

      <Divider />

      <Box
        sx={{
          // height: '100%'
        }}
      >
        <CenteredTabs
          components={[
            {
              component: (
                <FileUpload />
              ),
              label: 'Upload Files',
            },
            {
              component: (
                <ManualDataSection
                />
              ),
              label: 'Add Sets Manually',
            },
          ]}
        />
      </Box>
    </Paper >
  )
}
