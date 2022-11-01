import React from "react";

function AddStudent(props) {
  return (
    <>
      <div>Add New {props.name}'s Student</div>
      <form>
        <label>Name</label>
      </form>
    </>
  );
}

export default AddStudent;
