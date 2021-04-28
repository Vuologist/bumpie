import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { device } from "../common/MediaBreakpoints";
import NotifyMeThroughSection from "./NotifyMeThroughSection";
import NotifyMeFrequencySection from "./NotifyMeFrequencySection";
import Alert from "../common/Alert";

const PageTitle = styled.h2`
  font-size: 35px;
  font-weight: normal;

  @media ${device.mobileM} {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 75px;
`;

const NotificationSettings = () => {
  const [emailNotification, setEmailToggle] = useState(false);
  const [save, setSave] = useState(false);
  const [init, setInit] = useState(false);

  var text = "";
  if (save) {
    text = "Changes Saved!";
  } else {
    text = "Change save failed. Please try again later.";
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setInit(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [init]);

  return (
    <Wrapper>
      <PageTitle>Notification Settings</PageTitle>
      {init && <Alert text={text} bg={save} />}
      <div style={{ margin: 80 }}>
        <NotifyMeThroughSection
          emailNotification={emailNotification}
          setEmailToggle={setEmailToggle}
          setSave={setSave}
          setInit={setInit}
        />
        <div style={{ marginTop: 70 }}>
          <NotifyMeFrequencySection
            setSave={setSave}
            setInit={setInit}
            emailNotification={emailNotification}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default NotificationSettings;
