import { Grid, Paper, styled, Avatar } from '@mui/material'
import React from 'react'
import LoginForm from '../components/LoginForm'

function Login() {
    const StyledPaper = styled(Paper)({
        padding: "20px",
        height: "70vh",
        width: 400,
        margin: "20px auto"

    })

    const StyledAvatar = styled(Avatar)({
        backgroundColor: "#ff5722"
    })

    return (
        <div>
            <h1>Login page</h1>
            <Grid
                align="center"
            >
                <StyledPaper elevation={10}>
                    <StyledAvatar>E22</StyledAvatar>
                    <LoginForm />
                </StyledPaper>
            </Grid>
        </div >
    )
}

export default Login
