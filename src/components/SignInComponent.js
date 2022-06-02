import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { useState } from "react";

export default function SignInComponent() {
    const [signInData, setSignInData] = useState({ username: '', password: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        //TUTAJ BĘDZIE LOGIKA ODPOWIEDZIALNA ZA LOGOWANIE
        //BAZUJEMY NA signInData
    };

    const handleChange = (event) => {
        const { value, name } = event.target
        setSignInData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                autoFocus
                required
                fullWidth
                id="username"
                name="username"
                label="Username"
                value={signInData.username}
                onChange={event => handleChange(event)}
                margin="normal"
            />
            <TextField
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={signInData.password}
                onChange={event => handleChange(event)}
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
                    <Link href="#" variant="body2" >
                        Sign up
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}