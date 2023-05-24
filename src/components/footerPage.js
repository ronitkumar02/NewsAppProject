import React, { Component } from 'react'
/* The above class represents a footer component with social media icons and links to various pages. */
export default class footerPage extends Component {
  render() {
    return (
        <footer>
        <div className="footer">
        <div className="row">
        <a className="col-lg-5" href="https://www.instagram.com/ronitkumar02" target='_black'><i className="bi bi-instagram"></i></a>
        <a className="col-lg-2" href="https://www.linkedin.com/in/ronit-kumar-manjhi-5a57b3156/" target='_black'><i className="bi bi-linkedin"></i></a>
        <a className="col-lg-5" href="https://github.com/ronitkumar02" target='_black'><i className="bi bi-github"></i></a>
        </div>
        
        <div className="row">
        <ul>
        <li><a href="/">Contact us</a></li>
        <li><a href="/">Our Services</a></li>
        <li><a href="/">Privacy Policy</a></li>
        <li><a href="/">Terms & Conditions</a></li>
        <li><a href="/">Career</a></li>
        </ul>
        </div>
        </div>
        </footer>
    )
  }
}
