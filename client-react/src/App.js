import React from "react";
import Routes from "./Routes";
import styled from "styled-components";

import { device } from "./common/MediaBreakpoints";

import Header from "./common/Header";
import Footer from "./common/Footer";

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 1920;
  margin: auto;
  margin-top: 100px;
  margin-left: 15%;
  margin-right: 15%;

  @media ${device.mobileM} {
    margin-top: 50px;
    margin-left: inherit;
    margin-right: inherit;
  }
`;

const App = () => {
  return (
    <Site>
      <Header />
      <Wrapper>
        <Routes />
      </Wrapper>
      <Footer />
    </Site>
  );
};

export default App;
