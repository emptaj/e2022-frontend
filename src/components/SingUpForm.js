import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { validateConfPassword, validateEmail, validatePassword, validateUsername } from '../constants/Validators';

function SignUpForm({ formData, onChangeFunction, errorMsg, setErrorMsg }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMsg({
      username: validateUsername(formData.username),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confPassword: validateConfPassword(formData.password, formData.confPassword),
      useEffect: true
    });
  }

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
            value={formData.username}
            onChange={event => onChangeFunction(event)}
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
            value={formData.email}
            onChange={event => onChangeFunction(event)}
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
            value={formData.password}
            onChange={event => onChangeFunction(event)}
            error= { !!errorMsg.password || !!errorMsg.message }
            helperText= { errorMsg.password }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="confPassword"
            name="confPassword"
            label="Confirm password"
            type="password"
            value={formData.confPassword}
            onChange={event => onChangeFunction(event)}
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
          <Link href="/login" variant="body2" >
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SignUpForm;