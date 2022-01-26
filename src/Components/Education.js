import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
  return <div>
      <div className="container">
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
                    <Link to={`/CareerDevelopment`} className="nav-link" aria-current="page">
                        CareerDevelopment                      
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link to={`/Education`} className="nav-link action" aria-current="page">                      
                        Education                      
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link className="nav-link " aria-current="page" to={`/ContactHab`}>                      
                        Contact Habteab                      
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
    <div className="col-lg-12">
      <div className="bg-light m-3 p-3 border rounded-3">
        <h1>Education</h1>
        <p>
          <strong className="fs-4">Asmara university</strong> 
          <p className="fs-5">
            Asmara,Eritrea- Sep 1997 to Jul 2001:<br />
          Bachelors of Arts in Economics and Finance
          </p>          
          <strong className="fs-4">De Anza College</strong> 
          <p className="fs-5">
            Cupertino,CA- October2017 to july2019:<br />
          Pursued Associated degree in Computer science        
          </p>
          <strong className="fs-4">Evangadi Networks</strong> 
          <p className="fs-5">
          Feb2021 to Aug2021:<br />
          Bootcamp :Full-stack web-development        
          </p>
        </p>
        <p />
      </div>
      
    </div>
    <footer className="row bg-primary p-3 text-center col-lg-12 justify-content-around mb-3">
      <div className="col-md-3 text-light">
        1501 almaden expressway apt 6153 San Jose,CA 95125
      </div>
      <div className="col-md-3 text-light">
        (832)206-8163
      </div>
      <div className="col-md-3 nav-item">
          <Link className="nav-link text-light" to={`/ContactHab`}>                      
          keshi2017@gmail.com                     
                    </Link>
        </div>   
    </footer>
    </div>
    
  </div>;
}

export default Education;
