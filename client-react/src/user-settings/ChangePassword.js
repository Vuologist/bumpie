import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import TextInput from "../common/TextInput";
import DynamicButton from "../common/DynamicButton";
import SettingsSectionHeader from "../common/SettingsSectionHeader";

import { isPasswordValid, isPasswordMatch } from "../libs/validator";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 50px 100px 50px 100px;
`;

const Container = styled.div`
  margin: 75px 50px 50px 50px;
  font-size: 25px;
  font-weight: bold;
  font-family: "Roboto";
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
  width: 30%;
  display: flex;
  justify-content: space-around;
`;

const PageTitle = styled.h2`
  font-size: 35;
  font-family: "Roboto";
  color: #54494b;
`;

const ErrorMessage = styled.div`
  font-family: "Roboto";
  font-size: 15px;
  margin-top: -10px;
  margin-bottom: 10px;
  color: #ff4d4d;
  width: 360px;
  opacity: 1;
`;

const currentPasswordError = "Invalid password.";
const newPasswordError =
  "Your password needs to contain a minimum of 8 characters. Include 1 lowercase, 1 uppercase, 1 special symbol, and 1 number.";
const confirmNewPasswordError = "Your passwords do not match.";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [isCurrentPasswordError, setIsCurrentPasswordError] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordError, setIsNewPasswordError] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isConfirmNewPasswordError, setIsConfirmNewPasswordError] = useState(
    false
  );
  const history = useHistory();

  const handleOnSave = (event) => {
    event.preventDefault();

    let fail = false;
    if (currentPassword.length === 0) {
      setIsCurrentPasswordError(true);
      fail = true;
    }

    if (!isPasswordValid(newPassword)) {
      setIsNewPasswordError(true);
      fail = true;
    }

    if (
      !isPasswordMatch(newPassword, confirmNewPassword) ||
      confirmNewPassword.length === 0
    ) {
      setIsConfirmNewPasswordError(true);
      fail = true;
    }

    if (fail) return;

    if (!isPasswordValid()) alert("submitting");
  };

  const handleOnCancel = (event) => {
    event.preventDefault();
    history.push("/user-settings");
  };

  return (
    <Wrapper>
      <PageTitle>User Settings</PageTitle>
      <Container>
        <SettingsSectionHeader title="Change Password" />
        <FormContainer>
          <FormWrapper onSubmit={handleOnSave}>
            <TextInput
              type="password"
              placeholder="Enter Current Password"
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value);
                setIsCurrentPasswordError(false);
              }}
              invalid={isCurrentPasswordError}
            />
            {isCurrentPasswordError && (
              <ErrorMessage>{currentPasswordError}</ErrorMessage>
            )}
            <TextInput
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setIsNewPasswordError(false);
              }}
              invalid={isNewPasswordError}
            />
            {isNewPasswordError && (
              <ErrorMessage>{newPasswordError}</ErrorMessage>
            )}
            <TextInput
              type="password"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={(e) => {
                setConfirmNewPassword(e.target.value);
                setIsConfirmNewPasswordError(false);
              }}
              invalid={isConfirmNewPasswordError}
            />
            {isConfirmNewPasswordError && (
              <ErrorMessage>{confirmNewPasswordError}</ErrorMessage>
            )}
          </FormWrapper>
          <ButtonContainer>
            <DynamicButton
              text="CANCEL"
              type="button"
              onClick={handleOnCancel}
            />
            <DynamicButton text="SAVE" type="submit" onClick={handleOnSave} />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default ChangePassword;
