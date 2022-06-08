import * as React from 'react';


import { useState } from "react";
import SignInForm from './SignInForm';

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
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refreshtoken);
    }

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
        <SignInForm formData={signInData} onChangeFunction={handleChange} onSubmitFunction={handleSubmit} />
    )
}