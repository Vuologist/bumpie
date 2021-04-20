import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "aws-amplify";

import SettingsSectionHeader from "../common/SettingsSectionHeader";
import DynamicButton from "../common/DynamicButton";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1036px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }
`;

const RadButton = styled(DynamicButton)`
  background-color: ${(props) => (props.bgColor ? "#2EC4B6" : "#8FE8DF")};
  color: white;
  border-radius: 16px;
  padding: 6px 40px 6px 40px;
  @media (max-width: 1036px) {
    margin: 5px;
    padding: 6px 5px 6px 5px;
  }
`;

const NotifyMeFrequencySection = () => {
  const [radioSet, setRadioSet] = useState([false, false, false, false]);

  const getFrequencyIndex = (freq) => {
    switch (freq) {
      case "biweekly":
        return 0;
      case "monthly":
        return 1;
      case "quarterly":
        return 2;
      case "yearly":
        return 3;
      default:
        return 3;
    }
  };

  const getFrequencyText = (index) => {
    switch (index) {
      case 0:
        return "biweekly";
      case 1:
        return "monthly";
      case 2:
        return "quarterly";
      case 3:
        return "yearly";
      default:
        return "yearly";
    }
  };

  useEffect(() => {
    async function fetchFrequency() {
      try {
        const response = await API.get("data", "/notification");
        let index = getFrequencyIndex(response.frequency);
        radioClick(index);
      } catch (e) {
        alert(e);
        console.log(e.message);
      }
    }
    fetchFrequency();
    // eslint-disable-next-line
  }, []);

  const updateNotificationTable = async (index) => {
    try {
      await API.put("data", "/notification/frequency", {
        body: {
          frequency: getFrequencyText(index),
        },
      });
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  const radioClick = (index) => {
    updateNotificationTable(index);
    setRadioSet(
      radioSet.map((x, i) => {
        if (index !== i) {
          x = false;
        } else {
          x = true;
        }
        return x;
      })
    );
  };

  return (
    <>
      <SettingsSectionHeader title="Notify me..." />
      <div style={{ marginTop: 30 }}>
        <Main>
          <RadButton
            text="bi-weekly"
            onClick={() => radioClick(0)}
            bgColor={radioSet[0] ? true : false}
          />
          <RadButton
            text="monthly"
            onClick={() => radioClick(1)}
            bgColor={radioSet[1] ? true : false}
          />
          <RadButton
            text="quarterly"
            onClick={() => radioClick(2)}
            bgColor={radioSet[2] ? true : false}
          />
          <RadButton
            text="yearly"
            onClick={() => radioClick(3)}
            bgColor={radioSet[3] ? true : false}
          />
        </Main>
      </div>
    </>
  );
};

export default NotifyMeFrequencySection;
