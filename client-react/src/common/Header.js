import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import user_icon from "../assets/user_icon.png";

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: center;
  background-color: #8fe8df;
  color: #ff4d4d;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-items: center;
`;
const Link = styled.a`
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const Header = () => (
  <Container>
    <Link href="#">DASHBOARD</Link>
    <img src={logo} style={{ height: 50 }} alt="logo" />
    <img src={user_icon} style={{ height: 50 }} alt="user icon" />
  </Container>
);

export default Header;
