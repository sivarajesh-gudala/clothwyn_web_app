import React from "react";
import "../auth.scss";

import ResetPassword from "../resetPwd/resetPwd";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Dialog from "../../../components/Dialog/Dialog";

const Login = () => {
  const resetPassword = (email: string): void => {
    console.log("Reset password email:", email);
  };

  return (
    <>
      <section className="auth-page">
        <div className="auth-card">
          <form>
            {/* Email */}
            <div className="form-group">
              <Input type="email" placeholder="Email" />
            </div>

            {/* Password */}
            <div className="form-group">
              <Input type="password" placeholder="Password" togglePassword />
            </div>

            {/* Actions */}
            <div className="login-act-btns mb-4">
              <Button type="submit">Login</Button>

              <button
                type="button"
                className="link-btn"
                data-bs-toggle="modal"
                data-bs-target="#resetModal"
              >
                Forgot password?
              </button>
            </div>

            {/* Signup */}
            <Button type="button" variant="outline" className="signup-btn">
              Create your Clothwyn account
            </Button>
          </form>
        </div>
      </section>

      {/* Reset Password Modal */}
      <Dialog id="resetModal" title="Reset Password">
        <ResetPassword onReset={resetPassword} />
      </Dialog>
    </>
  );
};

export default Login;
