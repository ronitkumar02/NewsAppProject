import React, { Component } from 'react';
import logo from './logo.png'
export default class top_News extends Component {
  render() {
    let {index,urlToImage,title,description,url} = this.props;
    return (
        <a href={`${url}`} target='_black' style={{ textDecoration: 'none' }}>
        <div className={`carousel-item ${index===0?'active':''}`} data-bs-interval="3000">
            <img className="d-block sildeshow" src={urlToImage?urlToImage:logo} alt="..."/>
            <div className="carousel-caption d-none d-md-block dark-bottom text-light">
            <h5>{title}</h5>
            <p>{description}</p>
            </div>
        </div>
        </a>
    );
  }
}
