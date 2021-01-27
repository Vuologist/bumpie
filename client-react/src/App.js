import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { AppContext } from "./libs/contextLib";
import Routes from "./Routes";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Site = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Wrapper = styled.div`
  min-height: 80vh;
`;

const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const pathname = window.location.pathname;

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
  };

  const handleFooterColor = (path) => {
    switch (path) {
      case "/about-us":
        return "white";
      case "/faq":
        return "white";
      case "/":
        return "green";
      case "/sign-in":
        return "none";
      default:
        return "yellow";
    }
  };

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Site>
        <Wrapper>
          {<Header isAuth={isAuthenticated} />}
          <Routes />
          {<Footer bg={handleFooterColor(pathname)} />}
        </Wrapper>
      </Site>
    </AppContext.Provider>
  );
};

export default App;
