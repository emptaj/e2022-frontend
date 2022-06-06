import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import SignUpForm from './SingUpForm';

const emptyErrorMsg = {
  username: '',
  email: '',
  password: '',
  confPassword: '', 
  message: ''
}

export default function SignUpComponent() {
  const [signUpData, setSignUpData] = useState({username: '', email: '', password: '', confPassword: ''})
  const [errorMsg, setErrorMsg] = useState(emptyErrorMsg);

  async function registerUser() {
    const response = await fetch('http://localhost:8080/api/users/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
                  username: signUpData.username,
                  email: signUpData.email,
                  password: signUpData.password
                })
      }).catch(err => console.log(err));
    
    const data = await response.json();
    console.log(data);
    if(response.status === 400)
      setErrorMsg(data);
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSignUpData((prevData) => {
      return { 
        ...prevData,
        [name]: value
      }
    })
  }

  useEffect(() => {
    if(!errorMsg.useEffect || !Object.values(errorMsg).every(x => !x))
      return;
    registerUser();
  }, [errorMsg]);

  const handleSubmit = () => {
    console.log("DATA FOR SERVER: " + JSON.stringify(signUpData))
    registerUser();
  };

  return (
    <SignUpForm formData={signUpData} onChangeFunction={handleChange} onSubmitFunction={handleSubmit} 
      errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
  )
}