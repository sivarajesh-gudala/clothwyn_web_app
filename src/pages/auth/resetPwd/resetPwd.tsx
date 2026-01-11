import React, { FC, useState } from "react";

export interface resetPwdProps {
  onReset: (email: string) => void;
}

const ResetPassword: FC<resetPwdProps> = ({ onReset }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email) {
      setError("Email shouldn't be empty");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email is invalid");
      return;
    }

    setError("");
    onReset(email);
  };

  return (
    <>
      <h6>Please enter your email to reset your password</h6>

      <form className="row" onSubmit={handleSubmit}>
        <div className="form-group mb-3 col-lg-7">
          <input
            type="email"
            placeholder="Email"
            className="form-control form-control-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <span className="text-danger small">{error}</span>}
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-sm btn-dark"
            data-bs-dismiss="modal"
          >
            Close
          </button>

          <button
            type="submit"
            className="btn btn-sm reset-btn"
            data-bs-dismiss="modal"
          >
            Send Link to Email
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
