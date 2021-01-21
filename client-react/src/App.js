import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { AppContext } from "./libs/contextLib";
import Routes from "./Routes";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Navbar from "./common/navbar";

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
      return <Footer bg="white" />;
    case "/faq":
      return <Footer bg="white" />;
    case "/":
      return <Footer bg="green" />;
    case "/sign-in":
      return "";
    default:
      return <Footer bg="yellow" />;
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
  let actualFooter = handleFooterColor(pathname);

  let actualHeader;
  if (pathname == "/sign-in") {
    actualHeader = "";
  } else if (isAuthenticated) {
    actualHeader = <Header />;
  } else if (!isAuthenticated) {
    actualHeader = <Navbar />;
  }

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Site>
        <Wrapper>
          {actualHeader}
          <Routes />
          {actualFooter}
        </Wrapper>
      </Site>
    </AppContext.Provider>
  );
};

export default App;
