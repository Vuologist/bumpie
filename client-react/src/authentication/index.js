import React, { useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
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
  min-height: 530px;
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
  background-color: ${(props) => (props.light ? "#d0e6e3" : "#005a52")};
  border-radius: 41px 0px 0px 41px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 90px;
`;

const RightContainer = styled.div`
  width: 40%;
  background-color: ${(props) => (props.light ? "#d0e6e3" : "#005a52")};
  border-radius: 0px 41px 41px 0px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 90px;
`;

const Button = styled(DynamicButton)`
  background-color: ${(props) => (props.light ? "#d0e6e3" : "#146058")};
  color: ${(props) => (props.light ? "#005A52" : "#fff")};
  font-family: "Roboto";
  font-size: 15px;
  width: 300px;
  height: 45px;
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
  font-weight: bold;
  color: ${(props) => (props.light ? "#fff" : "#000")};
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
  margin: 40px 2px 70px 2px;
  @media (max-width: 800px) {
    font-size: 13px;
    margin-bottom: 20px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const Link = styled.div`
  font-family: "Roboto";
  font-size: 15px;
  cursor: "pointer";
  margin-bottom: 30px;
  cursor: pointer;
  color: #005a52;
  font-weight: bold;

  @media (max-width: 800px) {
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

const ErrorMessage = styled.div`
  font-family: "Roboto";
  font-size: 15px;
  margin-top: -10px;
  margin-bottom: 10px;
  color: #ff4d4d;
  width: 360px;

  @media (max-width: 800px) {
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

const Branding = styled.img`
  position: absolute;
  height: 30px;
  align-self: start;
  margin-left: 40px;
  margin-top: -60px;
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

const Authentication = () => {
  const [page, setPage] = useState(["true", null]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signInError, setSignInError] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailSignUpError, setEmailSignUpError] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordSignUpError, setPasswordSignUpError] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [confirmPasswordSignUpError, setConfirmPasswordSignUpError] = useState(
    ""
  );
  const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState(false);
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();

  const resetUserInput = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const resetErrorState = () => {
    setSignInError("");
    setNameError("");
    setNameInvalid(false);
    setEmailSignUpError("");
    setEmailInvalid(false);
    setPasswordSignUpError("");
    setPasswordInvalid(false);
    setConfirmPasswordSignUpError("");
    setConfirmPasswordInvalid(false);
  };

  const handleOnSignUp = async (event) => {
    event.preventDefault();
    resetErrorState();

    let fail = false;
    if (name.length === 0) {
      setNameError("Please fill in your name.");
      setNameInvalid(true);
      fail = true;
    }

    const emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailValidation.test(email)) {
      setEmailSignUpError("Please enter a valid email address.");
      setEmailInvalid(true);
      fail = true;
    }

    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!passwordValidation.test(password)) {
      setPasswordSignUpError(
        "Your password needs to contain a minimum of 8 characters. Include 1 lowercase, 1 uppercase, 1 special symbol, and 1 number."
      );
      setPasswordInvalid(true);
      fail = true;
    }

    if (confirmPassword.length === 0 || password !== confirmPassword) {
      setConfirmPasswordSignUpError("Your passwords do not match.");
      setConfirmPasswordInvalid(true);
      fail = true;
    }

    if (fail === true) return;

    try {
      await Auth.signUp({
        username: email,
        password: password,
      });
      resetUserInput();
    } catch (e) {
      console.log(e.message);
      if (e.message === "An account with the given email already exists.") {
        setEmailSignUpError("Email already exists.");
      }
    }
  };

  const handleOnSignIn = async (event) => {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      resetUserInput();
      history.push("/dashboard");
    } catch (e) {
      if (e.message === "User is not confirmed.") {
        setSignInError("Email has not been confirmed.");
      } else {
        setSignInError("Email/password is incorrect");
      }
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log("forgot password");
  };

  const changePage = (index) => {
    resetUserInput();
    resetErrorState();

    setPage(
      page.map((x, i) => {
        if (index !== i) {
          x = "true";
        } else {
          x = null;
        }
        return x;
      })
    );
  };

  return (
    <CenterContainer>
      <ContentWrapper display={page[0]}>
        <LeftContainer light>
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
            <div style={{ textAlign: "center" }}>
              {signInError && <ErrorMessage>{signInError}</ErrorMessage>}
            </div>
            <Link onClick={handleForgotPassword}>I forgot my password</Link>
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
      <ContentWrapper display={page[1]}>
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
        <RightContainer
          style={{ paddingTop: 50, paddingBottom: 50 }}
          light
          large
        >
          <Title>Sign Up</Title>
          <Form onSubmit={handleOnSignUp}>
            <div>
              <TextInput
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setNameInvalid(false);
                  setName(e.target.value);
                }}
                invalid={nameInvalid}
              />
              {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
            </div>
            <div>
              <TextInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmailInvalid(false);
                  setEmail(e.target.value);
                }}
                invalid={emailInvalid}
              />
              {emailSignUpError && (
                <ErrorMessage>{emailSignUpError}</ErrorMessage>
              )}
            </div>
            <div>
              <TextInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPasswordInvalid(false);
                  setPassword(e.target.value);
                }}
                invalid={passwordInvalid}
              />
              {passwordSignUpError && (
                <ErrorMessage>{passwordSignUpError}</ErrorMessage>
              )}
            </div>
            <div>
              <TextInput
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPasswordInvalid(false);
                  setConfirmPassword(e.target.value);
                }}
                invalid={confirmPasswordInvalid}
              />
              {confirmPasswordSignUpError && (
                <ErrorMessage>{confirmPasswordSignUpError}</ErrorMessage>
              )}
            </div>

            <Button text="SIGN UP" type="submit" onClick={handleOnSignUp} />
          </Form>
        </RightContainer>
      </ContentWrapper>
    </CenterContainer>
  );
};

export default Authentication;
