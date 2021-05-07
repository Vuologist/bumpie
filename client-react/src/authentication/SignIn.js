import React from "react";
import * as style from "./style";
import TextInput from "../common/TextInput";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const SignIn = ({
  page,
  handleOnSignIn,
  email,
  setEmail,
  password,
  setPassword,
  signInError,
  changePage,
}) => (
  <style.ContentWrapper display={page[0]}>
    <style.LeftContainer light>
      <style.StyledBrandingLink to="/">
        <style.Branding src={logo} top alt="logo" />
      </style.StyledBrandingLink>
      <style.Title>Sign In</style.Title>
      <style.Form onSubmit={handleOnSignIn}>
        <TextInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ textAlign: "center" }}>
          {signInError && (
            <style.ErrorMessage>{signInError}</style.ErrorMessage>
          )}
        </div>
        <style.StyledLink onClick={() => changePage(2)} to="forgot-password">
          I forgot my password
        </style.StyledLink>
        <style.Button text="SIGN IN" type="submit" onClick={handleOnSignIn} />
      </style.Form>
    </style.LeftContainer>
    <style.RightContainer>
      <style.Title light>Welcome!</style.Title>
      <style.Text>
        Don't have an account? <br /> Join today, it's free and easy!
      </style.Text>
      <Link to="sign-up"><style.Button light text="SIGN UP" onClick={() => changePage(1)}/></Link>
    </style.RightContainer>
  </style.ContentWrapper>
);

export default SignIn;
