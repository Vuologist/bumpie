import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: ${(props) => (props.green ? "#46A3A5" : "#ffd217")};
  text-align: center;
  color: ${(props) => (props.green ? "#8FE8DF" : "#ff4d4d")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  min-height: 10vh;
`;

const Footer = (green) => {
  return (
    <Container green={green}>
      © {new Date().getFullYear()} BUMPIE. All Rights Reserved.
    </Container>
  );
};

export default Footer;
