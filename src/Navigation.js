import React, { useEffect, useState } from "react";
import "./Navigation.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Home from "./../src/Features/Home";
import AddStudent from "./Features/AddStudent";
import ReportCard from "./Features/ReportCard";
import Login from "./Features/Login";
import { loggedInUser } from "../src/Features/Context";

function Navigation(props) {
  const AppProps = props;
  return (
    <loggedInUser.Consumer>
      {(logger) => {
        console.log("Nav", logger);
        return (
          <Router>
            <>
              <nav className="side-nav">
                <div className="nav-head">{props.name} DASHBOARD</div>
                <hr></hr>
                <div>
                  <Link to="/home">Home</Link>
                </div>

                <hr></hr>
                <div>
                  <Link to={"/addStudent"}>Add student</Link>
                </div>
                <hr></hr>
                <div>
                  <Link to={"/reportcard"}>Report Card</Link>
                </div>
                <hr></hr>
                <div>
                  <Link to="/login">LOGIN</Link>
                </div>
              </nav>
              <div id="content-body">
                <h1> Welcome to DASHBOARD</h1>

                <Switch>
                  <Route
                    path="/home"
                    render={(props) => (
                      <Home admin={AppProps.name} {...props} />
                    )}
                  ></Route>
                  <Route
                    path="/editStudent/:updateId"
                    render={(props) => (
                      <AddStudent name={AppProps.name} {...props} />
                    )}
                  ></Route>
                  <Route
                    path="/addStudent"
                    render={(props) => (
                      <AddStudent name={AppProps.name} {...props} />
                    )}
                  ></Route>
                  <Route
                    path="/reportcard"
                    render={() => <ReportCard name={AppProps.name} />}
                  ></Route>
                  <Route
                    path="/login"
                    render={(props) => <Login {...props} />}
                  ></Route>
                  <Route path="/">
                    <Redirect to="/login" />
                  </Route>
                </Switch>
              </div>
            </>
          </Router>
        );
      }}
    </loggedInUser.Consumer>
  );
}

export default Navigation;
