import * as React from 'react';


import { useState } from "react";
import { STATIC_LINKS } from '../constants/API_LINKS';
import SignInForm from './SignInForm';
import { STATIC_LINKS } from "../constants/API_LINKS"

export default function SignInComponent() {
    const [signInData, setSignInData] = useState({ username: '', password: '' });

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
        console.log(data)
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refreshtoken);
        localStorage.setItem('user_id', data.user_id);
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

    return ( <
        SignInForm formData = { signInData }
        onChangeFunction = { handleChange }
        onSubmitFunction = { handleSubmit }
        />
    )
}