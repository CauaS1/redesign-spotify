import React, { Component } from 'react';

import './style.css';

import Album from '../../img/album.png';

import Play from '../../icon/play.svg';
//import Pause from '../../icon/pause.svg';
import Previous from '../../icon/previous.svg';
import Next from '../../icon/next.svg';
import Like from '../../icon/heart.svg';

export default class Player extends Component {
  styles = () => {
    return (
      {
        width: '100%',
        animation: 'greenBar 10s',
      }
    )
  }

  render() {
    return (
      <div className="player">
        <div className="album">
          <img src={Album} alt="album" />
          <ul>
            <li>Crawling</li>
            <li> <span>Illenium</span> </li>
          </ul>
        </div>

        <div className="music-player">
          <div className="buttons">
            <img src={Previous} alt="prev" className="btn" />
            <button className="play">
              <img src={Play} alt="play" />
            </button>
            <img src={Next} alt="next" className="btn" />
          </div>

          <div className="music-bar">
            <span className="bar">
              <span className="green-bar"></span>
            </span>
          </div>
        </div>
        <div className="others">
          <span className="time"> 0:00/4:02 </span>
          <img src={Like} alt="like"/>
        </div>

      </div>
    );
  }
}