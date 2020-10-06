import React from "react";
import { Route, Switch } from "react-router-dom";

import NotificationSettings from "./notification-settings";
import Authentication from "./authentication";
import FAQ from "./faq";
import Home from "./home";
import AboutUsPage from "./about-us";
import Dashboard from "./dashboard";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/notification-settings">
        <NotificationSettings />
      </Route>
      <Route exact path="/sign-in">
        <Authentication />
      </Route>
      <Route exact path="/faq">
        <FAQ />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/about-us">
        <AboutUsPage />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
