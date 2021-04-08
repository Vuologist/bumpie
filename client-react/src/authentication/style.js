import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";
import { device } from "../common/MediaBreakpoints";
import { Link } from "react-router-dom";
import DynamicButton from "../common/DynamicButton";

const rubberAnimation = keyframes`${rubberBand}`;

export const CenterContainer = styled.div`
  display: flex;
  padding: 30px;
  height: 100vh;
  background-color: #c5c5c4;
  @media screen and (max-height: 464px) {
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1150px;
  display: ${(props) => (props.display ? "flex" : "none")};
`;

export const LeftContainer = styled.div`
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

export const RightContainer = styled.div`
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

export const Button = styled(DynamicButton)`
  background-color: ${(props) => (props.light ? "#d0e6e3" : "#146058")};
  color: ${(props) => (props.light ? "#005A52" : "#fff")};
  font-family: "Roboto";
  font-size: 15px;
  width: 300px;
  height: 45px;
  border-radius: 37px;
  border: 1px solid transparent;
  cursor: pointer;
  background-image: ${(props) =>
    props.light
      ? "-webkit-linear-gradient(90deg, #a5b8b5 50%, transparent 50%)"
      : "-webkit-linear-gradient(90deg, #0b332f 50%, transparent 50%)"};
  background-image: ${(props) =>
    props.light
      ? "linear-gradient(90deg, #a5b8b5 50%, transparent 50%)"
      : "linear-gradient(90deg, #0b332f 50%, transparent 50%)"};
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;

  &:hover {
    background-position: 0;
  }
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

export const Title = styled.h1`
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

export const Text = styled.p`
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

export const StyledLink = styled.div`
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

export const ErrorMessage = styled.div`
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

export const StyledBrandingLink = styled(Link)`
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

export const Branding = styled.img`
  height: 30px;
  &:hover {
    animation: 2s ${rubberAnimation};
  }
`;

export const Form = styled.form`
  display: contents;
`;
