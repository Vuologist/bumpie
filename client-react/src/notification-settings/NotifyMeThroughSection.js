import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Auth, API } from "aws-amplify";

import ToggleButton from "../common/ToggleButton";
import SettingsSectionHeader from "../common/SettingsSectionHeader";

const Email = styled.span`
  font-size: 25px;
  color: #989293;
`;

const NotifyMeThroughSection = ({ emailNotification, setEmailToggle }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function fetchEmail() {
      const { attributes } = await Auth.currentAuthenticatedUser();
      setEmail(attributes.email);
    }

    async function fetchActive() {
      const response = await API.get("data", "/notification");
      if (response.active === true) setEmailToggle(true);
      else setEmailToggle(false);
    }

    fetchEmail();
    fetchActive();
    // eslint-disable-next-line
  }, []);

  const updateNotificationTable = async (newState) => {
    try {
      await API.put("data", "/notification/active", {
        body: {
          active: newState,
        },
      });
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  const updateEmailToggle = () => {
    updateNotificationTable(!emailNotification);
    setEmailToggle(!emailNotification);
  };

  return (
    <>
      <SettingsSectionHeader title="Notify me through..." />
      <label style={{ display: "flex", justifyContent: "space-between" }}>
        <Email>{email}</Email>
        <ToggleButton
          onChange={() => updateEmailToggle()}
          checked={emailNotification}
        />
      </label>
    </>
  );
};

export default NotifyMeThroughSection;
