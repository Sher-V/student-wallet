import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import classNames from "classnames";
import { connect } from "react-redux";
import LoginForm from "../login/login-form";
import SignupForm from "../signup/signup-form";
import LoginFormInfo from "../login/login-form-info";
import {
  LOGIN_MODE,
  RESET_MODE,
  SIGNUP_MODE,
} from "../../../constants/signup-modes";
import AuthModalBody from "./auth-modal-body";
import { hideAuthModal } from "../../../actions/authModal";
import "./auth-modal.scss";
import ResetForm from "../reset/reset-form";

class AuthModal extends React.Component {
  getSections = () => {
    switch (this.props.mode) {
      case SIGNUP_MODE:
        return (
          <SignupForm
            className="signup-modal__form-section"
            mode={this.props.mode}
          />
        );
      case LOGIN_MODE:
        return (
          <LoginForm
            className="signup-modal__form-section"
            mode={this.props.mode}
          />
        );
      case RESET_MODE:
        return (
          <ResetForm
            className="signup-modal__form-section"
            mode={this.props.mode}
          />
        );
      default:
        return <>No match</>;
    }
  };

  render() {
    const classList = classNames("rm-modal rm-modal__signup");
    return (
      <Modal
        ariaHideApp={false}
        isOpen={this.props.signUpOpen}
        onRequestClose={this.props.hideAuthModal}
        overlayClassName="rm-overlay"
        contentLabel="Auth Modal"
        className={classList}
      >
        <AuthModalBody>
          <LoginFormInfo className="signup-modal__content" />
          {this.getSections()}
        </AuthModalBody>
      </Modal>
    );
  }
}

AuthModal.propTypes = {
  mode: PropTypes.string,
  signUpOpen: PropTypes.bool,
  hideAuthModal: PropTypes.func,
};

const mapStateToProps = ({ authModal }) => {
  return {
    mode: authModal.mode,
    signUpOpen: authModal.signUpOpen,
  };
};
const mapDispatchToProps = { hideAuthModal };
export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
