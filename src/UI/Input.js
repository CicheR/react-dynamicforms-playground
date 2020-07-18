import React from "react";
//import classes from "./css/Input.module.css";
import "./css/Input.css";

export default function Input({
  text,
  type,
  placeholder = text,
  handleChange,
  name,
  id = name,
  required = false
}) {
  return (
    <div className="input-container">
      <input
        required={required}
        name={name}
        id={id}
        type={type}
        //placeholder={placeholder}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
