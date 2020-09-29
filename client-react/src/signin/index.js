import React, { useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import Polygon from "../assets/Polygon.png";
import DynamicButton from "../common/DynamicButton";
import TextInput from "../common/TextInput";
import logo from "../assets/logo.png";
import { device } from "../common/MediaBreakpoints";

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
  display: ${(props) => (props.display ? "flex" : "none")};
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
  width: ${(props) => (props.smol ? "40%" : "60%")};
  background-color: ${(props) => (props.light ? "#8fe8df" : "#005a52")};
  border-radius: 41px 0px 0px 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;
const RightContainer = styled.div`
  width: 40%;
  background-color: ${(props) => (props.light ? "#8fe8df" : "#005a52")};
  border-radius: 0px 41px 41px 0px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.img});
  background-position: right;
`;
const Button = styled(DynamicButton)`
  background-color: ${(props) => (props.light ? "#d0e6e3" : "#146058")};
  color: ${(props) => (props.light ? "#005A52" : "#fff")};
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
  color: ${(props) => (props.light ? "#fff" : "#000")};
  margin-top: ${(props) => (props.top ? "50px" : "40px")};
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
const Branding = styled.img`
  height: 30px;
  align-self: start;
  margin-left: 40px;
  margin-top: ${(props) => (props.top ? "-60px" : "-85px")};
  @media ${device.mobileM} {
    margin-left: 15px;
    justify-self: start;
  }
  @media ${device.mobileL} {
    margin-left: 25px;
    justify-self: start;
  }
`;
const Form = styled.form`
  display: contents;
`;

const SignIn = () => {
  const [page, setPage] = useState([true, false]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateForm = () => {
    return (
      email.length > 0 && password.length > 0 && password === confirmPassword
    );
  };

  const handleOnSignUp = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      alert("Invalid Form Submission");
      return;
    }

    try {
      await Auth.signUp({
        username: email,
        password: password,
      });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleOnSignIn = async (event) => {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  };

  const changePage = (index) => {
    setPage(
      page.map((x, i) => {
        if (index !== i) {
          x = true;
        } else {
          x = false;
        }
        return x;
      })
    );
  };

  return (
    <CenterContainer>
      <ContentWrapper display={page[0] ? true : false}>
        <LeftContainer img={Polygon} light>
          <Branding src={logo} top alt="logo" />
          <Title>Sign In</Title>
          <Form onSubmit={handleOnSignIn}>
            <TextInput
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link>I forgot my password</Link>
            <Button text="SIGN IN" type="submit" onClick={handleOnSignIn} />
          </Form>
        </LeftContainer>
        <RightContainer>
          <Title light>Welcome!</Title>
          <Text>
            Don't have an account? <br /> Join today, it's free and easy!
          </Text>
          <Button light text="SIGN UP" onClick={() => changePage(0)} />
        </RightContainer>
      </ContentWrapper>
      <ContentWrapper display={page[1] ? true : false}>
        <LeftContainer smol>
          <Branding src={logo} alt="logo" />
          <Title light top>
            Welcome!
          </Title>
          <Text>
            Already have an account? <br /> Sign in!
          </Text>
          <Button light text="SIGN IN" onClick={() => changePage(1)} />
        </LeftContainer>
        <RightContainer light img={Polygon} large>
          <Title>Sign Up</Title>
          <Form onSubmit={handleOnSignUp}>
            <TextInput type="text" placeholder="Name" />
            <TextInput
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button text="SIGN UP" type="submit" onClick={handleOnSignUp} />
          </Form>
        </RightContainer>
      </ContentWrapper>
    </CenterContainer>
  );
};

export default SignIn;
