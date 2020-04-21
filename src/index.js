import React from "react";
import ReactDOM from "react-dom";
import "./css/reset.css";
import "./css/index.css";

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Users from "./users";
// import Contact from "./contact";
import Chat from "./chat";
import Notfound from "./notfound";



const routing = (
  <Router>
    <nav class="header-nav">
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        {/* <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li> */}
        <li>
          <NavLink activeClassName="active" to="/chat">
            Chat
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/chat" component={Chat} />
        <Route component={Notfound} />
      </Switch>
    </nav>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
