import React from "react";
import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";
import logo from "../assets/logo.png";
import UserLogo from "../common/UserLogo";
import HeaderDropdown from "../common/HeaderDropdown";
import { device } from "../common/MediaBreakpoints";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const rubberAnimation = keyframes`${rubberBand}`;

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: center;
  background-color: #8fe8df;
  color: #ff4d4d;
  min-height: 10vh;
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledLink = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  justify-self: flex-start;
  margin-left: 70px;

  @media ${device.mobileL} {
    display: none;
  }
`;

const Branding = styled.img`
  &:hover {
    animation: 2s ${rubberAnimation};
  }
  height: 50px;
  justify-self: center;
  @media ${device.mobileM} {
    margin-left: 15px;
    justify-self: start;
  }
  @media ${device.mobileL} {
    margin-left: 25px;
    justify-self: start;
  }
`;

const Wrapper = styled.div`
  position: relative;
  justify-self: flex-end;
  margin-right: 70px;
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

const Header = (isAuth) => {
  let HeaderReturn;
  if (isAuth) {
    HeaderReturn = (
      <Container>
        <StyledLink to="/dashboard">DASHBOARD</StyledLink>
        <StyledLink to="/">
          <Branding src={logo} alt="logo" />
        </StyledLink>
        <Wrapper>
          <UserLogo />
          <StyledDropdown />
        </Wrapper>
      </Container>
    );
  } else {
    HeaderReturn = <Navbar />;
  }
  return HeaderReturn;
};

export default Header;
