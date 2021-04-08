import React from "react";
import * as style from "./style";
import TextInput from "../common/TextInput";
import logo from "../assets/logo.png";

const PasswordReset = ({
  page,
  changePage,
  password,
  setPasswordInvalid,
  setPassword,
  passwordInvalid,
  passwordSignUpError,
  confirmPassword,
  setConfirmPassword,
  setConfirmPasswordInvalid,
  confirmPasswordSignUpError,
  handleOnNewPasswordReset,
  confirmPasswordInvalid,
}) => (
  <style.ContentWrapper display={page[4]}>
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
      <style.Button light text="SIGN IN" onClick={() => changePage(1)} />
    </style.LeftContainer>
    <style.RightContainer light large>
      <style.Title>Password Reset</style.Title>
      <style.Form onSubmit={handleOnNewPasswordReset}>
        <div>
          <TextInput
            type="password"
            placeholder="New Password"
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
        <style.Button
          text="RECOVER"
          type="submit"
          onClick={handleOnNewPasswordReset}
        />
      </style.Form>
    </style.RightContainer>
  </style.ContentWrapper>
);

export default PasswordReset;
