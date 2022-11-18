import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import "./Form.css";

function AddStudent(props) {
  const [Register, setRegister] = useState(setUpdateStuednt());

  function setUpdateStuednt() {
    if (props.match.params.updateId) {
      const updatecand = props.studentsdata.filter(
        (cand) => cand.id == props.match.params.updateId
      );
      console.log("Update candidate", updatecand);
      return updatecand[0];
    } else {
      return {
        id: "",
        name: "",
        age: "",
        proffesion: "",
        education: "",
        skills: "",
      };
    }
  }

  // const [Errors, setErrors] = useState({
  //   name: "",
  //   age: "",
  //   proffesion: "",
  //   education: "",
  //   skills: "",
  // });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setRegister({ ...Register, [name]: value });

    // const error1={...Errors};

    // switch (name){

    //   case "studName":{
    //     if(value==""){
    //       error1.studName=" Name is Mandatory"}
    //       else if(value.lenth>25){
    //         error1.studName="Minimum characters allowed are 25 "
    //       }else{
    //         error1.studName=""
    //       }

    //     }

    //     case "studAge":{
    //       if(value==""){
    //         error1.studAge="Age is Mandatory"
    //       }
    //       else if(value<0||value>100){
    //         error1.studAge="Age must be above 18 and below 100"
    //       }
    //       else{
    //         error1.studAge=""
    //       }
    //     }

    //       case "studProf":{
    //         if(value==""){
    //           error1.studProf="Profession is Mandatory"
    //         }

    //         else{
    //           error1.studProf=""
    //         }

    //     }
    //   }

    // }
  };

  const Handlesubmit = (event) => {
    // const error = { ...Errors };

    // if (Register.studName == "") {
    //   error.studName = "Your Name Please";
    // }
    // if (Register.studAge == "") {
    //   error.studAge = "Your Age Please";
    // }
    // if (Register.studProf == "") {
    //   error.studProf = "Your Profission Please";
    // }
    // if (Register.studEdu == "") {
    //   error.studEdu = "Your Education details  Please";
    // }
    // if (Register.studSkil == "") {
    //   error.studSkil = "Your Skills Please";
    // }

    // setErrors(error);

    // const obj1=Register;
    // console.log(obj1);
    event.preventDefault();

    console.log(props);
    Register.id ? (Register.id = Register.id) : (Register.id = Math.random());
    props.handleSubmit(Register);
    props.history.push("/home");
  };
  return (
    <>
      <div>Add New {props.name}'s Student</div>
      <form className="form">
        <br />

        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={Register.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />

        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={Register.age}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />

        <div>
          <label>Profession </label>
          <input
            type="text"
            name="proffesion"
            value={Register.proffesion}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />

        <div>
          <label>Education</label>
          <input
            type="text"
            name="education"
            value={Register.education}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />

        <div>
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            value={Register.skills}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />

        <div>
          <br />
          <button
            type="submit"
            className={Register.id ? "btn btn-success" : "btn btn-primary"}
            onClick={Handlesubmit}
            obj1={Register}
          >
            {Register.id ? "Update" : "Sumbit"}
          </button>
        </div>
      </form>
    </>
  );
}
export default AddStudent;
