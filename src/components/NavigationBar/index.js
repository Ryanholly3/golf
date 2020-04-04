import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <AppBar postition='static'>
          <Toolbar>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
