import React from "react";
import Header from "./Header";
import svg1 from "../images/mobileBoy.svg";
import svg2 from "../images/bird.svg";
import IvaraNavbar from "../navbar/navbar";

const Home = () => {
  return (
    <div>
      <IvaraNavbar />
      <section className="banner-area relative" id="home">
        <div className="container">
          <div className="overlay overlay-bg"></div>
          <div className="row fullscreen d-flex align-items-center justify-content-start">
            <div className="banner-content col-lg-6">
              <h2 className="text-uppercase">
                Ivara <img className="bird" src={svg2} />{" "}
              </h2>
              <br></br>
              <h3>
                IVentors Augmented Reality Arena, is a “One Platform for
                Complete School Ecosystem” through AR Technology for Schools.
                IVARA Classes, the future of education, makes learning
                innovative and easy to understand. It makes the strenuous
                concepts simple and boring lectures interesting.
              </h3>
              <div className="row " style={{ marginTop: "10px" }}>
                <button
                  className="form-btn"
                  style={{
                    borderRadius: "10px",
                    height: "45px",
                    backgroundColor: "#105af6",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  Explore More
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-xs-none d-sm-none d-md-none d-lg-block">
              <img
                src={svg1}
                style={{
                  height: "90%",
                  width: "90%",
                  marginLeft: "50px",
                  position: "relative",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
