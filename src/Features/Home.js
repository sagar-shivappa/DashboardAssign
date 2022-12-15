import React, { useState, useEffect } from "react";
import { loggedInUser } from "./Context";

function Home(props) {
  const [studentList, setStudentsList] = useState([]);

  // useEffect(() => {
  //   fetch(`https://61500026a706cd00179b7357.mockapi.io/users`)
  //     .then((res) => res.json())
  //     .then((res) => setStudentsList(res));
  // });
  const homeHandleDelete = (id) => {
    fetch(`https://61500026a706cd00179b7357.mockapi.io/users/${id}`, {
      method: "DELETE",
    }).then((res) => {
      fetch("https://61500026a706cd00179b7357.mockapi.io/users", {
        method: "GET",
      })
        .then((data) => data.json())
        .then((stds) => setStudentsList(stds));
    });
  };
  const UpdateHandler = (id) => {
    props.history.push(`/editStudent/${id}`);
  };

  return (
    <loggedInUser.Consumer>
      {(logger) => {
        console.log("Home", logger);
        return (
          <>
            <div>{logger}'s Students List</div>
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Proffession</th>
                  <th>Education</th>
                  <th>Skills</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((cand, index) => {
                  return (
                    <tr key={index}>
                      <td>{cand.name}</td>
                      <td>{cand.age}</td>
                      <td>{cand.proffesion}</td>
                      <td>{cand.education}</td>
                      <td>{cand.skills}</td>

                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => UpdateHandler(cand.id)}
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => homeHandleDelete(cand.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        );
      }}
    </loggedInUser.Consumer>
  );
}

export default Home;
