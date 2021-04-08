import React from "react";
import * as style from "./style";
import TextInput from "../common/TextInput";
import logo from "../assets/logo.png";

const SignUp = ({
  page,
  changePage,
  name,
  setNameInvalid,
  setName,
  nameError,
  nameInvalid,
  email,
  setEmailInvalid,
  setEmail,
  emailSignUpError,
  emailInvalid,
  password,
  passwordSignUpError,
  passwordInvalid,
  setPasswordInvalid,
  setPassword,
  confirmPassword,
  setConfirmPasswordInvalid,
  setConfirmPassword,
  confirmPasswordSignUpError,
  confirmPasswordInvalid,
  handleOnSignUp,
}) => (
  <style.ContentWrapper display={page[1]}>
    <style.LeftContainer smol>
      <style.StyledBrandingLink to="/">
        <style.Branding src={logo} top alt="logo" />
      </style.StyledBrandingLink>
      <style.Title light top>
        Welcome!
      </style.Title>
      <style.Text>
        Already have an account? <br /> Sign in!
      </style.Text>
      <style.Button light text="SIGN IN" onClick={() => changePage(0)} />
    </style.LeftContainer>
    <style.RightContainer
      style={{ paddingTop: 50, paddingBottom: 50 }}
      light
      large
    >
      <style.Title>Sign Up</style.Title>
      <style.Form onSubmit={handleOnSignUp}>
        <div>
          <TextInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setNameInvalid(false);
              setName(e.target.value);
            }}
            invalid={nameInvalid}
          />
          {nameError && <style.ErrorMessage>{nameError}</style.ErrorMessage>}
        </div>
        <div>
          <TextInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmailInvalid(false);
              setEmail(e.target.value);
            }}
            invalid={emailInvalid}
          />
          {emailSignUpError && (
            <style.ErrorMessage>{emailSignUpError}</style.ErrorMessage>
          )}
        </div>
        <div>
          <TextInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPasswordInvalid(false);
              setPassword(e.target.value);
            }}
            invalid={passwordInvalid}
          />
          {passwordSignUpError && (
            <style.ErrorMessage>{passwordSignUpError}</style.ErrorMessage>
          )}
        </div>
        <div>
          <TextInput
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPasswordInvalid(false);
              setConfirmPassword(e.target.value);
            }}
            invalid={confirmPasswordInvalid}
          />
          {confirmPasswordSignUpError && (
            <style.ErrorMessage>
              {confirmPasswordSignUpError}
            </style.ErrorMessage>
          )}
        </div>
        <style.Button text="SIGN UP" type="submit" onClick={handleOnSignUp} />
      </style.Form>
    </style.RightContainer>
  </style.ContentWrapper>
);

export default SignUp;
