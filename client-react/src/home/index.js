import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactComponent as DrawingIllustration } from "../assets/DrawingBikeIllustration.svg";
import { ReactComponent as PostItDrawing } from "../assets/PostItDrawing.svg";
import { ReactComponent as ScienceIllustration } from "../assets/ScienceIllustration.svg";
import { ReactComponent as CoffeeMidSmoke } from "../assets/CoffeeMidSmoke.svg";
import LandingMiddleBackground from "../assets/LandingMiddleBackground.svg";
import AllSwirls from "../assets/allswirlslarge.svg";

const HomePageH1 = styled.h1`
  font-family: Quicksand;
  font-size: 55px;
  font-weight: bold;
`;

const HomePageH2 = styled.h2`
  font-family: Quicksand;
  font-size: 36pt;
  font-weight: bold;
  color: ${(props) => (props.white ? "#fff" : "#000")};
`;

const HomePageHeroP = styled.p`
  font-family: Roboto;
  font-size: 20pt;
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
  margin-bottom: 550px;
`;

const BikeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostItDiv = styled.div`
  min-height: 1500px;
`;

const CoffeeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 1000px;
  overflow: "hidden";
`;

const TextDiv = styled.div`
  margin-left: 100px;
`;

const SwirlsDiv = styled.div`
  background-image: url(${AllSwirls});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 2250px;
`;

const StyledMain = styled.main`
  background-image: url(${LandingMiddleBackground});
  background-position: left center;
  background-size: 2100px;
  background-repeat: no-repeat;
`;

const Home = () => (
  <StyledMain style={{ backgroundColor: "#8fe8df", overflowX: "hidden" }}>
    <SwirlsDiv>
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
              width: 2200,
            }}
          />
          <TextDiv>
            <HomePageH2 white>Bump up your life with Bumpie!</HomePageH2>
            <HomePageHeroP white>
              Bumpie allows you to track your life skills through five
              categories. Each category has sub-categories that allows you to
              track your advancements! Bump up your life and progress yourself
              today!
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
            based on your own life. Your stats will increase and/or decrease
            over time, allowing you to visualize your own progress!
          </HomePageHeroP>
        </TextDiv>
        <div style={{ alignSelf: "flex-end" }}>
          <ScienceIllustration
            style={{
              width: 780,
            }}
          />
          <CoffeeMidSmoke
            style={{
              position: "relative",
              width: 161,
              top: -938,
              left: 477,
            }}
          />
        </div>
      </CoffeeSection>
    </SwirlsDiv>
  </StyledMain>
);

export default Home;
