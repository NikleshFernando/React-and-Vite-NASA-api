import Navbar from "./Navbar/Navbar";
import backgroundImg from "../../public/background.png";
import blockAPOD from "../../public/apod-pic.jpeg";
import nasaRocket from "../../public/Home-pictures.webp";
import earthImegary from "../../public/earthIMAGERY.jpeg";
import marsRover from "../../public/MarsRover.jpeg";
import FooterMain from "./FooterMain";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function navigateThrough(link) {
    const isLoggedIn = sessionStorage.getItem("user");
    if (isLoggedIn != null) {
      console.log(isLoggedIn);
      navigate(link);
    } else {
      navigate("/Login");
    }
  }
  return (
    <div className="home-container">
      <Navbar />
      <div className="homeContainer">
        <div className="hometext">
          <h2 className="primary-heading">Welocome to NASA</h2>
          <p className="primary-text">
            Welcome to NASA's official website, your gateway to the wonders of
            space exploration and scientific discovery. As the premier space
            agency of the United States, NASA (National Aeronautics and Space
            Administration) pushes the boundaries of human knowledge and
            technology, venturing into the cosmos to explore distant planets,
            study Earth's changing climate, and unravel the mysteries of the
            universe. Join us on a journey of innovation, inspiration, and
            exploration as we strive to expand our understanding of the cosmos
            and our place within it.
          </p>
        </div>
        <img
          src={nasaRocket}
          className="homepage-picture"
          alt="main page picture"
        />
      </div>
      <hr className="hr-home" />

      <div className="blockContainer">
        <div className="api-blocks">
          <img src={blockAPOD} className="blockPics" alt="" />
          <h3>Astronomy Picture of the day(APOD)</h3>
          <p>
            Discover the universe one stunning image at a time with NASA's
            Astronomy Picture of the Day API.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigateThrough("/APOD");
            }}
          >
            Click here
          </button>
        </div>
        <div className="api-blocks">
          <img src={earthImegary} className="blockPics" alt="" />
          <h3>Earth Imagery</h3>
          <p>Explore our dynamic planet with NASA's Earth Imagery API</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigateThrough("/EAP");
            }}
          >
            Click here
          </button>
        </div>
        <div className="api-blocks">
          <img src={marsRover} className="blockPics" alt="" />
          <h3>Mars Rover Pictures</h3>
          <p>
            Unearth the red planet's mysteries through NASA's Mars Rover
            Pictures API
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigateThrough("MAP");
            }}
          >
            Click here
          </button>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default Home;
