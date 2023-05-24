import React, { Component } from 'react'
import './DarkMode.css'

export default class toggleButton extends Component {
  
  render() {
    return (
      <div className="btn-container white-preview">
        <label className="switch btn-color-mode-switch">
            <input type="checkbox" name="color_mode" id="color_mode" value="1" onClick={this.colorMode}/>
            <label hmtlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
        </label>
      </div>
    );
  }
}