import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: #ffd217;
  flex: 1;
  text-align: center;
  color: #ff4d4d;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Footer = () => {
  return (
    <Container>
      © {new Date().getFullYear()} BUMPIE. All Rights Reserved.
    </Container>
  );
};

export default Footer;
