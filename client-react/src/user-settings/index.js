import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import DynamicButton from "../common/DynamicButton";

const Wrapper = styled.div`
  padding: 50px 100px 50px 100px;
  display: flex;
  height: 80vh;
  justify-content: center;
`;

const Container = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  font-family: "Roboto";
  opacity: 0.6;
  align-self: center;
  width: 100%;
`;

const PageTitle = styled.h2`
  font-size: 35;
  font-family: "Roboto";
  color: #54494b;
  width: 13%;
`;

const CustomLink = styled(Link)`
  color: #54494b;

  :hover {
    color: #54494b;
    text-decoration-color: #54494b;
  }
`;

const StyledButton = styled(DynamicButton)`
  text-transform: uppercase;
  color: black;
  align-self: flex-end;
`;

const UserSettingsHome = () => {
  return (
    <Wrapper>
      <PageTitle>User Settings</PageTitle>
      <Container>
        <CustomLink to="/user-settings/email">Change E-mail</CustomLink>
        &nbsp;|&nbsp;
        <CustomLink to="/user-settings/password">Change Password</CustomLink>
        &nbsp;|&nbsp;
        <CustomLink to="/user-settings/name">Change Name</CustomLink>
        <hr style={{ width: "75%" }} />
      </Container>
      <StyledButton text="exit" />
    </Wrapper>
  );
};

export default UserSettingsHome;
