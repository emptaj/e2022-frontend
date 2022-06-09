import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { STATIC_LINKS } from '../constants/API_LINKS';
import SignInForm from './SignInForm';

export default function SignInComponent() {
    const [signInData, setSignInData] = useState({ username: '', password: '' });
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    async function sendLogInData() {
        const response = await fetch(STATIC_LINKS.LOGIN, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signInData)
        }).catch(err => console.log(err));

        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('user_id', data.user_id);

        if(response.status === 401)
            setErrorMsg("Invalid username or password!");
        else if(response.status === 200)
            navigate('/')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendLogInData();
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
        <SignInForm formData = { signInData } onChangeFunction = { handleChange } 
            onSubmitFunction = { handleSubmit } errorMsg={errorMsg}
        />
    )
}