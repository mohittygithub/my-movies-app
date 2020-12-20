import React from "react";
import "./toast.styles.css";

const Toast = ({ text, ...otherProps }) => {
  setTimeout(() => {
    return <div className="toast"></div>;
  }, 3000);
};
export default Toast;
