import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
  return <div>
      <div class="container">
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
                  <Link to={`/`}>
                  <p class="nav-link " aria-current="page" >Profile</p>
                  </Link>                  
                </li>
                <li class="nav-item border-light border-bottom">
                <Link to={`/CareerDevelopment`}>
                  <p class="nav-link " aria-current="page" >CareerDevelopment</p>
                  </Link>    
                </li>
                <li class="nav-item border-light border-bottom">
                  <Link to={'/Education'}>
                  <p class="nav-link active" aria-current="page">Education</p>
                  </Link>                  
                   </li>
                   <li class="nav-item border-light border-bottom">
                  <Link to={`/ContactHab`}>
                  <p class="nav-link " aria-current="page">Contact Habteab</p>                
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    
    <div class="col-lg-12">
      <div class="bg-light m-3 p-3 border rounded-3">
        <h1>Education</h1>
        <p>
          <strong class="fs-4">Asmara university</strong> 
          <p class="fs-5">
            Asmara,Eritrea- Sep 1997 to Jul 2001:<br />
          Bachelors of Arts in Economics and Finance
          </p>          
          <strong class="fs-4">De Anza College</strong> 
          <p class="fs-5">
            Cupertino,CA- October2017 to july2019:<br />
          Pursued Associated degree in Computer science        
          </p>
          <strong class="fs-4">Evangadi Tech</strong> 
          <p class="fs-5">
          Feb2021 to Aug2021:<br />
          Bootcamp :Full-stack web-development        
          </p>
        </p>
        <p />
      </div>
      
    </div>
    <footer class="row bg-primary p-3 text-center col-lg-12 justify-content-around mb-3">
      <div class="col-md-3 text-light">
        1501 almaden expressway apt 6153 San Jose,CA 95125
      </div>
      <div class="col-md-3 text-light">
        (832)206-8163
      </div>
      <div class="col-md-3 nav-item">
        <a class="nav-link text-light "href="contact-hab.html">keshi2017@gmail.com</a>
      </div>  
    </footer>
    </div>
    
  </div>;
}

export default Education;
