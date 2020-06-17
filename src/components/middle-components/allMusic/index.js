import React from 'react';

import './style.css';

import { FaPlay } from 'react-icons/fa';

function AllMusics() {
  return (
    <div className="all-musics">
      <div className="all-songs">
        <div className="header">
          <p>TITLE</p>
          <p>ARTIST</p>
        </div>

        <ul>
          <li>Hold On</li>
          <li>Illenium</li>
        </ul>

        <ul>
          <li>Good Things Fall Apart</li>
          <li>Illenium</li>
        </ul>

        <ul>
          <li>Blood</li>
          <li>Illenium</li>
        </ul>

        <ul>
          <li>
            <FaPlay />
            <span>Crawling</span>
          </li>
          <li>Illenium</li>
        </ul>

        <ul>
          <li>Every Piece of Me</li>
          <li>Illenium</li>
        </ul>

        <ul>
          <li>sad Songs</li>
          <li>Illenium</li>
        </ul>

        <ul>
          <li>Lonely</li>
          <li>Illenium</li>
        </ul>
      </div>

      <div className="liked-songs">
        <div className="header">
          <p>TITLE</p>
          <p>ARTIST</p>
        </div>
        <ul>
          <li>Cops</li>
          <li>Vanic x K. Flay</li>
        </ul>

        <ul>
          <li>All Time Now</li>
          <li>John Belliow</li>
        </ul>

        <ul>
          <li>Stressed Out</li>
          <li>Twenty One Pilots</li>
        </ul>

        <ul>
          <li>Circles</li>
          <li>Post Malone</li>
        </ul>

        <ul>
          <li>Spotlight</li>
          <li>Lil Peep</li>
        </ul>
      </div>
    </div>

  );
}

export default AllMusics;