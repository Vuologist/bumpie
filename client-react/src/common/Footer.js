import React, { useState } from "react";
import styled from "styled-components";

const handleBgColor = (color) => {
  switch (color) {
    case "green":
      return "#46A3A5";
    case "yellow":
      return "#ffd217";
    default:
      return "#fff";
  }
};

const handleColor = (color) => {
  switch (color) {
    case "green":
      return "#8FE8DF";
    case "yellow":
      return "#ff4d4d";
    default:
      return "#C5C5C4";
  }
};

const handleFooterColor = (path) => {
  switch (path) {
    case "/about-us":
      return "white";
    case "/faq":
      return "white";
    case "/":
      return "green";
    case "/sign-in":
      return "none";
    default:
      return "yellow";
  }
};

const Container = styled.footer`
  background-color: ${(props) => handleBgColor(props.bg)};
  text-align: center;
  color: ${(props) => handleColor(props.bg)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  min-height: 10vh;
  /* border-top: ; */
`;

const Footer = (path) => {
  const [pathname, setPathname] = useState(path.path);
  let color = handleFooterColor(pathname);
  return (
    <Container bg={color}>
      © {new Date().getFullYear()} BUMPIE. All Rights Reserved.
    </Container>
  );
};

export default Footer;
