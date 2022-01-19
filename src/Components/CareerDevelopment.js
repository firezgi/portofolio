import React from "react";
import { Link } from "react-router-dom";
import Decidr from "../images/Decidr.png";
import ECard from "../images/E-Card.png";
import Haunted from "../images/HountedHouseGame.png";
import MarvelSpace from "../images/marvel-space.png";

function CareerDevelopment() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary flex-wrap h-100 align-content-center">
            <div className="container-fluid">
              <a className="navbar-brand text-light p-lg-2" href="/">
                <span className="fs-3">Habteab Firezgi</span>
                <br />
                <small>Motivated and Dynamic Front End Developer</small>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainMenu"
                aria-controls="mainMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse mt-lg-5" id="mainMenu">
                <ul className="navbar-nav ">
                  <li className="nav-item border-light border-bottom">
                    <Link to={`/`}>
                      <p className="nav-link " aria-current="page">
                        Profile
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link to={`/CareerDevelopment`}>
                      <p className="nav-link active " aria-current="page">
                        CareerDevelopment
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link to={`/Education`}>
                      <p className="nav-link " aria-current="page">
                        Education
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link to={`/ContactHab`}>
                      <p className="nav-link " aria-current="page">
                        Contact Habteab
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="col-lg-12">
            <div className="bg-light m-3 p-3 border rounded-3">
              <h1>Career Development</h1>
              <hr />
              <p>
                <h2>Front-End Developer</h2> <br />
                <strong className="fs-3">Bitwise Industries, AlphaWorks</strong>
                <br />
                <p className="fs-4">Sep 2021-Current</p>
                <ul className="fs-5">
                  <li>Developed UI workflows and wireframes</li>
                  <li>Built feature templates in React and React-native </li>
                  <li>
                    Collaborated with QA, and design teammates to build ,test,
                    and maintain responsive applications{" "}
                  </li>
                  <li>Worked on frontend -JavaScript based web applications</li>
                </ul>
              </p>
              <p>
                <h2>Projects</h2> <br />
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-interval="2000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={Haunted} className="d-block w-100" alt="..." />
                      <strong className="fs-3">Haunted House Game</strong>
                      <br />
                      <p className="fs-4">2021/</p>
                      <ul className="fs-5">
                        <li>learned and implemented react.js</li>
                        <li>used agile methodology to manage the project </li>
                        <li>
                          Collaborated with QA teammates to test the responsive
                          application
                        </li>
                      </ul>
                    </div>
                    <div className="carousel-item">
                      <img src={Decidr} className="d-block w-100" alt="..." />
                      <strong className="fs-3">Decidr</strong>
                      <br />
                      <p className="fs-4">2021/</p>
                      <ul className="fs-5">
                        <li>learned and implemented React-native</li>
                        <li>used agile methodology to manage the project </li>
                      </ul>
                    </div>
                    <div className="carousel-item">
                      <img src={ECard} className="d-block w-100" alt="..." />
                      <strong className="fs-3">E-Card</strong>
                      <br />
                      <p className="fs-4">2021/</p>
                      <ul className="fs-5">
                        <li>learned and implemented React-native</li>
                        <li>used agile methodology to manage the project </li>
                      </ul>
                    </div>
                    <div className="carousel-item ">
                      <img
                        src={MarvelSpace}
                        className="d-block w-25  mx-auto "
                        alt="..."
                      />
                      <strong className="fs-3">Marvel-Space</strong>
                      <br />
                      <p className="fs-4">2021/</p>
                      <ul className="fs-5">
                        <li>learned and implemented React-native</li>
                        <li>used agile methodology to manage the project </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </p>
              <p />
            </div>
          </div>

          <footer className="row bg-primary p-3 text-center col-lg-12 justify-content-around mb-3">
            <div className="col-md-3 text-light">
              1501 almaden expressway apt 6153 San Jose,CA 95125
            </div>
            <div className="col-md-3 text-light">(832)206-8163</div>
            <div className="col-md-3 nav-item">
              <a className="nav-link text-light " href="contact-hab.html">
                keshi2017@gmail.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CareerDevelopment;
