import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyledAvatar } from '../components/Avatars.js';

import SignUpComponent from '../components/SignUpComponent.js';

const theme = createTheme();

export default function SignUp() {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <StyledAvatar>
                            E22
          </StyledAvatar>
          <Typography component="h1" variant="h5">
           Sign up
          </Typography>
          <SignUpComponent />
        </Box>
      </Container>
    </ThemeProvider>
  );
}