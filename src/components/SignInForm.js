import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function SignInForm({ formData, onChangeFunction, onSubmitFunction, errorMsg }) {

    return (
        <Box component="form" onSubmit={onSubmitFunction} sx={{ mt: 1 }}>
            <TextField
                autoFocus
                required
                fullWidth
                id="username"
                name="username"
                label="Username"
                value={formData.username}
                onChange={event => onChangeFunction(event)}
                error={errorMsg}
                margin="normal"
            />
            <TextField
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={event => onChangeFunction(event)}
                error={errorMsg}
                helperText={errorMsg? errorMsg : ' '}
                margin="normal"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Log in
            </Button>
            <Grid container justifyContent="space-between">
                <Grid item >
                    <Link href="#" variant="body2" >
                        I forgot my password
                    </Link>
                </Grid>
                <Grid item >
                    <Link href="/register" variant="body2" >
                        Sign up
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignInForm
