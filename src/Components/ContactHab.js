import React from 'react';

function ContactHab() {
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
            <ul class="navbar-nav">
              <li class="nav-item border-light border-bottom">
                <a class="nav-link" aria-current="page" href="/"
                  >Profile</a
                >
              </li>
              <li class="nav-item border-light border-bottom">
                <a class="nav-link" href="career-development.html"
                  >Career Development</a
                >
              </li>
              <li class="nav-item border-light border-bottom">
                <a class="nav-link" href="Education.html"
                  >Education</a
                >
              </li>
              <li class="nav-item border-light border-bottom">
                <a class="nav-link active" href="/contact-hab.html">Contact Habteab</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div>
          <h1>Contact Habteab</h1>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Your Name*</label>
              <input type="text" name="name" id="name" class="form-control" required/>
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">Subject*</label>
              <input type="text" name="subject" id="subject" class="form-control" required/>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Your Message</label>
              <textarea name="message" id="message" class="form-control" row="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mb-3" onClick="sendContactForm()">Submit</button>
          </form>
        </div>
      </div>
      <footer class="row bg-primary p-3 text-center col-lg-8 justify-content-around mb-3">
        <div class="col-md-3 text-light">
          1501 almaden expressway apt 6153 San Jose,CA 95125
        </div>
        <div class="col-md-3 text-light">
          (832)206-8163
        </div>
        <div class="col-md-3 nav-item">
          <a class="nav-link text-light "href="/contact-hab.html">keshi2017@gmail.com</a>
        </div>  
      </footer>
    </div>
  </div>;
}

export default ContactHab;
