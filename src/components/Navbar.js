import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import './DarkMode.css'


export default class Navbar extends Component {
    searchText="";
    static defaultProps = {
        darkMode: false,
        bcolor: 'light'
    };
      static propTypes = {
        darkMode: PropTypes.bool,
        bcolor: PropTypes.string
    };
    constructor() {
        super();
        this.state = {
            searchText : ""
        };
      }
    render() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${this.props.darkMode?"dark":""} bg-${this.props.darkMode?"black":""}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" >The Daily Scoop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" >Home</a>
                    </li>
                    <li className={`nav-item dropdown`}>
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className={`dropdown-menu ${this.props.darkMode?"dropdown-menu-dark":""}`}>
                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                        <li><Link className="dropdown-item" to="/general">General</Link></li>
                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/About_Me">About Me</Link>
                    </li>  
                </ul>
                <div className={`btn-container white-preview toggler-btn-css me-2 bg-${this.props.darkMode?"black":"light"}`} >
                    <label className="switch btn-color-mode-switch">
                    <input type="checkbox" name="color_mode" id="color_mode" value="1" onClick={this.props.isDark}/>
                    <label hmtlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
                    </label>
                </div>
                <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                    <input className="form-control me-2" placeholder="Search" onChange={event => this.setState({searchText: event.target.value})}/>
                    <Link to="/search">
                    <button className="btn btn-outline-success" onClick={(e) => this.props.search(this.state.searchText)}>
                        Search
                    </button>
                    </Link>
                </form>
                </div>
            </div>
        </nav>
    );
}
}