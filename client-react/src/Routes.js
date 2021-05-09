import React from "react";
import { Route, Switch } from "react-router-dom";

import NotificationSettings from "./notification-settings";
import Authentication from "./authentication";
import FAQ from "./faq";
import Home from "./home";
import AboutUsPage from "./about-us";
import Dashboard from "./dashboard";
import UserSettingsHome from "./user-settings";
import ChangeEmail from "./user-settings/ChangeEmail";
import ChangePassword from "./user-settings/ChangePassword";
import ChangeName from "./user-settings/ChangeName";
import Privacy from "./privacy";

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
        <Authentication type="SignIn"/>
      </Route>
      <Route path="/password-reset">
        <Authentication type="PasswordReset" />
      </Route>
      <Route path="/sign-up">
        <Authentication type="SignUp" />
      </Route>
      <Route path="/forgot-password">
        <Authentication type="ForgotPassword" />
      </Route>
      <Route path="/success-forgot-password">
        <Authentication type="SuccessForgotPassword" />
      </Route>
      <Route path="/email-verified">
        <Authentication type="SuccessEmail" />
      </Route>
      <Route exact path="/faq">
        <FAQ />
      </Route>
      <Route exact path="/user-settings">
        <UserSettingsHome />
      </Route>
      <Route exact path="/user-settings/email">
        <ChangeEmail />
      </Route>
      <Route exact path="/user-settings/password">
        <ChangePassword />
      </Route>
      <Route exact path="/user-settings/name">
        <ChangeName />
      </Route>
      <Route exact path="/about-us">
        <AboutUsPage />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/privacy-policy">
        <Privacy />
      </Route>
    </Switch>
  );
}
