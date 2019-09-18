import React from 'react';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import './style.css';

export const Home = props => (
  <div className="home_box">
    <div className="title">Home</div>

    <div className="category_header_section">
      <div className="category_header">
        <span>Recently Played</span>
        <div className="Home_scroll_left_right">
          <div className="back">
            <KeyboardArrowLeftIcon className="nav" />
          </div>
          <div className="forward">
            <KeyboardArrowRightIcon className="nav" />
          </div>
        </div>
      </div>
      <div className="category_divider" />
    </div>

    <div className="home_recentlyPlayedList">
      {props.music.songs.map(song =>
        props.user.recentlyPlayed.includes(song.id) ? (
          <div className="recentylPlayed_item">
            <img
              src={song.albumArt}
              alt={song.title}
              className="recentlyPlayed_art"
            />
            <div className="recentlyPlayed_title">{song.title}</div>
            <div className="recentlyPlayed_artist">{song.artist}</div>
          </div>
        ) : null
      )}
    </div>
  </div>
);

export default Home;
