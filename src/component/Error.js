import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";
const Errror = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="Error">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="error-template">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div className="error-details fs-4">
                  Sorry, an error has occured, Requested page not found 😭!
                </div>
                <div className="error-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/dashboard")}>
                    Redirect Login Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errror;
