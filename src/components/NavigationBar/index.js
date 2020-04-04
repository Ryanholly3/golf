import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Link
} from "react-router-dom";
import './styles.css';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  toggleDrawer = (action) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ drawerOpen: action });
  };

  renderList = () => {
    return(
      <div
        onClick={this.toggleDrawer(false)}
        onKeyDown={this.toggleDrawer(false)}
      >
      <List>
        <Link to="/">
          <ListItem button key={'Home'}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </Link>
        <Link to="/login">
          <ListItem button key={'Login'}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={'Login'} />
          </ListItem>
        </Link>
      </List>
    </div>
    )
  };

  render() {
    return (
      <div className="NavigationBar">
        <AppBar postition='static'>
          <Toolbar>
            <IconButton aria-label='menu' onClick={this.toggleDrawer(true)}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
              Golf
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor={'left'} open={this.state.drawerOpen} onClose={this.toggleDrawer(false)}>
          {this.renderList()}
        </Drawer>
      </div>
    )
  }
}
