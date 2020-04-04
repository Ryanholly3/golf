import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <AppBar postition='static'>
          <Toolbar>
            <IconButton aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
