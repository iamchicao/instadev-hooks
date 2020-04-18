import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from "./routes/Feed";
import Topbar from "./components/Topbar";
import Users from './routes/Users';
import NewUser from './routes/NewUser';
import Profile from './routes/Profile';
import "./App.scss";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Topbar />

        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route path="/users/:username">
            <Profile />
          </Route>

          <Route path="/newuser">
            <NewUser />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
