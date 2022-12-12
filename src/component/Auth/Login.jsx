import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();
  const [inputData, setInputdata] = useState({
    email: "",
    password: "",
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
  const handelLogin = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userSignUp");

    const { email, password } = inputData;

    if (email === "") {
      toast.warn("Email is required!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!email.includes("@")) {
      toast.warn("Please enter valid email address!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (password === "") {
      toast.warn("Password is required!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (password.length < 5) {
      toast.warn("Password must contain at least 5 characters!", {
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
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          toast.warn("invalid details!", {
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
          alert(`Login Successfully`);
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          navigate("/dashboard");
        }
      }
      if (localStorage.getItem("userSignUp") === null) {
        toast.warn("User not found!", {
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
      <div style={{ color: "red" }} className="Auth-form-container body">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="text-center  text-light">
              Not registered yet? &nbsp;
              <span className="link-primary" onClick={() => navigate("/")}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                name="email"
                type="email"
                onChange={InputEvent}
                value={inputData.email}
                className="form-control mt-1"
                placeholder="Enter email"
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
                placeholder="Enter password"
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handelLogin}
              >
                Login
              </button>
            </div>
            {/* <p className="text-center mt-2 text-light ">
              Forgot <Link href="#">password?</Link>
            </p> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
