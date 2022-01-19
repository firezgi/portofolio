import React from 'react';
import hab from "../images/hab.png"

function Profile() {
  return <div>
      <div class="container">
      <div class="col-lg-12">
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-primary flex-wrap h-100 align-content-center"
        >
          <div class="container-fluid">
            <a class="navbar-brand text-light p-lg-2" href="/">
              <span class="fs-3">Habteab Firezgi</span><br />
              <small>Motivated and Dynamic Front End Developer</small>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainMenu"
              aria-controls="mainMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mt-lg-5" id="mainMenu">
              <ul class="navbar-nav ">
                <li class="nav-item border-light border-bottom">
                  <a class="nav-link active" aria-current="page" href="/"
                    >Profile</a
                  >
                </li>
                <li class="nav-item border-light border-bottom">
                  <a class="nav-link" href="/career-development.html"
                    >Career Development</a
                  >
                </li>
                <li class="nav-item border-light border-bottom">
                  <a class="nav-link" href="Education.html">Education</a>
                </li>
                <li class="nav-item border-light border-bottom">
                  <a class="nav-link" href="/contact-hab.html"
                    >Contact Habteab</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="col-lg-12">
        <div class="bg-light m-3 p-3 border rounded-3">
          <h1>Profile</h1>
          <img
            src={hab}
            alt=""
            class="float-md-start me-md-3 mb-md-3 mb-xs-5 w-100 d-md-none"
          />
          <img
            src={hab}
            alt=""
            class="float-md-start me-md-5 mb-md-3 w-50 d-none d-md-block"
          />

          <p class="mb-lg-5 p-lg-4 mt-xs-5 mb-lg-5 fs-5">
            <strong class="fs-3 ">Personal Summary</strong> <br/>
            Dynamic and passionate front-end web developer with experience in
            building responsive websites and mobile applications. Possesses a
            strong work ethic and the ability to adapt to ever-changing
            environments. Effective collaboration skills, team building
            capabilities, and leadership in diverse and complex operations.
            Education as well as experience in comprehensive problem solving,
            creative troubleshooting, and complex project management.
            
          </p>

          <p />
          <div class="clearfix">
            <p class="mt-lg-5 fs-3"><strong >Core Qualifications</strong></p>
            <ul class="fs-5">
              <li>Excellent organization and presentation skills</li>
              <li>
                Good experience with Windows, Linux, and MAC operating systems
              </li>
              <li>Strong knowledge of Microsoft Office suite</li>
              <li>
                Outstanding knowledge of web programming skills including:
                <br />
                -React<br />
                -React Native<br />
                -CSS<br />
                -HTML<br />
                -JavaScript<br />
                -Node.js<br />
                -Bootstrap<br />
                -Agile/scrum<br />
                -git-hub<br/>
                -wordPress
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
      <footer
        class="row bg-primary p-3 text-center col-lg-12 justify-content-around mb-3"
      >
        <div class="col-md-3 text-light">
          1501 almaden expressway apt 6153 San Jose,CA 95125
        </div>
        <div class="col-md-3 text-light">(832)206-8163</div>
        <div class="col-md-3 nav-item">
          <a class="nav-link text-light" href="contact-hab.html"
            >keshi2017@gmail.com</a
          >
        </div>
      </footer>
    </div>
  </div>;
}

export default Profile;
