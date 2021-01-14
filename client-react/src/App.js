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

const handleFooterColor = (path) => {
  switch (path) {
    case "/about-us":
      return "white";
    case "/faq":
      return "white";
    case "/":
      return "green";
    default:
      return "yellow";
  }
};

const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

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

  const pathname = window.location.pathname;
  var footerColor = handleFooterColor(pathname);

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Site>
        {isAuthenticated && <Header />}
        <Wrapper>
          <Routes />
        </Wrapper>
        {isAuthenticated && <Footer bg={footerColor} />}
      </Site>
    </AppContext.Provider>
  );
};

export default App;
