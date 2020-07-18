import React from "react";
import { fields } from "./../FormFields";
import AuthenticationForm from "./../AuthenticationForm";

export const registerForm = [
  fields.firstName,
  fields.lastName,
  fields.email,
  fields.addressLine,
  fields.postalCode,
  fields.state,
  fields.dob,
  fields.password,
  fields.passwordConfrimation
];

async function registerUser(data) {
  console.log(data);
  alert("«« Register user »» \n" + JSON.stringify(data, null, 2));
}

export default function RegisterForm() {
  return (
    <AuthenticationForm
      actionMethod={registerUser}
      formTitle="Registration"
      buttonText="Register"
      formStructure={registerForm}
    />
  );
}
