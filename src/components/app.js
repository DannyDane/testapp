import React from 'react';
import { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavbarTop from './navbar-top';
import NavbarBottom from './navbar-bottom';
import Content from './content';
import BanBottom from './bar-bottom';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavbarTop />
          {this.props.children}
        <BanBottom />
      </div>
    );
  }
}
