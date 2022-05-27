import { TextField, Checkbox, FormControlLabel, Divider, Button } from '@mui/material'
import React from 'react'

function LoginForm() {
    return (
        <div>
            <TextField
                label="username"
                placeholder="username"
                fullWidth
                required />

            <TextField
                label="password"
                type="password"
                placeholder="password"
                fullWidth
                required />

            <FormControlLabel
                control={
                    <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="zapamiętaj mnie"
            />
            <Button
                variant="contained"
                fullWidth
                type="submit"
                color="primary">
                ZALOGUJ
            </Button>
        </div>
    )
}

export default LoginForm
