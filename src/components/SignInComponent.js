import * as React from 'react';


import { useState } from "react";
import SignInForm from './SignInForm';

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
        <SignInForm formData={signInData} onChangeFunction={handleChange} onSubmitFunction={handleSubmit} />
    )
}