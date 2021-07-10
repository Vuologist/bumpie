import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

import TextInput from "../common/TextInput";
import DynamicButton from "../common/DynamicButton";
import SettingsSectionHeader from "../common/SettingsSectionHeader";
import Alert from "../common/Alert";

import { isEmailValid } from "../libs/validator";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px 100px 50px 100px;
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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
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

const ChangeEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertBg, setAlertBg] = useState(false);
  const [alertTxt, setAlertTxt] = useState("");
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  const handleOnSave = async (event) => {
    event.preventDefault();
    if (!isEmailValid(email)) {
      setError("Please enter a valid email address.");
      setIsError(true);
      return;
    }

    try {
      let user = await Auth.currentAuthenticatedUser();
      let result = await Auth.updateUserAttributes(user, {
        email,
      });

      console.log(result);
      if (result === "SUCCESS") {
        console.log("success");
        setAlert(true);
        setAlertBg("success");
        setAlertTxt("Changes Saved!");
      }
    } catch (e) {
      console.log("fail");
      setAlert(true);
      setAlertBg("");
      setAlertTxt("Change save failed. Please try again later.");
    }
  };

  const handleOnCancel = (event) => {
    event.preventDefault();
    history.push("/user-settings");
  };

  // TODO: create the success banner
  // TODO: create the fail banner if no connection

  return (
    <Wrapper>
      <PageTitle>User Settings</PageTitle>
      {alert && <Alert text={alertTxt} bg={alertBg} />}
      <Container>
        <SettingsSectionHeader title="Change E-mail" />
        <FormWrapper>
          <form onSubmit={handleOnSave}>
            <TextInput
              type="text"
              placeholder="Enter New E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsError(false);
              }}
              invalid={isError}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </form>
          <ButtonContainer>
            <DynamicButton
              text="CANCEL"
              type="button"
              onClick={handleOnCancel}
            />
            <DynamicButton text="SAVE" type="submit" onClick={handleOnSave} />
          </ButtonContainer>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

export default ChangeEmail;
