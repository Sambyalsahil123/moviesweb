import "./Overview.css";
import Navigation from "../Common/Navigation";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
  return (
    <>
      <div
        className="bg-image fade-in-image"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?k=20&m=1271522601&s=612x612&w=0&h=y3NLBCVMWO8wHGwjEcXIuGOSL_0K6iFTvySCM-X5TxM=')`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <Navigation />
        <div className="m-5 ">
          <p className="fs-1 text-danger">Flix TV</p>
          <figure className="text-end fade-in-text">
            <blockquote className="blockquote mt-5 "></blockquote>
            <figcaption className="blockquote-footer fw-bold fs-1 text-danger">
              Someone famous in <cite title="Source Title">US TV Shows</cite>
              <br />
              <a href="https://www.netflix.com/in/title/60027724?source=35">
                <button className="fs-5 btn btn-primary">
                  <faPlay icon={faPlay} />
                  &nbsp; Watch Now &nbsp;
                </button>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};
export default Overview;
