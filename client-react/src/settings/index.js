import React, { useState } from "react";
import styled from "styled-components";

import { device } from "../common/MediaBreakpoints";

import Header from "../common/Header";
import Footer from "../common/Footer";
import DynamicButton from "../common/DynamicButton";
import ToggleButton from "../common/ToggleButton";
import SettingsSectionHeader from "../common/SettingsSectionHeader";
import RadioButton from "../settings/RadioButton";

const Wrapper = styled.div`
  max-width: 1920;
  margin: auto;
  margin-top: 100px;
  margin-left: 15%;
  margin-right: 15%;

  @media ${device.mobileM} {
    margin-top: 50px;
    margin-left: inherit;
    margin-right: inherit;
  }
`;

const StyledButton = styled(DynamicButton)`
  text-transform: uppercase;
  color: black;
`;

const PageTitle = styled.h2`
  font-size: 35;

  @media ${device.mobileM} {
    display: none;
  }
`;

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
const Settings = () => {
  const [emailNotification, setEmailToggle] = useState(false);
  const [phoneNotification, setPhoneToggle] = useState(false);
  return (
    <Site>
      <Header />
      <Wrapper>
        <PageTitle>Notification Settings</PageTitle>
        <div
          style={{
            margin: 80
          }}
        >
          <SettingsSectionHeader title="Notify me through..." />
          <label style={{ display: "flex", justifyContent: "space-between" }}>
            <span>email@email.com</span>
            <ToggleButton
              onChange={() => setEmailToggle(!emailNotification)}
              checked={emailNotification}
            />
          </label>
          <br />
          <label style={{ display: "flex", justifyContent: "space-between" }}>
            <span>(123) 456-7890</span>
            <ToggleButton
              onChange={() => setPhoneToggle(!phoneNotification)}
              checked={phoneNotification}
            />
          </label>
          <div
            style={{
              marginTop: 40
            }}
          >
            <SettingsSectionHeader title="Notify me..." />
            <div style={{ marginTop: 30 }}>
              <RadioButton />
            </div>
            {/* start of reset and save button grouping TODO -- Move to div that will surround the page */}
            <div
              style={{
                marginTop: 50,
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <StyledButton text="reset" />
              <StyledButton text="save" />
            </div>
          </div>
        </div>
        {/* end of reset and save button grouping...*/}
      </Wrapper>
      <Footer />
    </Site>
  );
};

export default Settings;
