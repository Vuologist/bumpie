import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: #ffd217;
  text-align: center;
  color: #ff4d4d;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      © {new Date().getFullYear()} BUMPIE. All Rights Reserved.
    </Container>
  );
};

export default Footer;
