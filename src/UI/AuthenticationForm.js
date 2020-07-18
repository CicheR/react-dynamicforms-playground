import React, { useState } from "react";
//import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Form from "./Form";

function AuthenticationForm(props) {
  const [formData, setFormData] = useState({});
  const onSubmit = e => {
    e.preventDefault();
    props
      .actionMethod(formData)
      .then(() => {
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
      formTitle={props.formTitle}
      setFormData={setFormData}
      formStructure={props.formStructure}
      formData={formData}
      buttonText={props.buttonText}
    />
  );
}

export default withRouter(AuthenticationForm);

/*
export default connect(
  null,
  { registerUser, signInUser }
)(withRouter(AuthenticationForm));
*/
