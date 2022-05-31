import React from 'react';

import AuthPageComponent from '../components/AuthPageComponent.js';
import SignUpComponent from '../components/SignUpComponent.js';

export default function SignUp() {

  return (
    <AuthPageComponent text="Sign up" someComponent={<SignUpComponent />} />
  );
}