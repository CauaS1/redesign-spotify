import React, { Component } from 'react';

import './styles.css'

import Logo from '../../img/logo.png';
import Fire from '../../icon/fire.svg';
import Radio from '../../icon/radio.svg';
import Music from '../../icon/music.svg';
import Playlist from '../../icon/playlist.svg';
import Microphone from '../../icon/microphone.svg';
import Podcast from '../../icon/podcast.svg';
import Liked from '../../icon/heart.svg';
import Album from '../../icon/album.svg';





export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="img-container">
          <img src={Logo} alt="logo" />
        </div>

        <div className="playlist">
          <div className="hot">
            <ul>
              <li>
                <img src={Fire} alt="logo" className="icon" />
              New
            </li>
              <li>
                <img src={Radio} alt="radio" className="icon" />
              Radio
            </li>
            </ul>

            <h3>Playlists</h3>

            <div className="playlist">
              <ul>
                <li>
                  <img src={Music} alt="music" className="icon" />
                  Musics
                </li>

                <li>
                  <img src={Playlist} alt="playlist" className="icon" />
                  Albums
                </li>

                <li>
                  <img src={Microphone} alt="microphone" className="icon" />
                  Artists
                </li>

                <li>
                  <img src={Podcast} alt="podcast" className="icon" />
                  Podcasts
                </li>
              </ul>
            </div>

            <h3>Your Library</h3>

            <div className="library">
              <ul>
                <li>
                  <img src={Liked} alt="liked" className="icon" />
                  Liked Songs
                </li>

                <li>
                  <img src={Album} alt="album" className="icon" />
                  Illenium
                </li>
              </ul>
            </div>

            <div className="new-playlist">
              <div>
                <a href="#" className="btn">+</a>
                <a href="#">New Playlist</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
