import React, { Component } from 'react';
import './App.css';
import TransactionContainer from "./components/TransactionContainer.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <TransactionContainer/>
      </div>
    );
  }
}

export default App;
