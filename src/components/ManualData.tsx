'use client'

import styles from '@/app/page.module.css'
import React, { useEffect, useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import TextareaAutoSizeCustom from './inputsCustoms/TextareaAutoSizeCustom';

import { ManualSetsDefault } from '@/constants/setsDefaults';
import { ManualSet } from '@/types/setsTypes';

interface ManualDataSectionProps {
  manualSets: ManualSet[];
  setManualSets: (newManualSet: ManualSet[] | ((prevManualSets: ManualSet[]) => ManualSet[])) => void
}


const ManualDataSection = () => {
  const [manualSets, setManualSets] = useState<ManualSet[]>([]);


  const handleManualSetNameChange = (index: number, name: string) => {
    setManualSets((prevManualSets: ManualSet[]) =>
      prevManualSets?.map((set, i) => (i === index ? { ...set, name } : set))
    );
  };

  const handleManualSetDataChange = (index: number, data: string) => {
    setManualSets((prevManualSets) =>
      prevManualSets.map((set, i) => (i === index ? { ...set, data } : set))
    );
  };

  useEffect(() => {
    setManualSets(ManualSetsDefault)
  }, [])


  return (
    <Box
    >
      <Typography
        variant='h4'
        gutterBottom
        color="warning"
      >
        Not yet Supported
      </Typography>
    </Box>
    // <Box>
    //   <Typography
    //     variant='h4'
    //     gutterBottom
    //   >
    //     Add Sets Manually
    //   </Typography>
    //   {manualSets.map((manualSet, index) => (
    //     <div
    //       key={index}
    //       style={{
    //         // marginTop: '10px',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //         display: 'flex',
    //       }}
    //     >
    //       <Box>
    //         <TextField
    //           variant='outlined'
    //           label={`Set ${ index + 1 } Name`}
    //           value={manualSet.name}
    //           onChange={(e) => handleManualSetNameChange(index, e.target.value)}
    //         />
    //       </Box>
    //       <Box>
    //         <TextareaAutoSizeCustom
    //           // multiline
    //           // variant='outlined'
    //           // label={`Set ${ index + 1 } Data`}
    //           placeholder={`Set ${ index + 1 } Data`}
    //           value={manualSet.data}
    //           onChange={(e: { target: { value: string; }; }) => handleManualSetDataChange(index, e.target.value)}
    //           style={{ marginTop: '10px', backgroundColor: 'inherit' }}
    //         />
    //       </Box>
    //     </div>
    //   ))}
    // </Box>
  );
};

export default ManualDataSection;
