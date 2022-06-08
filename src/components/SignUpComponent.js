import React, { useState, useEffect } from 'react';
import SignUpForm from './SingUpForm';
import ThankYouModal from './ThankYouModal';

const emptyErrorMsg = {
  username: '',
  email: '',
  password: '',
  confPassword: '', 
  message: ''
}

const modalMessage = {
  title: "Account created",
  body: "Thank you very much for creating an account! \n" + 
        "Activation code has been sent on your mailbox",
  navigate: "/login"
}

export default function SignUpComponent() {
  const [signUpData, setSignUpData] = useState({username: '', email: '', password: '', confPassword: ''})
  const [errorMsg, setErrorMsg] = useState(emptyErrorMsg);
  const [isModalShown, setIsModalShown] = useState(false);

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

    if(response.status === 400)
      setErrorMsg(data);
    else if(response.status === 201)
      setIsModalShown(true);
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
    if(!errorMsg.useEffect || errorMsg.username || errorMsg.email | errorMsg.password)
      return;
    registerUser();
  }, [errorMsg]);

  return (
  <div>
    <SignUpForm formData={signUpData} onChangeFunction={handleChange} errorMsg={errorMsg} 
      setErrorMsg={setErrorMsg} />
    <ThankYouModal isModalShown={isModalShown} modalMessage={modalMessage} />
  </div>  
  )
}