import React from "react";
import * as style from "./style";
import TextInput from "../common/TextInput";
import logo from "../assets/logo.png";

const ForgotPassword = ({
  page,
  changePage,
  handleForgotPassword,
  email,
  setEmailInvalid,
  setEmail,
  emailInvalid,
  emailSignUpError,
}) => (
  <style.ContentWrapper display={page[2]}>
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
    <style.RightContainer light large>
      <div style={{ textAlign: "center" }}>
        <style.Title>Forgot Password?</style.Title>
        <div style={{ fontSize: 20 }}>Enter your email below!</div>
      </div>
      <style.Form onSubmit={handleForgotPassword}>
        <div style={{ textAlign: "center" }}>
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
            <style.ErrorMessage>Invalid Email</style.ErrorMessage>
          )}
        </div>
        <style.Button text="RECOVER" type="submit" />
      </style.Form>
    </style.RightContainer>
  </style.ContentWrapper>
);

export default ForgotPassword;
