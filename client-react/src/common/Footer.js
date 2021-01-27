import React from "react";
import styled from "styled-components";

const handleBgColor = (color) => {
  switch (color.bg) {
    case "green":
      return "#46A3A5";
    case "yellow":
      return "#ffd217";
    default:
      return "#fff";
  }
};

const handleColor = (color) => {
  switch (color.bg) {
    case "green":
      return "#8FE8DF";
    case "yellow":
      return "#ff4d4d";
    default:
      return "#C5C5C4";
  }
};

// const handleBorder = (color) => {
//   switch (color.bg) {
//     case "white":
//       return "1px solid #C5C5C4";
//     default:
//       return "none";
//   }
// };

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

const Footer = (bg, color) => {
  console.log(color);
  return (
    <Container bg={bg}>
      © {new Date().getFullYear()} BUMPIE. All Rights Reserved.
    </Container>
  );
};

export default Footer;
