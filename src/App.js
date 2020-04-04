import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/index.js';
import Home from './components/Home/index.js';
import Login from './components/Login/index.js';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
})

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <NavigationBar />

            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

          </Router>
        </div>
      </ThemeProvider>
    );
  }
}
