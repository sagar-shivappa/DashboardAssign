import React, { useState } from "react";
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
  const AppProps = props;
  const [studentsList, setStudents] = useState(props.candidates);

  const handleDelete = (id) => {
    const newList = studentsList.filter((i) => i.id != id);
    setStudents(newList);
  };

  const handleSubmit = (newStudent) => {
    const newCandi = [...studentsList];
    if (newCandi.find((ele) => ele.id == newStudent.id)) {
      const updatedCandList = newCandi.map((cand) => {
        if (cand.id == newStudent.id) {
          return newStudent;
        } else {
          return cand;
        }
      });
      setStudents(updatedCandList);
    } else {
      console.log("New Student");
      newCandi.push(newStudent);
      setStudents(newCandi);
    }
  };

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
              render={(props) => (
                <Home
                  data={studentsList}
                  admin={AppProps.name}
                  handleDelete1={handleDelete}
                  {...props}
                />
              )}
            ></Route>
            <Route
              path="/editStudent/:updateId"
              render={(props) => (
                <AddStudent
                  name={AppProps.name}
                  studentsdata={studentsList}
                  handleSubmit={handleSubmit}
                  {...props}
                />
              )}
            ></Route>
            <Route
              path="/addStudent"
              render={(props) => (
                <AddStudent
                  name={AppProps.name}
                  handleSubmit={handleSubmit}
                  {...props}
                />
              )}
            ></Route>
            <Route
              path="/reportcard"
              render={() => <ReportCard name={AppProps.name} />}
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
