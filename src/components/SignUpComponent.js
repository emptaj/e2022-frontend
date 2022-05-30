import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const emptyErrorMsg = {
  username: '',
  email: '',
  password: '',
  confPassword: '', 
  message: ''
}

export default function SignUpComponent() {
  const [errorMsg, setErrorMsg] = useState(emptyErrorMsg);
  const [requestData, setRequestData] = useState({});
  const isMounted = useRef(false);
  
  useEffect(() =>
    {
      if(!isMounted.current){
        isMounted.current = true;
        return;
      }
      if(checkPasswords())
        registerUser();
    }, [requestData])

  async function registerUser() {
    console.log(requestData)
    const response = await fetch('http://localhost:8080/api/users/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
                  username: requestData.username,
                  email: requestData.email,
                  password: requestData.password
                })
      }).catch(err => console.log(err));
      
      const data = await response.json();
      console.log(data);
      if(response.status === 400)
        setErrorMsg(data);
    }
  
    function checkPasswords() {
      if ( !requestData.password || requestData.password !== requestData.confPassword )
      {
        setErrorMsg({ confPassword: "Passwords are different!" });
        return false;
      }
      return true;
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      setRequestData({
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
        confPassword: data.get('confirmationPassword')
      })
    };

    return (
      <Box component="form" onSubmit={ handleSubmit } sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoFocus
            required
            fullWidth
            id="username"
            name="username"
            label="Username"
            error= { !!errorMsg.username || !!errorMsg.message }
            helperText= { errorMsg.username }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            error= { !!errorMsg.email || !!errorMsg.message }
            helperText= { errorMsg.email }
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
            error= { !!errorMsg.password || !!errorMsg.message }
            helperText= { errorMsg.password }
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
            error= { !!errorMsg.confPassword || !!errorMsg.message }
            helperText= { !!errorMsg.confPassword? errorMsg.confPassword : errorMsg.message }
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
    )
}