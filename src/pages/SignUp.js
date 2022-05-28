import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignUp() {
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("")
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [confPasswordErrorMsg, setConfPasswordErrorMsg] = useState("");

  async function registerUser(requestData) {
    const response = await fetch('http://localhost:8080/api/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: requestData.get('userName'),
        password: requestData.get('password'),
        email: requestData.get('email')
      })
    }).catch(err => console.log(err));

    const data = await response.json();

    console.log(data);
    showServerMessage(data);
  }

  function showServerMessage(serverMessage) {
    if (serverMessage.username)
      setUsernameErrorMsg(serverMessage.username);
    if (serverMessage.email)
      setEmailErrorMsg(serverMessage.email);
    if (serverMessage.password)
      setPasswordErrorMsg(serverMessage.password)
  }

  function cleanseErrorMessage() {
    setUsernameErrorMsg('');
    setEmailErrorMsg('');
    setPasswordErrorMsg('');
    setConfPasswordErrorMsg('');
  }

  function checkPasswords() {
    const password = document.getElementById('password').value;
    const confPassword = document.getElementById('confirmationPassword').value;
    if ( password !== confPassword )
      setConfPasswordErrorMsg("Passwords are different!");
  }

  function onSubmitButtonClick() {
    cleanseErrorMessage();
    checkPasswords();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (confPasswordErrorMsg) 
      return;

    const data = new FormData(event.currentTarget);
    registerUser(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}>
            E22
          </Avatar>
          <Typography component="h1" variant="h5">
           Sign up
          </Typography>
          <Box component="form" onSubmit={ handleSubmit } sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  id="userName"
                  name="userName"
                  label="Username"
                  error= { usernameErrorMsg }
                  helperText= { usernameErrorMsg }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  error= { emailErrorMsg }
                  helperText= { emailErrorMsg }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  error= { passwordErrorMsg }
                  helperText= { passwordErrorMsg }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="confirmationPassword"
                  name="confirmationPassword"
                  label="Confirm password"
                  type="password"
                  error= { confPasswordErrorMsg }
                  helperText= { confPasswordErrorMsg }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              onClick={ onSubmitButtonClick }
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>
            <Grid container justifyContent="center">
              <Grid item >
                <Link href="#" variant="body2" >
                 Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}