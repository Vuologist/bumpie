import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => (props.bg ? "#2EC4B6" : "#E3ADAD")};
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: "Roboto";
  font-size: 25px;
  color: white;
  padding-left: 50px;
`;

const Alert = ({ bg, text }) => {
  return (
    <Wrapper bg={bg}>
      <span>{text}</span>
    </Wrapper>
  );
};

export default Alert;
