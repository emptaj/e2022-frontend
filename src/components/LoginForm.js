import {
    TextField,
    Checkbox,
    FormControlLabel,
    Divider,
    Button,
    Grid
} from '@mui/material'
import React from 'react'

function LoginForm() {
    return (
        <Grid container
            direction="row"
            spacing={3}>
            <Grid item md={12} sm={12} xs={10}>
                <TextField
                    label="username"
                    placeholder="username"
                    fullWidth
                    required />
            </Grid>
            <Grid item md={12} sm={12} xs={10}>
                <TextField
                    label="password"
                    type="password"
                    placeholder="password"
                    fullWidth
                    required />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
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
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    color="primary"
                    sx={{ marginTop: "10px" }}>
                    ZALOGUJ
                </Button>
            </Grid>
        </Grid >
    )
}

export default LoginForm
