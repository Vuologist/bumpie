import React from "react";
import { Route, Switch } from "react-router-dom";

import NotificationSettings from "./notification-settings";
import Authentication from "./authentication";
import FAQ from "./faq";
import Home from "./home";
import AboutUsPage from "./about-us";
import Dashboard from "./dashboard";
import UserSettingsHome from "./user-settings";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/notification-settings">
        <NotificationSettings />
      </Route>
      <Route exact path="/sign-in">
        <Authentication />
      </Route>
      <Route path="/password-reset">
        <Authentication type="PasswordReset" />
      </Route>
      <Route exact path="/faq">
        <FAQ />
      </Route>
      <Route exact path="/user-settings">
        <UserSettingsHome />
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
