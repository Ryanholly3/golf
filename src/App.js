import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/index.js'
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
      </div>
    );
  }
}
