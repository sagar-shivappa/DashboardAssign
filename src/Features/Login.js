import React from "react";

import { loggedInUser, LoginInnRole } from "./Context";

function Login(props) {
  return (
    <div>
      <form className="form-group row">
        <div className="col-md-6">
          <label id="userName">UserName</label>
          <input for="userName" className="form-control"></input>
          <br></br>
        </div>
        <div className="col-md-6">
          <label id="pass">Password</label>
          <input for="pass" className="form-control"></input>
          <br></br>
        </div>
      </form>
      <LoginInnRole>
        <loggedInUser.Consumer>
          {(logger) => {
            console.log("Login", logger);
            const clickHandler = (loggerType) => {
              logger.setLoggerRole(loggerType);
              console.log("Login", logger);
              props.history.push("/home");
            };
            return (
              <div style={{ margin: "30px" }}>
                <button
                  className="btn btn-primary"
                  onClick={() => clickHandler("Teacher")}
                >
                  {" "}
                  LOGIN as TEACHER
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => clickHandler("Student")}
                  style={{ marginLeft: "20px" }}
                >
                  LOGIN as STUDENT
                </button>
              </div>
            );
          }}
        </loggedInUser.Consumer>
      </LoginInnRole>
    </div>
  );
}

export default Login;
