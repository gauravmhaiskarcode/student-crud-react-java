import React, { useEffect, useState } from "react";
import {
  createStudent,
  getStudent,
  updateStudent,
} from "../service/StudentService";
import { useNavigate, useParams } from "react-router-dom";

const StudentComponent = () => {
  const [sname, setSname] = useState("");
  const [slastname, setSlastname] = useState("");
  const [saddr, setSaddr] = useState("");
  const [sclass, setSclass] = useState("");
  const [snum, setSnum] = useState("");

  const navigator = useNavigate();
  const { id } = useParams();

  const [errors, setErrors] = useState({
    sname: "",
    slastname: "",
    saddr: "",
    sclass: "",
    snum: "",
  });

  useEffect(() => {
    if (id) {
      getStudent(id)
        .then((response) => {
          setSname(response.data.sname);
          setSlastname(response.data.slastname);
          setSaddr(response.data.saddr);
          setSclass(response.data.sclass);
          setSnum(response.data.snum);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const student = { sname, slastname, saddr, sclass, snum };
      console.log(student);

      if (id) {
        updateStudent(id, student)
          .then((response) => {
            console.log(student);
            navigator("/students");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createStudent(student)
          .then((response) => {
            console.log(student);
            navigator("/students");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (sname.trim()) {
      errorsCopy.sname = "";
    } else {
      errorsCopy.sname = "First Name Is Required";
      valid = false;
    }

    if (slastname.trim()) {
      errorsCopy.slastname = "";
    } else {
      errorsCopy.slastname = "Last Name Is Required";
      valid = false;
    }

    if (saddr.trim()) {
      errorsCopy.saddr = "";
    } else {
      errorsCopy.saddr = "Address Is Required";
      valid = false;
    }

    if (sclass.trim()) {
      errorsCopy.sclass = "";
    } else {
      errorsCopy.sclass = "Class Is Required";
      valid = false;
    }

    if (String(snum).trim()) {
      errorsCopy.snum = "";
    } else {
      errorsCopy.snum = "Mobile Num Is Required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function title() {
    if (id) {
      return <h2 className="text-center">Update Student</h2>;
    } else {
      return <h2 className="text-center">Add Student</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {title()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name :</label>
                <input
                  type="text"
                  placeholder="Enter Student First Name"
                  name="sname"
                  value={sname}
                  className={`form-control ${
                    errors.sname ? "is-invalid" : ""
                  } `}
                  onChange={(e) => {
                    setSname(e.target.value);
                  }}
                />
                {errors.sname && (
                  <div className="invalid-feedback">{errors.sname}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name :</label>
                <input
                  type="text"
                  placeholder="Enter Student Last Name"
                  name="slastname"
                  value={slastname}
                  className={`form-control ${
                    errors.slastname ? "is-invalid" : ""
                  } `}
                  onChange={(e) => {
                    setSlastname(e.target.value);
                  }}
                />
                {errors.slastname && (
                  <div className="invalid-feedback">{errors.slastname}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Address :</label>
                <input
                  type="text"
                  placeholder="Enter Student Address"
                  name="saddr"
                  value={saddr}
                  className={`form-control ${
                    errors.saddr ? "is-invalid" : ""
                  } `}
                  onChange={(e) => {
                    setSaddr(e.target.value);
                  }}
                />
                {errors.saddr && (
                  <div className="invalid-feedback">{errors.saddr}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Class :</label>
                <input
                  type="text"
                  placeholder="Enter Student Class"
                  name="sclass"
                  value={sclass}
                  className={`form-control ${
                    errors.sclass ? "is-invalid" : ""
                  } `}
                  onChange={(e) => {
                    setSclass(e.target.value);
                  }}
                />
                {errors.sclass && (
                  <div className="invalid-feedback">{errors.sclass}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Mobile Number :</label>
                <input
                  type="number"
                  placeholder="Enter Mobile Number"
                  name="snum"
                  value={snum}
                  className={`form-control ${errors.snum ? "is-invalid" : ""} `}
                  onChange={(e) => {
                    setSnum(e.target.value);
                  }}
                />
                {errors.snum && (
                  <div className="invalid-feedback">{errors.snum}</div>
                )}
              </div>
              <button onClick={saveEmployee} className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComponent;
