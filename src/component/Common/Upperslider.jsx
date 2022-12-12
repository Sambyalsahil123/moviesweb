import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "./UpperSlider.css";
import JsonData from "../data.json";
import { useNavigate } from "react-router";

const Upperslider = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [loginData, setLogindata] = useState([]);

  const UserName = () => {
    const getuser = localStorage.getItem("userSignUp");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLogindata(user);
    }
  };

  useEffect(() => {
    UserName();
  }, []);

  return (
    <>
      <div>
        <h2>
          {loginData.map((elm, ind) => {
            return (
              <figcaption
                key={ind}
                className="blockquote-heading badge  text-wrap fs-2  text-light"
              >
                <cite>Welcome </cite>
                {elm.fullname}
              </figcaption>
            );
          })}
        </h2>
        <h1 className="text-light">Best Movies For You</h1>
        <Slider {...settings}>
          {JsonData.map((elm, index) => {
            return (
              <div key={index}>
                <img
                  onClick={() => navigate("/overview")}
                  src={elm.Poster}
                  className="zooming  d-block"
                  alt="Movie"
                  style={{ cursor: "pointer" }}
                />
                {/* <h1 className="text-light d-flex fs-3 ">{elm.Title}</h1> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default Upperslider;
