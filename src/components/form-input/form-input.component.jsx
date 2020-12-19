import React from "react";
import "./form-input.styles.css";

const FormInput = ({ type, onChange, ...otherProps }) => {
  return (
    <input
      type={type}
      className={`${type === "button" ? "form-button" : "form-input"}`}
      {...otherProps}
      onChange={onChange}
    />
  );
};
export default FormInput;
