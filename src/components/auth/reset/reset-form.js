import React, { useState } from "react";
import PropTypes from "prop-types";
import AuthFormTitle from "../auth-modal/auth-form-title";
import InputField from "../../common/input-field/input-field";
import { ruleRunner, run } from "../../../utils/validation/validation";
import { required } from "../../../utils/validation/validators";
import SubmitButton from "../../common/button/button-types/submit-button";

const InputFieldStyle = {
  marginBottom: 10,
};

const runners = [ruleRunner("email", "Email Address", required)];

const ResetForm = ({ className, mode, displayLoginModal }) => {
  const [email, setEmail] = useState("");
  const [validationErrors, setValidationErrors] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleFieldChanged = (e) => {
    const validationErrors = run(email, runners);
    setEmail(e.currentTarget.value);
    setValidationErrors(validationErrors);
  };

  const getErrorText = (field) => validationErrors[field];

  return (
    <div className={className}>
      <div
        className="form-box signup-form"
        style={{ backgroundColor: "#f0f8fd", border: "1px solid #d8e1e6" }}
      >
        <AuthFormTitle text="Access your Account" />
        <div style={{ padding: "30px 20px" }}>
          <form noValidate>
            <InputField
              id={"email"}
              isValidated
              placeholder="Email Address"
              style={InputFieldStyle}
              showError={showError}
              type="email"
              onChange={handleFieldChanged}
              errorText={getErrorText}
            />
            <SubmitButton text="Reset" />
          </form>
        </div>
      </div>
      {/*      <div className="text-gray text-small" style={{ margin: "14px 0" }}>
        Don't have an account?{" "}
        <a href="#/" onClick={this.redirectToSignup}>
          Sign up
        </a>
      </div>
      <div className="text-gray text-small" style={{ margin: "14px 0" }}>
        Forgot your password?{" "}
        <a href="#/" onClick={this.redirectToReset}>
          Reset
        </a>
      </div>*/}
    </div>
  );
};

ResetForm.propTypes = {
  displayLoginModal: PropTypes.func,
  mode: PropTypes.string,
  className: PropTypes.string,
};

export default ResetForm;
