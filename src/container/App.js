import React, { Component } from "react";
import "./App.css";
import Main from './Main';

/**
 * Entry point for the application . used to hook high level components like provider,router etc
 */
class App extends Component {

  render() {
    return (
      <Main />
    );
  }
}

export default App;
