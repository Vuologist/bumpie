import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.footer`
  background-color: #fff;
  text-align: center;
  color: #c5c5c4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding-left: 100px;
  padding-right: 100px;
  width: 100%;
  min-height: 10vh;
  /* border-top: ; */
`;

const StyledLink = styled(Link)`
  color: #c5c5c4;
`;

const StyledSpan = styled.span`
  padding-left: 5px;
  padding-right: 5px;
`;

const Footer = () => {
  return (
    <Container bg="white">
      <span>© {new Date().getFullYear()} BUMPIE. All Rights Reserved.</span>
      <div>
        <StyledLink to="/">Privacy Policy</StyledLink>
        <StyledSpan>|</StyledSpan>
        <StyledLink to="/FAQ">FAQ</StyledLink>
      </div>
    </Container>
  );
};

export default Footer;
