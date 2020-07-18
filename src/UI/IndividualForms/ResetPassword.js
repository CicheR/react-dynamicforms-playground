import React from "react";
import { fields } from "./../FormFields";
import AuthenticationForm from "./../AuthenticationForm";

const resetPasswordForm = [
  fields.passwordPrevious,
  fields.password,
  fields.passwordConfrimation
];

async function resetPassword(data) {
  console.log(data);
  alert("«« Reset password »» \n" + JSON.stringify(data, null, 2));
}

export default function RegisterForm() {
  return (
    <AuthenticationForm
      actionMethod={resetPassword}
      formTitle="Reset password"
      buttonText="Reset"
      formStructure={resetPasswordForm}
    />
  );
}
