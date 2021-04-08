import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory, useLocation } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import * as style from "./style";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import SuccessForgotPassword from "./SuccessForgotPassword";
import PasswordReset from "./PasswordReset";
import SuccessEmailVerified from "./SuccessEmailVerified";

const Authentication = (props) => {
  const [page, setPage] = useState(["true", null, null, null, null, null]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signInError, setSignInError] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailSignUpError, setEmailSignUpError] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordSignUpError, setPasswordSignUpError] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [confirmPasswordSignUpError, setConfirmPasswordSignUpError] = useState(
    ""
  );
  const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState(false);
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();
  const location = useLocation();

  const resetUserInput = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const resetErrorState = () => {
    setSignInError("");
    setNameError("");
    setNameInvalid(false);
    setEmailSignUpError("");
    setEmailInvalid(false);
    setPasswordSignUpError("");
    setPasswordInvalid(false);
    setConfirmPasswordSignUpError("");
    setConfirmPasswordInvalid(false);
  };

  const handleOnSignUp = async (event) => {
    event.preventDefault();
    resetErrorState();

    let fail = false;
    if (name.length === 0) {
      setNameError("Please fill in your name.");
      setNameInvalid(true);
      fail = true;
    }

    const emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailValidation.test(email)) {
      setEmailSignUpError("Please enter a valid email address.");
      setEmailInvalid(true);
      fail = true;
    }

    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!passwordValidation.test(password)) {
      setPasswordSignUpError(
        "Password must be at least 8 characters and include a lowercase, uppercase, special symbol, and number."
      );
      setPasswordInvalid(true);
      fail = true;
    }

    if (confirmPassword.length === 0 || password !== confirmPassword) {
      setConfirmPasswordSignUpError("Your passwords do not match.");
      setConfirmPasswordInvalid(true);
      fail = true;
    }

    if (fail === true) return;

    try {
      await Auth.signUp({
        username: email,
        password: password,
      });
      resetUserInput();
    } catch (e) {
      console.log(e.message);
      if (e.message === "An account with the given email already exists.") {
        setEmailSignUpError("Email already exists.");
      }
    }
  };

  const handleOnSignIn = async (event) => {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      resetUserInput();
      history.push("/dashboard");
    } catch (e) {
      if (e.message === "User is not confirmed.") {
        setSignInError("Email has not been confirmed. Email resent.");
        Auth.resendSignUp(email);
      } else {
        setSignInError("Email/password is incorrect");
      }
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    const emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailValidation.test(email)) {
      setEmailSignUpError("Please enter a valid email address.");
      setEmailInvalid(true);
      return;
    }

    try {
      await Auth.forgotPassword(email);
      changePage(3);
    } catch (e) {
      alert(e.message);
      console.log(e.message);
    }
  };

  const handleOnNewPasswordReset = async (event) => {
    event.preventDefault();
    resetErrorState();

    let fail = false;

    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!passwordValidation.test(password)) {
      setPasswordSignUpError(
        "Password must be at least 8 characters and include a lowercase, uppercase, special symbol, and number."
      );
      setPasswordInvalid(true);
      fail = true;
    }

    if (confirmPassword.length === 0 || password !== confirmPassword) {
      setConfirmPasswordSignUpError("Your passwords do not match.");
      setConfirmPasswordInvalid(true);
      fail = true;
    }

    if (fail === true) return;

    // This will fail if email has slashes in it.
    const username = location.pathname.split("/")[2];
    const resetCode = location.pathname.split("/")[3];

    try {
      await Auth.forgotPasswordSubmit(username, resetCode, password);
      resetUserInput();
      changePage(0);
      history.push("/sign-in");
    } catch (e) {
      console.log(e.message);
      if (e.message === "An account with the given email already exists.") {
        setEmailSignUpError("Email already exists.");
      }
    }
  };

  const changePage = (index) => {
    resetUserInput();
    resetErrorState();

    setPage(
      page.map((x, i) => {
        if (index === i) return "true";
        return null;
      })
    );
  };

  useEffect(() => {
    if (props.type === "PasswordReset") changePage(4);
    if (props.type === "SuccessEmail") changePage(5);
    // eslint-disable-next-line
  }, []);

  return (
    <style.CenterContainer>
      {page[0] && (
        <SignIn
          page={page}
          handleOnSignIn={handleOnSignIn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          signInError={signInError}
          changePage={changePage}
        />
      )}
      {page[1] && (
        <SignUp
          page={page}
          changePage={changePage}
          name={name}
          setNameInvalid={setNameInvalid}
          setName={setName}
          nameError={nameError}
          nameInvalid={nameInvalid}
          email={email}
          setEmailInvalid={setEmailInvalid}
          setEmail={setEmail}
          emailSignUpError={emailSignUpError}
          emailInvalid={emailInvalid}
          password={password}
          passwordSignUpError={passwordSignUpError}
          passwordInvalid={passwordInvalid}
          setPasswordInvalid={setPasswordInvalid}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPasswordInvalid={setConfirmPasswordInvalid}
          setConfirmPassword={setConfirmPassword}
          confirmPasswordSignUpError={confirmPasswordSignUpError}
          confirmPasswordInvalid={confirmPasswordInvalid}
          handleOnSignUp={handleOnSignUp}
        />
      )}
      {page[2] && (
        <ForgotPassword
          page={page}
          changePage={changePage}
          handleForgotPassword={handleForgotPassword}
          email={email}
          setEmailInvalid={setEmailInvalid}
          setEmail={setEmail}
          emailInvalid={emailInvalid}
          emailSignUpError={emailSignUpError}
        />
      )}
      {page[3] && <SuccessForgotPassword page={page} changePage={changePage} />}
      {page[4] && (
        <PasswordReset
          page={page}
          changePage={changePage}
          password={password}
          setPasswordInvalid={setPasswordInvalid}
          setPassword={setPassword}
          passwordInvalid={passwordInvalid}
          passwordSignUpError={passwordSignUpError}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          setConfirmPasswordInvalid={setConfirmPasswordInvalid}
          confirmPasswordSignUpError={confirmPasswordSignUpError}
          handleOnNewPasswordReset={handleOnNewPasswordReset}
          confirmPasswordInvalid={confirmPasswordInvalid}
        />
      )}
      {page[5] && <SuccessEmailVerified page={page} changePage={changePage} />}
    </style.CenterContainer>
  );
};

export default Authentication;
