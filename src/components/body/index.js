import React, { Component } from 'react';

import './style.css';

import Menu from '../menu';
import Player from '../player';
import Middle from '../middle';

// import { Container } from './styles';

export default class Body extends Component {
  render() {
    return (
      <>
        <div className="body-container">
          <Menu />
          <Middle />
          <Player />
        </div>
      </>
    );
  }
}
