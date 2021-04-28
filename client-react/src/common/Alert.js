import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    16% {
       opacity: 1;
    }
    84% {
       opacity: 1;
    }
    100% {
       opacity: 0;
    }
`;
const Wrapper = styled.div`
  background-color: ${(props) => (props.bg ? "#2EC4B6" : "#E3ADAD")};
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: "Roboto";
  font-size: 25px;
  color: white;
  padding-left: 50px;
  animation: ${fadeInOut} 3s;
`;

const Alert = ({ bg, text }) => {
  return (
    <Wrapper bg={bg}>
      <span>{text}</span>
    </Wrapper>
  );
};

export default Alert;
