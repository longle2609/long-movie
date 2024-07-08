import React from "react";
import "./inputForm.scss";

const InputForm = ({
  type = "text",
  icon,
  placeholder,
  id,
  handleChange,
  handleBlur,
  name,
  touched,
  errors,
  value,
  className,
}) => {
  return (
    <div className="form-input py-2  text-black">
      <span>
        <i className={icon}></i>
      </span>
      <input
        className={className}
        autoComplete="current-password"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
      />
      {touched == true && errors && (
        <p className="text-left text-xs text-red-500 py-1">{errors}</p>
      )}
    </div>
  );
};

export default InputForm;
