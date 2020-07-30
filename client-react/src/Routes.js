import React from "react";
import { Route, Switch } from "react-router-dom";

import NotificationSettings from "./notification-settings";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/notification-settings">
        <NotificationSettings />
      </Route>
    </Switch>
  );
}
