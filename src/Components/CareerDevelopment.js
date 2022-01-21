import React from "react";
import { Link } from "react-router-dom";
import Decidr from "../images/Decidr.png";
import ECard from "../images/E-Card.png";
import Haunted from "../images/HountedHouseGame.png";
import MarvelSpace from "../images/marvel-space.png";
// import GitHubIcon from '@mui/icons-material/GitHub';
function CareerDevelopment() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary flex-wrap h-100 align-content-center">
            <div className="container-fluid">
              <Link className="navbar-brand text-light p-lg-2" to="/">
                <span className="fs-3">Habteab Firezgi</span>
                <br />
                <small>Motivated and Dynamic Front End Developer</small>
              </Link>
              <button
                className="navbar-toggler bg-black"
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
                    <Link to={`/`} className="nav-link " aria-current="page">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link
                      to={`/CareerDevelopment`}
                      className="nav-link active "
                      aria-current="page"
                    >
                      CareerDevelopment
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link
                      to={`/Education`}
                      className="nav-link "
                      aria-current="page"
                    >
                      Education
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to={`/ContactHab`}
                    >
                      Contact Habteab
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
                  data-interval="1000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={Haunted} className="d-block w-100" alt="..." />
                      <div class="row justify-content-between">
                        <div class="col-4">
                          <strong className="fs-3">
                            The Hounted House Game
                          </strong>
                          <p className="fs-4 ">2021/</p>
                        </div>
                        <div class="col-4">
                          <a
                            href="https://github.com/keshi2021/haunted-house-game"
                            className="fs-2 me-5"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                          <a
                            href="http://luceroweb.github.io/haunted-house-game/"
                            className="fs-2"
                          >
                            <button
                              type="button"
                              className="btn btn-primary p-0"
                            >
                              Live site
                            </button>
                          </a>
                        </div>
                      </div>
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
                      <div class="row justify-content-between">
                        <div class="col-4">
                          <strong className="fs-3">E-Card</strong>
                          <p className="fs-4 ">2021/</p>
                        </div>
                        <div class="col-4">
                          <a
                            href="https://github.com/keshi2021/decidr"
                            className="fs-2 me-5"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                          <a
                            href="https://keshi2021.github.io/decidr"
                            className="fs-2"
                          >
                            <button
                              type="button"
                              className="btn btn-primary p-0"
                            >
                              Live site
                            </button>
                          </a>
                        </div>
                      </div>
                      <ul className="fs-5">
                        <li>learned and implemented React-native</li>
                        <li>used agile methodology to manage the project </li>
                      </ul>
                    </div>
                    <div className="carousel-item">
                      <img src={ECard} className="d-block w-100" alt="..." />

                      <div class="row justify-content-between">
                        <div class="col-4">
                          <strong className="fs-3">E-Card</strong>
                          <p className="fs-4 ">2021/</p>
                        </div>
                        <div class="col-4">
                          <a
                            href="https://github.com/keshi2021/ecard"
                            className="fs-2 me-5"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                          <a
                            href="https://keshi2021.github.io/ecard"
                            className="fs-2"
                          >
                            <button
                              type="button"
                              className="btn btn-primary p-0"
                            >
                              Live site
                            </button>
                          </a>
                        </div>
                      </div>
                      <ul className="fs-5">
                        <li>learned and implemented React</li>
                        <li>used agile methodology to manage the project </li>
                      </ul>
                    </div>
                    <div className="carousel-item ">
                      <img
                        src={MarvelSpace}
                        className="d-block w-25  mx-auto rounded "
                        alt="..."
                      />
                      <div class="row justify-content-between">
                        <div class="col-4">
                          <strong className="fs-3">Marvel Space</strong>
                          <p className="fs-4 ">2021/</p>
                        </div>
                        <div class="col-4">
                          <a
                            href="https://github.com/keshi2021/team-spider-man"
                            className="fs-2 me-5"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                          <a
                            href="http://keshi2021.github.io/team-spider-man"
                            className="fs-2"
                          >
                            <button
                              type="button"
                              className="btn btn-primary p-0 "
                            >
                              Live Site
                            </button>
                          </a>
                        </div>
                      </div>
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
              <Link className="nav-link text-light" to={`/ContactHab`}>
                keshi2017@gmail.com
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CareerDevelopment;
