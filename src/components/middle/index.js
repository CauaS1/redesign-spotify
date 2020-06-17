import React, { Component } from 'react';

import './style.css';

import Woman1 from '../../img/woman1.png';
import Woman2 from '../../img/woman2.png';
import Woman3 from '../../img/woman3.png';
import Woman4 from '../../img/woman4.png';
import Man1 from '../../img/man.png';
import Album from '../../img/album.png';
import Liked from '../../img/liked.png';

import AllMusic from '../middle-components/allMusic/index';
import Header from '../middle-components/header/index';

export default class Middle extends Component {
  render() {
    return (
      <div className="middle">
        <Header />

        <div className="content">
          <div className="recommend">
            <h2>RECOMMENDS</h2>
            <div className="photos">
              <img src={Woman1} alt="woman1" />
              <img src={Woman2} alt="woman2" />
              <img src={Woman3} alt="woman3" />
              <img src={Man1} alt="man1" />
            </div>
          </div>

          <div className="musics">
            <img src={Woman4} alt="woman4" className="large" />
            <h3>Recently Playlist</h3>
            <div className="recently">
              <div className="all-albums">
                <div className="album">
                  <img src={Album} alt="album" className="album-img" />
                  <ul>
                    <li>My Playlist</li>
                    <li> <span>BY ILLENIUM</span>  <span>07 SONGS</span></li>
                  </ul>
                </div>

                <div className="album">
                  <img src={Liked} alt="album2" className="album-img" />
                  <ul>
                    <li>Liked Songs</li>
                    <li> <span>BY CAUAS1</span>  <span>05 SONGS</span></li>
                  </ul>
                </div>
              </div>

              <AllMusic />
            </div>
          </div>
        </div>
      </div>

    );
  }
} 