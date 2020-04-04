import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './styles.css';

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Button color="primary">
            Login
        </Button>
      </div>
    )
  }
}