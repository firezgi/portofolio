import React from "react";
import hab from "../images/hab.png";
import { Link } from "react-router-dom";

function Profile() {
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
                <span className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse mt-lg-5" id="mainMenu">
                <ul className="navbar-nav ">
                  <li className="nav-item border-light border-bottom">
                    <Link
                      to={`/`}
                      className="nav-link action "
                      aria-current="page"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link
                      to={`/CareerDevelopment`}
                      className="nav-link "
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
        </div>

        <div className="col-lg-12">
          <div className="bg-light m-3 p-3 border rounded-3">
            <h1>Profile</h1>
            <img
              src={hab}
              alt=""
              className="float-md-start me-md-3 mb-md-3 mb-xs-5 w-100 d-md-none"
            />
            <img
              src={hab}
              alt=""
              className="float-md-start me-md-5 mb-md-3 w-50 d-none d-md-block"
            />

            <p className="mb-lg-5 p-lg-4 mt-xs-5 mb-lg-5 fs-4">
              <strong className=" fs-3">Personal Summary</strong> <br />
              Dynamic and passionate front-end web developer with experience in
              building responsive websites and mobile applications. Possesses a
              strong work ethic and the ability to adapt to ever-changing
              environments. Effective collaboration skills, team building
              capabilities, and leadership in diverse and complex operations.
              Education as well as experience in comprehensive problem solving,
              creative troubleshooting, and complex project management.
            </p>

            <p />
            
            <div className="clearfix mt-lg-5 ">
              <p className="mt-lg-5 pt-lg-5 fs-3">
                <strong>Core Qualifications</strong>
              </p>
              <ul className="fs-4">
                <li>Excellent organization and presentation skills</li>
                <li>
                  Good experience with Windows, Linux, and MAC operating systems
                </li>
                <li>Strong knowledge of Microsoft Office suite</li>
                <li>
                  Outstanding knowledge of web programming skills including:<br/><br/>
                  <div class="row justify-content-start  ">
                    <div class=" col-6 col-lg-4">
                      -React
                      <br />
                      -React Native
                      <br />
                      -CSS
                      <br />
                      -HTML
                      <br />
                      -JavaScript
                    </div>
                    <div class="col-6 col-lg-4">
                      -Node.js
                      <br />
                      -Bootstrap
                      <br />
                      -Agile/scrum
                      <br />
                      -git-hub
                      <br />
                      -wordPress
                    </div>
                  </div><br/>
                </li>
                <li>
                  Profound creative and analytical problem-solving and
                  troubleshooting skills
                </li>
                <li>Strong verbal and written communication skills</li>
              </ul>
              <p />
            </div>
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
  );
}

export default Profile;
