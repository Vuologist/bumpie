import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

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

const Footer = () => {
  return (
    <Switch>
      <Route exact path="/sign-in"></Route>
      <Route exact path="/">
        <Container bg="green">
          © {new Date().getFullYear()} BUMPIE. All Rights Reserved.
        </Container>
      </Route>
      <Route exact path={["/about-us", "/faq"]}>
        <Container bg="white">
          © {new Date().getFullYear()} BUMPIE. All Rights Reserved.
        </Container>
      </Route>
      <Route>
        <Container bg="yellow">
          © {new Date().getFullYear()} BUMPIE. All Rights Reserved.
        </Container>
      </Route>
    </Switch>
  );
};

export default Footer;
