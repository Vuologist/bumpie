import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 350px;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: ${(props) =>
    props.invalid ? "1px solid #FF4D4D" : "1px solid transparent"};
  padding: 10px;

  &:focus {
    outline: none;
    border: 1px solid #4d997d;
    box-shadow: 0 0 16px #00ffa133;
  }

  @media (max-width: 1050px) {
    width: 250px;
  }
  @media (max-width: 800px) {
    width: 100px;
    height: 5px;
    margin-bottom: 10px;
  }
`;

const TextInput = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  invalid = false,
}) => (
  <Input
    type={type}
    placeholder={placeholder}
    className={className}
    value={value}
    onChange={onChange}
    invalid={invalid}
  />
);

export default TextInput;
