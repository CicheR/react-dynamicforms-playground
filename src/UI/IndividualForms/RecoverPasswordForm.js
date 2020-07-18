import React from "react";
import { fields } from "./../FormFields";
import AuthenticationForm from "./../AuthenticationForm";

const recoverPasswordForm = [fields.email];

async function recoverPassword(data) {
  console.log(data);
  alert("«« Recover Password »» \n" + JSON.stringify(data, null, 2));
}

export default function RecoverPasswordForm() {
  return (
    <AuthenticationForm
      actionMethod={recoverPassword}
      formTitle="Recover password"
      buttonText="Send link"
      formStructure={recoverPasswordForm}
    />
  );
}
