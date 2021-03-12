import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { useHistory, useLocation } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import DynamicButton from "../common/DynamicButton";
import TextInput from "../common/TextInput";
import logo from "../assets/logo.png";
import { ReactComponent as PaperAirPlaneAndFolderSVG } from "../assets/PaperAirPlaneAndFolder.svg";
import { device } from "../common/MediaBreakpoints";
import { Link } from "react-router-dom";

const CenterContainer = styled.div`
  display: flex;
  padding: 30px;
  height: 100vh;
  background-color: #c5c5c4;
  @media screen and (max-height: 464px) {
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1150px;
  display: ${(props) => (props.display ? "flex" : "none")};
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
  margin-bottom: 30px;
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

const StyledLink = styled.div`
  font-family: "Roboto";
  font-size: 15px;
  cursor: "pointer";
  margin-top: 10px;
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
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
  padding-left: 11px;
  padding-right: 11px;
  color: #ff4d4d;
  width: 360px;

  @media (max-width: 800px) {
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

const StyledBrandingLink = styled(Link)`
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

const Branding = styled.img`
  height: 30px;
`;

const Form = styled.form`
  display: contents;
`;

const Authentication = (props) => {
  const [page, setPage] = useState(["true", null, null, null, null]);
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
  const location = useLocation();

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
        "Password must be at least 8 characters and include a lowercase, uppercase, special symbol, and number."
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
        setSignInError("Email has not been confirmed. Email resent.");
        Auth.resendSignUp(email);
      } else {
        setSignInError("Email/password is incorrect");
      }
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    const emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailValidation.test(email)) {
      setEmailSignUpError("Please enter a valid email address.");
      setEmailInvalid(true);
      return;
    }

    try {
      await Auth.forgotPassword(email);
      changePage(3);
    } catch (e) {
      alert(e.message);
      console.log(e.message);
    }
  };

  const handleOnNewPasswordReset = async (event) => {
    event.preventDefault();
    resetErrorState();

    let fail = false;

    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!passwordValidation.test(password)) {
      setPasswordSignUpError(
        "Password must be at least 8 characters and include a lowercase, uppercase, special symbol, and number."
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

    // This will fail if email has slashes in it.
    const username = location.pathname.split("/")[2];
    const resetCode = location.pathname.split("/")[3];

    try {
      await Auth.forgotPasswordSubmit(username, resetCode, password);
      resetUserInput();
      changePage(0);
      history.push("/sign-in");
    } catch (e) {
      console.log(e.message);
      if (e.message === "An account with the given email already exists.") {
        setEmailSignUpError("Email already exists.");
      }
    }
  };

  const changePage = (index) => {
    resetUserInput();
    resetErrorState();

    setPage(
      page.map((x, i) => {
        if (index === i) return "true";
        return null;
      })
    );
  };

  const renderSignIn = () => (
    <ContentWrapper display={page[0]}>
      <LeftContainer light>
        <StyledBrandingLink to="/">
          <Branding src={logo} top alt="logo" />
        </StyledBrandingLink>
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
          <StyledLink onClick={() => changePage(2)}>
            I forgot my password
          </StyledLink>
          <Button text="SIGN IN" type="submit" onClick={handleOnSignIn} />
        </Form>
      </LeftContainer>
      <RightContainer>
        <Title light>Welcome!</Title>
        <Text>
          Don't have an account? <br /> Join today, it's free and easy!
        </Text>
        <Button light text="SIGN UP" onClick={() => changePage(1)} />
      </RightContainer>
    </ContentWrapper>
  );

  const renderSignUp = () => (
    <ContentWrapper display={page[1]}>
      <LeftContainer smol>
        <StyledBrandingLink to="/">
          <Branding src={logo} top alt="logo" />
        </StyledBrandingLink>
        <Title light top>
          Welcome!
        </Title>
        <Text>
          Already have an account? <br /> Sign in!
        </Text>
        <Button light text="SIGN IN" onClick={() => changePage(0)} />
      </LeftContainer>
      <RightContainer style={{ paddingTop: 50, paddingBottom: 50 }} light large>
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
  );

  const renderForgotPassword = () => (
    <ContentWrapper display={page[2]}>
      <LeftContainer smol>
        <StyledBrandingLink to="/">
          <Branding src={logo} top alt="logo" />
        </StyledBrandingLink>
        <Title light top>
          Welcome!
        </Title>
        <Text>
          Already have an account? <br /> Sign in!
        </Text>
        <Button light text="SIGN IN" onClick={() => changePage(1)} />
      </LeftContainer>
      <RightContainer light large>
        <div style={{ textAlign: "center" }}>
          <Title>Forgot Password?</Title>
          <div style={{ fontSize: 20 }}>Enter your email below!</div>
        </div>
        <Form onSubmit={handleForgotPassword}>
          <div style={{ textAlign: "center" }}>
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
            {emailSignUpError && <ErrorMessage>Invalid Email</ErrorMessage>}
          </div>
          <Button text="RECOVER" type="submit" />
        </Form>
      </RightContainer>
    </ContentWrapper>
  );

  const renderSuccessForgotPassword = () => (
    <ContentWrapper display={page[3]}>
      <LeftContainer smol>
        <StyledBrandingLink to="/">
          <Branding src={logo} top alt="logo" />
        </StyledBrandingLink>
        <Title light top>
          Welcome!
        </Title>
        <Text>
          Already have an account? <br /> Sign in!
        </Text>
        <Button light text="SIGN IN" onClick={() => changePage(1)} />
      </LeftContainer>
      <RightContainer style={{ paddingBottom: 30 }} light large>
        <Title>Password Reset</Title>
        <div style={{ fontSize: 20, width: "50%", textAlign: "center" }}>
          A link has been sent to your email to recover your password.
        </div>
        <PaperAirPlaneAndFolderSVG style={{ width: "45%" }} />
      </RightContainer>
    </ContentWrapper>
  );

  const renderNewPasswordReset = () => (
    <ContentWrapper display={page[4]}>
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
      <RightContainer light large>
        <Title>Password Reset</Title>
        <Form onSubmit={handleOnSignUp}>
          <div>
            <TextInput
              type="password"
              placeholder="New Password"
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
          <Button
            text="RECOVER"
            type="submit"
            onClick={handleOnNewPasswordReset}
          />
        </Form>
      </RightContainer>
    </ContentWrapper>
  );

  useEffect(() => {
    if (props.type === "PasswordReset") changePage(4);
    // eslint-disable-next-line
  }, []);

  return (
    <CenterContainer>
      {page[0] && renderSignIn()}
      {page[1] && renderSignUp()}
      {page[2] && renderForgotPassword()}
      {page[3] && renderSuccessForgotPassword()}
      {page[4] && renderNewPasswordReset()}
    </CenterContainer>
  );
};

export default Authentication;
