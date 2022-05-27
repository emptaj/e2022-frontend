import { Grid, Paper, styled, Avatar } from '@mui/material'
import React from 'react'
import LoginForm from '../components/LoginForm'

function Login() {
    const StyledPaper = styled(Paper)({
        padding: "20px",
        height: "55vh",
        width: 400,
        margin: "20px auto",
        paddingTop: 50

    })

    const StyledAvatar = styled(Avatar)({
        backgroundColor: "#ff5722",
        width: 50,
        height: 50
    })

    return (
        <div>
            <h1>Login page</h1>

            <StyledPaper elevation={10}>
                <Grid container
                    fixed
                    align="center"
                    direction="row"
                    spacing={4}
                >
                    <Grid item md={12} sm={12} xs={12}>
                        <StyledAvatar>
                            E22
                        </StyledAvatar>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <LoginForm />
                    </Grid>
                </Grid>
            </StyledPaper>
        </div >
    )
}

export default Login
