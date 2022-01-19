import React from 'react';
import { Link } from 'react-router-dom';
import Decidr from "../images/Decidr.png";
import ECard from "../images/E-Card.png";
import Hounted from "../images/HountedHouseGame.png";
import MarvelSpace from "../images/marvel-space.png";

function CareerDevelopment() {
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
                  <Link to={`/`}>
                  <p class="nav-link " aria-current="page" >Profile</p>
                  </Link>                  
                </li>
                <li class="nav-item border-light border-bottom">
                <Link to={`/CareerDevelopment`}>
                  <p class="nav-link active " aria-current="page" >CareerDevelopment</p>
                  </Link>    
                </li>
                <li class="nav-item border-light border-bottom">
                  <Link to={`/Education`}>
                  <p class="nav-link " aria-current="page">Education</p>
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
        <h1>Career Development</h1>
        <hr/>
        <p>
          <h2>Front-End Developer</h2> <br />
          <strong class="fs-3">Bitwise Industries, AlphaWorks</strong><br/>
          <p class="fs-4">Sep 2021-Current</p> 
          <ul class="fs-5">
            <li >Developed UI workflows and wireframes</li>
            <li>Built feature templates in React and React-native </li>
            <li>Collaborated with QA, and design teammates to build ,test, and maintain responsive applications </li>
            <li>Worked on frontend -JavaScript based web applications</li>
          </ul>
        </p>
        <p>
          <h2>Projects</h2> <br />
          
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Hounted} class="d-block w-100" alt="..."/>
                <strong class="fs-3">Hounted House Game</strong><br/>
          <p class="fs-4">2021/</p>
          <ul class="fs-5">
            <li>learned and implemented react.js</li>
            <li>used agile methodology to manage the project </li>
            <li>Collaborated with QA teammates to test the responsive application</li>
          </ul>
              </div>
              <div class="carousel-item">
                <img src={Decidr} class="d-block w-100" alt="..."/>
                <strong class="fs-3">Decidr</strong><br/>
                <p class="fs-4">2021/</p>
          <ul class="fs-5">
            <li>learned and implemented React-native</li>
            <li>used agile methodology to manage the project </li>
          </ul>
              </div>
              <div class="carousel-item">
                <img src={ECard} class="d-block w-100" alt="..."/>
                <strong class="fs-3">E-Card</strong><br/>
                <p class="fs-4">2021/</p>
          <ul class="fs-5">
            <li>learned and implemented React-native</li>
            <li>used agile methodology to manage the project </li>
          </ul>
              </div>
              <div class="carousel-item">
                <img src={MarvelSpace} class="d-block w-100 " alt="..."/>
                <strong class="fs-3">Marvel-Space</strong><br/>
                <p class="fs-4">2021/</p>
          <ul class="fs-5">
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
    </div>
  </div>;
}

export default CareerDevelopment;
