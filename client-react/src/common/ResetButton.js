import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';



const ResetButton = () => {
  return (
    <Button variant="link" style={{
      textDecoration: "none",
      color: "black",
      textTransform: "upperCase"
    }}>Reset</Button>
  );
};

export default ResetButton;
