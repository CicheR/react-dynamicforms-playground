import React from "react";

import Input from "./Input";
import SubmitButton from "./SubmitButton";
import classes from "./css/Form.module.css";

export default function Form({
  formStructure,
  formData,
  setFormData,
  formTitle,
  buttonText,
  onSubmit
}) {
  const handleChange = event => {
    const formDataCopy = { ...formData };
    formDataCopy[event.target.name] = event.target.value;
    setFormData(formDataCopy);
  };
  return (
    <div>
      <form className={classes.box} onSubmit={onSubmit}>
        <span className={classes.textCenter}>{formTitle}</span>
        {formStructure.map(f => (
          <Input
            key={f.name}
            type={f.type}
            name={f.name}
            id={f.id}
            text={f.text}
            handleChange={handleChange}
            placeholder={f.placeholder}
            required={f.required}
          />
        ))}
        <SubmitButton buttonType="primary" text={buttonText} />
      </form>
    </div>
  );
}
