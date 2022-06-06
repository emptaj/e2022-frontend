import React from 'react';

import SignInComponent from '../components/SignInComponent';
import AuthPageComponent from '../components/AuthPageComponent';


export default function SignIn() {

  return (
    <AuthPageComponent text='Log in' SomeComponent={SignInComponent} />
  );
}