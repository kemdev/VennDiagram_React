'use client';
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  Divider,
  Box,
  ListItemText,
  Collapse,
  Alert,
} from '@mui/material';
import { useState } from 'react';

const WelcomeInfo = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography
          variant='h4'
          gutterBottom
        >
          Welcome to Venn Diagram Generator!
        </Typography>
        <Typography variant='h6'>About the App</Typography>
        <Typography paragraph>
          This app allows you to generate and customize Venn diagrams...
        </Typography>
        <Typography variant='h6'>How to Use</Typography>
        <Box sx={{ marginY: '10px' }}>
          <List>
            <ListItem>
              1. Upload Your Data: Start by uploading the files
            </ListItem>
            <Collapse
              in={true}
              timeout='auto'
              unmountOnExit
            >
              <List
                component='div'
                sx={{ pl: 4 }}
                disablePadding
              >
                <ListItem>
                  <ListItemText primary='a. For now, you need to upload you data as a CSV file.' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='b. Make sure your data is in the correct format.' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='c. Make sure there is no header in your data.' />
                </ListItem>
              </List>
            </Collapse>

            {/* Add the hint about not open the csv file in the excel after saving it */}
            <Paper
              sx={{
                width: 'fit-content',
              }}
            >
              <Alert severity='warning'>
                Note: If you are using Excel, make sure you save your file as a
                CSV file.
              </Alert>
            </Paper>

            <Paper
              sx={{
                width: 'fit-content',
              }}
            >
              <Alert
                severity='warning'
                sx={{
                  mt: '10px',
                }}
              >
                Please do not open the CSV file in Excel after saving it.
              </Alert>
            </Paper>
            {/* More list items */}
          </List>
        </Box>
        <Divider sx={{ marginY: '10px' }} />
        <Typography variant='h6'>Tips & Tricks</Typography>
        <Typography paragraph>
          - Make sure your data files are in the correct format.
          {/* More tips */}
        </Typography>
      </Paper>
    </Container>
  );
};

export default WelcomeInfo;
