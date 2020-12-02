import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import TextInput from "../common/TextInput";
import DynamicButton from "../common/DynamicButton";
import SettingsSectionHeader from "../common/SettingsSectionHeader";

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

const ChangeName = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleOnSave = (event) => {
    event.preventDefault();

    alert("submitting");
  };

  const handleOnCancel = (event) => {
    event.preventDefault();
    history.push("/user-settings");
  };

  return (
    <Wrapper>
      <PageTitle>User Settings</PageTitle>
      <Container>
        <SettingsSectionHeader title="Change Name" />
        <FormWrapper>
          <form onSubmit={handleOnSave}>
            <TextInput
              type="text"
              placeholder="Enter New Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

export default ChangeName;
