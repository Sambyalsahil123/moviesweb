import React from "react";
import Navigation from "../Common/Navigation";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFavourite = () => {
  const [favourites, setFavourites] = React.useState([]);
  React.useEffect(() => {
  const getItem = JSON.parse(localStorage.getItem("addFav"));
    setFavourites(getItem)
  },[]) 

  const removeFromList = (title) => {
    toast.info('your movie has been removed successfully!!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.Title !== title
    );
    setFavourites(newFavouriteList);
    localStorage.setItem("addFav" , JSON.stringify(newFavouriteList));
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
      <Navigation />
      <span className="fs-1 text-danger mx-4">
        Watch your favourites movies
      </span>

      <div className="row row-cols-md-6 gy-5 g-3 my-3">
        {!favourites?.length ? (
          <span className="text-light fs-1 mx-5">No data found!</span>
        ) : (
          favourites?.map((elm, index) => {
            const { Poster, Title, Genre, Released, Language } = elm;
            return (
              <div key={index} className="card zoomingCard mx-4 text-bg-dark">
                <img
                  src={Poster}
                  className="card-img-top mt-2 text-bg-dark "
                  alt="img"
                />
                  <button className="btn btn-danger" onClick={() => removeFromList(Title)}>Remove</button>

                <h5 className="card-title text-center text-bg-dark mt-3">
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
                    <Link to={"/overview"}> See Description</Link>
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

export default AddFavourite;