import React, { Component } from 'react'
import logo from './logo.png'
/* The above class is a React component that renders a news item with an image, title, description,
publication date, and link to the full article. */
export default class News_item extends Component {
  render() {
    let {urlToImage,title,description,publishedAt,url,isDark}= this.props;
    return (
        <a href={`${url}`} target='_black' style={{ textDecoration: 'none' }}>
        <div className={`card h-100 ${isDark?'bg-black text-light':""}`}>
          <img src={urlToImage?urlToImage:logo} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className={`card-footer ${isDark?'bg-black text-light':""}`}>
            <small className={`${isDark?'':"text-body-secondary"}`}>Published: {new Date(publishedAt).toGMTString()}</small>
          </div>
        </div>
        </a>
    );
  }
}
