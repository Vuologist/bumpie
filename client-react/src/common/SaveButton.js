import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';



const SaveButton = () => {
  return (
    <Button variant="link" style={{
      textDecoration: "none",
      color: "black",
      textTransform: "upperCase"
    }}>Save</Button>
  );
};

export default SaveButton;
