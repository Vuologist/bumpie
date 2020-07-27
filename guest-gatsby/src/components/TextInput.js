import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 350px;
  height: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 1px solid transparent;
  padding: 10px;

  @media (max-width: 1050px) {
    width: 250px;
  }
  @media (max-width: 800px) {
    width: 100px;
    height: 5px;
    margin-bottom: 10px;
  }
`;

const TextInput = ({ type, placeholder, className }) => {
  return (
    <Input type={type} placeholder={placeholder} className={className}></Input>
  );
};
export default TextInput;
