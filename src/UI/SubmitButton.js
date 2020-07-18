import React from "react";

import classes from "./css/Button.module.css";

export default function SubmitButton({ text, buttonType }) {
  return (
    <button type="submit" className={`${classes.btn} ${classes[buttonType]}`}>
      {text}
    </button>
  );
}
