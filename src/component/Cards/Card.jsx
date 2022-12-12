import "./Card.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ JsonData, query }) => {
  const addToLocalStorage = (elm) => {
    toast.success("your movie has been added successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    let favdata = JSON.parse(localStorage.getItem("addFav"));
    if (favdata) {
      favdata.push(elm);
      localStorage.setItem("addFav", JSON.stringify(favdata));
    } else {
      localStorage.setItem("addFav", JSON.stringify([elm]));
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
      <div className="row row-cols-md-6 gy-5 g-3">
        {!JsonData?.length ? (
          <span className="text-light fs-1 mx-5">No data found !</span>
        ) : (
          JsonData?.filter((Movies) =>
            Movies?.Title.toLowerCase().includes(query)
          ).map((elm, index) => {
            const { Poster, Title, Genre, Released, Language } = elm;
            return (
              <div key={index} className="card zoomingCard mx-4 text-bg-dark">
                <img
                  src={Poster}
                  className="card-img-top mt-2 text-bg-dark "
                  alt="img"
                />
                <button
                  onClick={() => addToLocalStorage(elm)}
                  className="text-danger text-bg-dark "
                >
                  Add to Favourate &nbsp;
                  <FaHeart className="fs-4 heart" />
                </button>

                <h5 className="card-title text-center  text-bg-dark mt-3">
                  {Title}
                </h5>
                <ul className="list-group list-group-flush text-bg-dark ">
                  <li className="list-group-item text-bg-dark text-center ">
                    {Genre}
                  </li>
                  <li className="list-group-item text-bg-dark text-center">
                    {Released}
                  </li>
                  <li className="list-group-item text-bg-dark text-center">
                    {Language}
                  </li>
                  <li className="list-group-item text-bg-dark text-center">
                    <Link to={"/overview"}>See Description</Link>
                  </li>
                </ul>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default Card;
