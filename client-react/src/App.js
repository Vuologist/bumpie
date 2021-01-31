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

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Site>
        <Header isAuth={isAuthenticated} />
        <Wrapper>
          <Routes />
        </Wrapper>
        <Footer />
      </Site>
    </AppContext.Provider>
  );
};

export default App;
