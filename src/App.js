import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Image Finder</h1>
        </header>
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Search />
          </div>

          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
