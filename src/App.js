import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/index.js'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
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
          <NavigationBar />
        </div>
      </ThemeProvider>
    );
  }
}
