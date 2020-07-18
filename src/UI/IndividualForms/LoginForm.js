import React from "react";
import { fields } from "./../FormFields";
import AuthenticationForm from "./../AuthenticationForm";

const loginForm = [fields.email, fields.password];

async function signInUser(data) {
  console.log(data);
  alert("«« SignIn user »» \n" + JSON.stringify(data, null, 2));
}

export default function LoginForm() {
  return (
    <AuthenticationForm
      actionMethod={signInUser}
      formTitle="Login"
      buttonText="Login"
      formStructure={loginForm}
    />
  );
}
