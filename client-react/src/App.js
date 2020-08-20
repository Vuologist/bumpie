import React from "react";
import Routes from "./Routes";
import styled from "styled-components";

import Header from "./common/Header";
import Footer from "./common/Footer";

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.div`
  min-height: 80vh;
`;

const App = () => {
  const pathname = window.location.pathname;
  return (
    <Site>
      {pathname === "/sign-in" ? "" : <Header />}
      <Main>
        <Routes />
      </Main>
      {pathname === "/sign-in" ? "" : <Footer />}
    </Site>
  );
};

export default App;
