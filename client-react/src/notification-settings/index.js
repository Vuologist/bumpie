import React, { useState } from "react";
import styled from "styled-components";

import { device } from "../common/MediaBreakpoints";

import DynamicButton from "../common/DynamicButton";
import ToggleButton from "../common/ToggleButton";
import SettingsSectionHeader from "../common/SettingsSectionHeader";
import RadioButton from "./RadioButton";

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

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 25px;
`;

const NotificationSettings = () => {
  const [emailNotification, setEmailToggle] = useState(false);

  return (
    <Wrapper>
      <PageTitle>Notification Settings</PageTitle>
      <div
        style={{
          margin: 80,
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
        <div
          style={{
            marginTop: 40,
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
              justifyContent: "flex-end",
            }}
          >
            <StyledButton text="reset" />
            <StyledButton text="save" />
          </div>
        </div>
      </div>
      {/* end of reset and save button grouping...*/}
    </Wrapper>
  );
};

export default NotificationSettings;
