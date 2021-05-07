import React from "react";
import * as style from "./style";
import logo from "../assets/logo.png";
import { ReactComponent as PaperAirPlaneAndFolderSVG } from "../assets/PaperAirPlaneAndFolder.svg";
import { Link } from "react-router-dom";
const SuccessForgotPassword = ({ page, changePage }) => (
  <style.ContentWrapper display={page[3]}>
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
      <Link to="sign-in"><style.Button light text="SIGN IN" onClick={() => changePage(0)} /></Link>
    </style.LeftContainer>
    <style.RightContainer style={{ paddingBottom: 30 }} light large>
      <style.Title>Password Reset</style.Title>
      <div style={{ fontSize: 20, width: "50%", textAlign: "center" }}>
        A link has been sent to your email to recover your password.
      </div>
      <PaperAirPlaneAndFolderSVG style={{ width: "45%" }} />
    </style.RightContainer>
  </style.ContentWrapper>
);

export default SuccessForgotPassword;
