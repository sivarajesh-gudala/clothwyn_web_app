import React, { useState } from "react";
import "./Input.scss";

interface InputProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: React.ReactNode;
  togglePassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  togglePassword = false,
}) => {
  const [showPwd, setShowPwd] = useState(false);

  const inputType =
    togglePassword && type === "password"
      ? showPwd
        ? "text"
        : "password"
      : type;

  return (
    <div className={`cw-input ${error ? "has-error" : ""}`}>
      <div className="cw-input-wrapper">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {togglePassword && type === "password" && (
          <span className="cw-input-icon" onClick={() => setShowPwd(!showPwd)}>
            {showPwd ? "🙈" : "👁️"}
          </span>
        )}

        {icon && <span className="cw-input-icon">{icon}</span>}
      </div>

      {error && <span className="cw-error">{error}</span>}
    </div>
  );
};

export default Input;
