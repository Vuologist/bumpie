import React from "react";
import * as style from "./style";
import logo from "../assets/logo.png";
import { ReactComponent as EmailSVG } from "../assets/Email_verified-01.svg";

const SuccessEmailVerified = ({ page, changePage }) => (
  <style.ContentWrapper display={page[5]}>
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
    <style.RightContainer style={{ paddingBottom: 30 }} light large>
      <style.Title>Email Verified</style.Title>
      <div style={{ fontSize: 20, width: "50%", textAlign: "center" }}>
        Congratulations, you have successfully verified your email!
      </div>
      <EmailSVG style={{ width: "45%" }} />
    </style.RightContainer>
  </style.ContentWrapper>
);

export default SuccessEmailVerified;
