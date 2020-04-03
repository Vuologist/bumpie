import React, { Component } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';

class DynamicButton extends Component {

  render() {
      const {variant, onclick, color, text} = this.props;
      const styles = {
        buttonText: {
          color: color,
          textDecoration: "none",
          textTransform: "upperCase"
        }
      }

      return (
        <Button variant={variant} onClick={onclick} style={styles.buttonText}>{text}</Button>
      );
  }
}


export default DynamicButton;
