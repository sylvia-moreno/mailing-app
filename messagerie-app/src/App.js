import './App.css';
import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom'
import MailingBox from "./components/mailing-box/mailing-box";
import Home from "./components/home/home"

import "./mypro-icon.css";

const App = () => {
  return (
      <Fragment>
          <Switch>
              <Route
                  exact
                  path='/'
                  component={Home}
              />
              <Route
                  exact
                  path='/:realtorId'
                  component={MailingBox}
              />
              <Route
                  exact
                  path='/:realtorId/messages/:messageId'
                  component={MailingBox}
              />
          </Switch>
      </Fragment>
  );
}

export default App;
