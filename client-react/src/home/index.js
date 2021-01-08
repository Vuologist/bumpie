import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../common/navbar";
import Footer from "../common/Footer";

import { ReactComponent as DrawingIllustration } from "../assets/DrawingBikeIllustration.svg";
import { ReactComponent as PostItDrawing } from "../assets/PostItDrawing.svg";
import { ReactComponent as ScienceIllustration } from "../assets/ScienceIllustration.svg";
import { ReactComponent as CoffeeMidSmoke } from "../assets/CoffeeMidSmoke.svg";

import CoffeeSwirls from "../assets/CoffeeSwirls.svg";
import PostItSwirl from "../assets/PostItSwirl.svg";
import LandingMiddleBackground from "../assets/LandingMiddleBackground.svg";
import ClipboardSwirls from "../assets/clipboard_swirls.svg";

const HomePageH1 = styled.h1`
  font-family: Quicksand;
  font-size: 55px;
  font-weight: bold;
`;

const HomePageH2 = styled.h2`
  font-family: Quicksand;
  font-size: 55px;
  font-weight: bold;
  color: ${(props) => (props.white ? "#fff" : "#000")};
`;

const HomePageHeroP = styled.p`
  font-family: Roboto;
  font-size: 35px;
  padding: 50px 0px;
  color: ${(props) => (props.white ? "#fff" : "#000")};
`;

const StartBtn = styled.button`
  border-color: #ff7690;
  background-color: #ff7690;
  fontweight: 400px;
  text-align: center;
  border: 1px solid transparent;
  padding: 0.375rem 1rem;
  border-radius: 39px;
  color: #fff;
  font-size: 2rem;
  font-family: Roboto;
  cursor: pointer;
`;
const ClipBoardSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1000px;
  overflow: hidden;
  background-image: url(${ClipboardSwirls});
  background-size: 120%;
`;

const BikeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${PostItSwirl});
  background-position: left center;
  background-size: 120%;
  background-repeat: no-repeat;
  min-height: 1500px;
`;

const PostItDiv = styled.div`
  background-image: url(${LandingMiddleBackground});
  background-position: left top;
  background-size: 2000px;
  background-repeat: no-repeat;
  min-height: 1500px;
`;

const CoffeeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 1000px;
  background-image: url(${CoffeeSwirls});
  background-size: 140%;
  background-position: center top;
  background-repeat: no-repeat;
  overflow: "hidden";
`;

const TextDiv = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;

const Home = () => (
  <main style={{ backgroundColor: "#8fe8df", overflowX: "hidden" }}>
    <Navbar />
    <ClipBoardSection>
      <TextDiv>
        <HomePageH1>
          Track your progress. <br />
          Improve your life.
        </HomePageH1>
        <HomePageHeroP>
          Visualize and track your strengths. Build your stats.
        </HomePageHeroP>
        <StartBtn>Get Started</StartBtn>
      </TextDiv>
      <DrawingIllustration
        style={{
          position: "relative",
          height: "900px",
          right: -300,
        }}
      />
    </ClipBoardSection>
    <PostItDiv>
      <BikeSection>
        <PostItDrawing
          style={{
            position: "relative",
            left: 0,
            width: 2800,
          }}
        />
        <TextDiv>
          <HomePageH2 white>Bump up your life with Bumpie!</HomePageH2>
          <HomePageHeroP white>
            Bumpie allows you to track your life skills through five categories.
            Each category has sub-categories that allows you to track your
            advancements! Bump up your life and progress yourself today!
          </HomePageHeroP>
        </TextDiv>
      </BikeSection>
    </PostItDiv>
    <CoffeeSection>
      <TextDiv>
        <HomePageH2>Personalize your categories.</HomePageH2>
        <HomePageHeroP>
          Whether you are trying to build your fitness goals or improve your
          culinary skills, Bumpie allows you to personalize your categories
          based on your own life. Your stats will increase and/or decrease over
          time, allowing you to visualize your own progress!
        </HomePageHeroP>
      </TextDiv>
      <div style={{ alignSelf: "flex-end" }}>
        <ScienceIllustration
          style={{
            width: 980,
          }}
        />
        <CoffeeMidSmoke
          style={{
            position: "relative",
            width: 195,
            top: -1173,
            left: 604,
          }}
        />
      </div>
    </CoffeeSection>
    <Footer green />
  </main>
);

export default Home;
