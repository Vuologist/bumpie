import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';




const DynamicButton = (props) => {
  let textColor = {
    color: props.color
  }

  let basicStyle = {
    textDecoration: "none",
    textTransform: "upperCase"
  }
  return (
    <Button variant={props.variant} onClick={props.onclick} style={{...basicStyle,...textColor
    }}>{props.text}</Button>
  );
};

export default DynamicButton;
