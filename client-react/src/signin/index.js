import React from "react";
import styled from "styled-components";
//import { animated } from "react-spring";
import Polygon from "../assets/Polygon.png";
import DynamicButton from "../common/DynamicButton";
import TextInput from "../common/TextInput";

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  height: 100vh;
  background-color: #c5c5c4;
`;
const ContentWrapper = styled.div`
  height: 50%;
  width: 60%;
  display: flex;
  margin-top: 10%;
  @media (max-width: 1024px) {
    margin-top: 25%;
    width: 75%;
  }
  @media (max-width: 414px) {
    margin-top: 20%;
    width: 85%;
    height: 45%;
  }
`;
const LeftContainer = styled.div`
  width: 60%;
  background-color: #8fe8df;
  border-radius: 41px 0px 0px 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Polygon});
`;
const RightContainer = styled.div`
  width: 40%;
  background-color: #005a52;
  border-radius: 0px 41px 41px 0px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Button = styled(DynamicButton)`
  background-color: ${props => (props.light ? "#d0e6e3" : "#146058")};
  color: ${props => (props.light ? "#005A52" : "#fff")};
  font-family: "Roboto";
  font-size: 15px;
  width: 300px;
  border-radius: 37px;
  border: 1px solid transparent;
  cursor: pointer;
  @media (max-width: 1050px) {
    width: 150px;
  }
  @media (max-width: 500px) {
    width: 100px;
  }
  @media (max-width: 375px) {
    width: 80px;
    font-size: 12px;
  }
`;
const Title = styled.h1`
  font-family: "Quicksand";
  font-size: 40px;
  font-weight: "bold";
  margin-bottom: 30px;
  color: ${props => (props.light ? "#fff" : "#000")};
  @media (max-width: 800px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
  @media (max-width: 375px) {
    margin-bottom: 5px;
    font-size: 18px;
  }
`;

const Text = styled.p`
  color: #fff;
  font-family: "Roboto";
  font-size: 20px;
  text-align: center;
  margin-bottom: 50px;
  margin-left: 2px;
  margin-right: 2px;
  @media (max-width: 800px) {
    font-size: 13px;
    margin-bottom: 20px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const Img = styled.img`
  width: 175px;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    margin-bottom: 10px;
    width: 120px;
  }
`;

const Link = styled.a`
  font-family: "Roboto";
  font-size: 15px;
  cursor: "pointer";
  margin-bottom: 30px;
  @media (max-width: 800px) {
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

const SignIn = () => {
  return (
    <CenterContainer>
      <ContentWrapper>
        <LeftContainer>
          <Title>Sign In</Title>
          <form>
            <TextInput type="text" placeholder="Email" />
            <br />
            <TextInput type="password" placeholder="Password" />
          </form>
          <Link>I forgot my password</Link>
          <Button text="SIGN IN" />
        </LeftContainer>
        <RightContainer>
          <Title light>Welcome!</Title>
          <Text>
            Don't have an account? <br /> Join today, it's free and easy!
          </Text>
          <Button light text="SIGN UP" />
        </RightContainer>
      </ContentWrapper>
    </CenterContainer>
  );
};

export default SignIn;
