import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './TabPanel';
import { useTheme } from '@mui/material/styles';
import { AppBar, Button } from '@mui/material';
import StyledPaper from '../StyledPaper';
import { FileSet } from '@/types/setsTypes';
import { calculateSets, parseFile } from '@/helpers/vennHelpers';

import {
  FileSetsDefault,
  ManualSetsDefault,
  errorDefault,
  vennSetsDefault,
} from '@/constants/setsDefaults';
import { useFileUploadsStore } from '@/stores/fileUploadsStore';
import { useVennSetsStore } from '@/stores/vennSetsStore';
import { useRouter } from 'next/navigation';
import Toolbar from '@mui/material/Toolbar';
import { useLoadingStore } from '@/stores/loadingStore';

const a11yProps = (index: number) => {
  return {
    id: `centered-tab-${index}`,
    'aria-controls': `centered-tabpanel-${index}`,
  };
};

interface ChildProps {
  label: string;
  component: React.ReactNode[] | any;
}

interface ComponentProps {
  components: ChildProps[];
  [others: string]: any;
}

export default function CenteredTabs({ components }: ComponentProps) {
  const router = useRouter();

  const theme = useTheme();
  const [value, setValue] = useState<number>(0);
  const { setFileSets, fileSets } = useFileUploadsStore((state) => ({
    setFileSets: state.setFileSets,
    fileSets: state.fileSets,
  }));

  const setVennSets = useVennSetsStore((state) => state.setVennSets);
  // const [vennSets, setVennSets] = useState<setsProps[]>(vennSetsDefault);

  const [manualSets, setManualSets] = useState<any[]>(ManualSetsDefault);
  const [error, setError] = useState<any>(errorDefault);
  const [vennImage, setVennImage] = useState<any>(null);

  const setLoading = useLoadingStore((state) => state.setLoading);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const routeHandler = async (exampleData: any) => {
    // sent the example data state to the venn diagram page
    router.push('/venn-diagram/?exampleData=' + exampleData);
    // router.push('/venn-diagram/');
  };

  const generateVenn = async (fileSets: FileSet[]) => {
    setLoading(true);
    const { files, fileNames, customNames } = fileSets.reduce(
      (acc: any, fileSet: FileSet) => {
        if (fileSet.file) {
          acc.files.push(fileSet.file);
          acc.fileNames.push(fileSet.fileName);
          acc.customNames.push(fileSet.customName);
        }
        return acc;
      },
      { files: [], fileNames: [], customNames: [] }
    );

    // check the names and add the custom names if they exist or the file names if they don't
    const addNames = () => {
      const names = [];
      for (let i = 0; i < files.length; i++) {
        if (customNames[i]) {
          names.push(customNames[i]);
        } else {
          names.push(fileNames[i]);
        }
      }
      return names;
    };

    let exampleData = '';

    try {
      const parsedSets = await Promise.all(files.map(parseFile));
      const sets = await calculateSets(parsedSets, addNames());
      // Update the Venn diagram with the calculated sets

      if (sets.length > 0) {
        exampleData = '';
        setVennSets(sets);
      } else {
        exampleData = 'true';
        setVennSets(vennSetsDefault);
      }

      // TODO make the route accept id to store the venn diagram
      await routeHandler(exampleData);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error generating Venn diagram:', error);
    }
  };

  // Reset everything
  const resetEverything = () => {
    setFileSets(FileSetsDefault);

    setManualSets(ManualSetsDefault);
    setVennImage(null);
    setVennSets(vennSetsDefault);
    setError(errorDefault);
  };

  return (
    <StyledPaper className='tabs-container'>
      <AppBar
        position='sticky'
        color='inherit'
        className='tab-app-navbar'
        sx={{
          mb: 5,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          {components.map((component: any, index: number) => (
            <Tab
              key={index}
              label={component?.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>

      {components.map(({ component }: any, index: number) => (
        <TabPanel
          key={index}
          value={value}
          index={index}
          dir={theme.direction}
        >
          {component}
        </TabPanel>
      ))}

      <AppBar
        className='tab-app-navbar'
        position='sticky'
        color='inherit'
        // bottom={0}
        sx={{
          marginTop: '20px',
          bottom: 0,
        }}
      >
        <Toolbar>
          <Button
            variant='contained'
            color='error'
            sx={{ marginRight: 'auto' }}
            onClick={resetEverything}
          >
            Reset
          </Button>

          <Button
            variant='contained'
            color='primary'
            onClick={(e) => {
              generateVenn(fileSets);
            }}
          >
            Generate Venn Diagram
          </Button>
        </Toolbar>
      </AppBar>
    </StyledPaper>
  );
}
