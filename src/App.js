/* The App class is a React component that renders a news website with different categories and a
search function. */
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import FooterPage from './components/footerPage';
import AboutMe from "./components/AboutMe";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      darkMode: false,
    }
  }
  // Function to toggle dark mode                                               
  isDarkMode = () =>{
    this.state.darkMode?(this.setState({darkMode: false})):(this.setState({darkMode: true}));
  }
  // Function to update the search text
  search = async (text) => {
    await this.setState({
      searchText : text
    });
  }

 /* The `render()` method is a required method in a React component that returns the JSX (JavaScript
 XML) code to be rendered on the screen. In this case, the `render()` method is returning a JSX code
 that includes a `div` element containing a `Router` component from the `react-router-dom` library,
 a `Navbar` component, a `Routes` component containing multiple `Route` components, a `FooterPage`
 component, and some props passed down to the child components. The `Route` components are used to
 render different pages based on the URL path. The `News` component is being rendered with different
 props based on the URL path and the state of the component. The `AboutMe` component is also being
 rendered when the URL path is `/About_Me`. */
  render() {
    return (
      <div>
        <Router>
        <Navbar isDark={this.isDarkMode}  darkMode={this.state.darkMode} search={this.search} />
      <Routes>
        <Route exact path={`/`} element={<News key={"general"} pageSize={21} country='in' category='general' isDark={this.state.darkMode} />}/>       
          <Route exact path={`/business`} element={<News key={"business"} pageSize={21} country='in' category='business'isDark={this.state.darkMode}/>} />
          <Route exact path={`/general`} element={<News key={"general"} pageSize={21} country='in' category='general' isDark={this.state.darkMode}/>}/>
          <Route exact path={`/science`} element={<News key={"science"} pageSize={21} country='in' category='science' isDark={this.state.darkMode} />}/>
          <Route exact path={`/technology`} element={<News key={"technology"} pageSize={21} country='in' category='technology' isDark={this.state.darkMode}/>}/>
          <Route exact path={`/health`} element={<News key={"health"}pageSize={21} country='in' category='health' isDark={this.state.darkMode}/>}/>
          <Route exact path={`/sports`} element={<News key={"sports"} pageSize={21} country='in' category='sports' isDark={this.state.darkMode}/>}/>
          <Route exact path={`/entertainment`} element={<News key={"entertainment"} pageSize={21} country='in' category='entertainment' isDark={this.state.darkMode}/>}/>
          <Route exact path={`/search`} element={<News key={`q=${this.state.searchText}`} pageSize={21} category={`${this.state.searchText}`} isDark={this.state.darkMode} searchText={this.state.searchText}/>}/>
          <Route exact path={`/About_Me`} element={<AboutMe isDark={this.state.darkMode} />}/>
        </Routes>
      </Router>
      <FooterPage/>
      </div>
    )
  }
}
