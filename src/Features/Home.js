import React, { useState } from "react";

function Home(props) {
  console.log(props);
  const homeHandleDelete = (id) => {
    props.handleDelete1(id);
  };
  const UpdateHandler = (id) => {
    props.history.push(`/editStudent/${id}`);
  };

  return (
    <>
      <div>{props.admin}'s Students List</div>
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
          {props.data.map((cand, index) => {
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
}

export default Home;
