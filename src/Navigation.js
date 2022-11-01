import React from "react";
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

function Navigation(props) {
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
        </nav>
        <div id="content-body">
          <h1> Welcome to DASHBOARD</h1>

          <Switch>
            <Route
              path="/home"
              render={() => <Home name={props.name} />}
            ></Route>
            <Route
              path="/addStudent"
              render={() => <AddStudent name={props.name} />}
            ></Route>
            <Route
              path="/reportcard"
              render={() => <ReportCard name={props.name} />}
            ></Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default Navigation;
