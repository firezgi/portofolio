import React from 'react';
import { Link } from 'react-router-dom';

function ContactHab() {
  const sendContactForm =()=>{
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    let mailto = `mailto:keshi2017@gmail.com`;
    mailto += `?subject=${subject}`;
    mailto +=`& body=${message}`;
    window.open(mailto);    
    };
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
                    <Link to={`/Education`} className="nav-link " aria-current="page">                      
                        Education                      
                    </Link>
                  </li>
                  <li className="nav-item border-light border-bottom">
                    <Link className="nav-link active" aria-current="page" to={`/ContactHab`}>                      
                        Contact Habteab                      
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      <div>
        <div>
          <h1>Contact Habteab</h1>
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">Your Name*</label>
              <input type="text" name="name" id="name" className="form-control" required/>
            </div>
            <div className="mb-3">
              <label for="subject" className="form-label">Subject*</label>
              <input type="text" name="subject" id="subject" className="form-control" required/>
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">Your Message</label>
              <textarea name="message" id="message" className="form-control" row="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-3" onClick={sendContactForm}
            
            
            >Submit</button>
          </form>
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

export default ContactHab;
