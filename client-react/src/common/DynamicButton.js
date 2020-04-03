import React from "react";
import Button from "react-bootstrap/Button";

const DynamicButton = ({ text, onclick, variant, color }) => {
  let basicStyle = {
    textDecoration: "none",
    textTransform: "upperCase",
  };

  return (
    <Button
      variant={variant}
      onClick={onclick}
      style={{ ...basicStyle, ...{ color: color } }}
    >
      {text}
    </Button>
  );
};

export default DynamicButton;
