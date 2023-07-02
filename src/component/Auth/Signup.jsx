import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const [data] = useState([]);
  const [isAdmin, setAdmin] = useState(false);
  const [inputData, setInputdata] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const InputEvent = (event) => {
    const { value, name } = event.target;
    setInputdata(() => {
      return {
        ...inputData,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const { fullname, email, password, confirmpassword } = inputData;
    if (fullname && email && password !== "" && confirmpassword === password) {
      localStorage.setItem(
        "userSignUp",
        JSON.stringify([...data, { ...inputData, isAdmin }])
      );

      navigate("/dashboard");
    } else if (password !== confirmpassword) {
      toast.warn("Password should be same !", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.warn("All fields are required !", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer
        autoClose={1000}
        position="top-right"
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center text-light">
              Already registered? &nbsp;
              <span className="link-primary" onClick={() => navigate("/login")}>
                Login
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                name="fullname"
                onChange={InputEvent}
                value={inputData.fullname}
                type="email"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                name="email"
                onChange={InputEvent}
                value={inputData.email}
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                name="password"
                onChange={InputEvent}
                value={inputData.password}
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
              <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input
                  name="confirmpassword"
                  onChange={InputEvent}
                  value={inputData.confirmpassword}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Confirm Password"
                />
                <br />
                <div className="form-check">
                  <input
                    onChange={() => {
                      setAdmin(!isAdmin);
                    }}
                    defaultChecked={isAdmin}
                    className="form-check-input"
                    type="checkbox"
                    name="isAdmin"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Signup as Admin
                  </label>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addData}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Signup;
