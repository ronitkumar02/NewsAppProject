import React, { Component } from 'react'
import PropTypes from "prop-types";
import Dp from './dp.jpg'
export default class AboutMe extends Component {
  static defaultProps = {
    isDark: true
  };
  static propTypes = {
    isDark: PropTypes.bool
  };

    render() {
    return (
        <div className='container1' style={{backgroundColor:`${this.props.isDark?'#212529':'#eee'}`}}>
        <section style={{backgroundColor:`${this.props.isDark?'#212529':'#eee'}`}}>
        <div className="row" style={{paddingTop:'10px'}}>
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src={Dp} alt="avatar"
              className="rounded-circle img-fluid" style={{width:"150px"}}/>
            <h5 className="my-3">Ronit Kumar</h5>
            <p className="text-muted mb-1">Frontend Developer</p>
            <p className="text-muted mb-4">India, Bengaluru</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="https://www.linkedin.com/in/ronit-kumar-manjhi-5a57b3156/" target='_black' style={{ textDecoration: 'none' }}>
              <button type="button" className="btn btn-primary">Follow</button></a>
              <a href="https://www.linkedin.com/in/ronit-kumar-manjhi-5a57b3156/">
              <button type="button" className="btn btn-outline-primary ms-1">Message</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0" >
          <div className="card-body p-0">
            <ul className="list-group list-group-flush rounded-3">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <i className="bi bi-github"style={{color: "#333333"}}></i>
                <p className="mb-0">
                <a href="https://github.com/ronitkumar02" target='_black' style={{ textDecoration: 'none' }}>
                  @Ronitkumar02</a></p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <i className="bi bi-linkedin" style={{color: "#55acee"}}></i>
                <p className="mb-0">
                <a href="https://www.linkedin.com/in/ronit-kumar-manjhi-5a57b3156/" target='_black' style={{ textDecoration: 'none' }}>
                  Ronit Kumar
                  </a>
                  </p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <i className="bi bi-instagram" style={{color: "#ac2bac"}}></i>
                <p className="mb-0">
                  <a href="https://www.instagram.com/ronitkumar02/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_black' style={{ textDecoration: 'none' }}>@Ronitkumar02</a>
                  </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Ronit Kumar Manjhi</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">ronitkr12345@gmail.com</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(+91) 91999*****</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(+91) 765*******</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">India,Bengaluru</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">Other skills</p>
                <p className="mb-1" style={{fontSize:".77rem"}}>C++ & Python</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize:".77rem"}}>Latex</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize:".77rem"}}>Backend Web Development</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize:".77rem"}}>Problem Solving</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>
        </div>
    )
  }
}
