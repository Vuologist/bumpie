import React from "react";
import HeaderDropdown from "../common/HeaderDropdown";
import BumpieLogo from "../assets/logo.png";
import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";
import UserLogo from "../common/UserLogo";
import { device } from "../common/MediaBreakpoints";
import { Route, Switch, Link } from "react-router-dom";

const rubberAnimation = keyframes`${rubberBand}`;

const Nav = styled.nav`
  background-color: #8fe8df;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const LinkBase = styled(Link)`
  font-family: Quicksand;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
`;
const LinkRight = styled(LinkBase)`
  margin-right: 40px;
  position: relative;
  :hover {
    color: #fff;
    text-decoration: none;
  }
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  :hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
const LinkPink = styled(LinkBase)`
  color: #ff4d4d;
`;

const Img = styled.img`
  height: auto;
  width: 30px;
  &:hover {
    animation: 2s ${rubberAnimation};
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`;

const Wrapper = styled.div`
  position: relative;
  justify-self: flex-end;
  @media ${device.mobileM} {
    justify-self: end;
    margin-right: 10px;
  }
  @media ${device.mobileL} {
    margin-right: 25px;
    justify-self: end;
  }
`;

const StyledDropdown = styled(HeaderDropdown)`
  display: none;
  ${Wrapper}:hover & {
    display: flex;
  }
  ${Wrapper}:focus & {
    display: flex;
  }
  @media ${device.mobileL} {
    margin-right: 70px;
  }
`;

function checkAuth(auth) {
  if (auth) {
    return (
      <Nav>
        <div>
          <Link to="/" style={{ marginRight: 40 }}>
            <Img src={BumpieLogo} alt="Bumpie Logo" />
          </Link>
        </div>
        <LinkWrapper>
          <LinkRight to="/">HOME</LinkRight>
          <LinkRight to="/about-us">ABOUT US</LinkRight>
          <LinkRight to="/FAQ">FAQ</LinkRight>
          <LinkRight to="/dashboard">DASHBOARD</LinkRight>
          <Wrapper>
            <UserLogo />
            <StyledDropdown />
          </Wrapper>
        </LinkWrapper>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <div>
          <Link to="/" style={{ marginRight: 40 }}>
            <Img src={BumpieLogo} alt="Bumpie Logo" />
          </Link>
        </div>
        <div>
          <LinkRight to="/">HOME</LinkRight>
          <LinkRight to="/about-us">ABOUT US</LinkRight>
          <LinkRight to="/FAQ">FAQ</LinkRight>
          <LinkPink to="/sign-in">SIGN IN</LinkPink>
        </div>
      </Nav>
    );
  }
}

const Navbar = (isAuth) => {
  return (
    <Switch>
      <Route path="/sign-in"></Route>
      <Route path="/email-verified"></Route>
      <Route path="/password-reset"></Route>
      <Route>{checkAuth(isAuth.isAuth)}</Route>
    </Switch>
  );
};

export default Navbar;
