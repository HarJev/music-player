import React from 'react';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import RadioOutlinedIcon from '@material-ui/icons/RadioOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import AlbumIcon from '../../../assets/album.png';
import MicIcon from '../../../assets/microphone.png';
import PlaylistIcon from '../../../assets/playlist.png';
import PlaceIcon from '../../../assets/place.png';
import PerfectScrollbar from 'react-perfect-scrollbar';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import 'react-perfect-scrollbar/dist/css/styles.css';

import './style.css';

export const SidebarView = () => (
  <div className="sb_box">
    <PerfectScrollbar>
      <div className="sb_circle_navs">
        <div className="sb_circle_navs_item">
          <div className="sb_circle_navs_circle">
            <ExploreOutlinedIcon />
          </div>
          <div className="sb_circle_navs_text">Browse</div>
        </div>
        <div className="sb_circle_navs_item">
          <div className="sb_circle_navs_circle">
            <RadioOutlinedIcon />
          </div>
          <div className="sb_circle_navs_text">Radio</div>
        </div>
        <div className="sb_circle_navs_item">
          <div className="sb_circle_navs_circle">
            <FavoriteBorderIcon />
          </div>
          <div className="sb_circle_navs_text">Liked</div>
        </div>
      </div>

      <div className="sb_madeForYou">
        <div className="sb_madeForYou_btn">
          <span className="sb_madeForYou_text">Made For You</span>
        </div>
      </div>

      <div className="sb_section">
        <div className="sb_sectionHeader">Quick Access</div>
        <div className="sb_section_navs">
          <div className="sb_section_nav">
            <div className="sb_section_nav_indicator"></div>
            <HomeIcon className="sb_section_nav_icon" />
            <span className="sb_section_nav_text">Home</span>
          </div>
          <div className="sb_section_nav">
            <div className="sb_section_nav_indicator"></div>
            <ExploreOutlinedIcon className="sb_section_nav_icon" />
            <span className="sb_section_nav_text">Browse</span>
          </div>
        </div>
      </div>

      <hr className="sb_divider" />

      <div className="sb_section">
        <div className="sb_sectionHeader">Your Library</div>
        <div className="sb_section_navs">
          <div className="sb_section_nav">
            <div className="sb_section_nav_indicator"></div>
            <img src={AlbumIcon} alt="albums" className="sb_section_nav_icon" />
            <span className="sb_section_nav_text">Albums</span>
          </div>
          <div className="sb_section_nav">
            <div className="sb_section_nav_indicator"></div>
            <img src={MicIcon} alt="artists" className="sb_section_nav_icon" />
            <span className="sb_section_nav_text">Artists</span>
          </div>
          <div className="sb_section_nav">
            <div className="sb_section_nav_indicator"></div>
            <img
              src={AlbumIcon}
              alt="local files"
              className="sb_section_nav_icon"
            />
            <span className="sb_section_nav_text">Local Files</span>
          </div>
          <div className="sb_section_nav">
            <div className="sb_section_nav_indicator"></div>
            <img
              src={PlaceIcon}
              alt="recently played"
              className="sb_section_nav_icon"
            />
            <span className="sb_section_nav_text">Recently Played</span>
          </div>
          <div className="sb_section_nav">
            <div className="sb_section_nav_indicator"></div>
            <img
              src={PlaylistIcon}
              alt="playlists"
              className="sb_section_nav_icon"
            />
            <span className="sb_section_nav_text">Playlists</span>
          </div>
        </div>
      </div>

      <div className="sb_addPlaylist">
        <input
          type="text"
          placeholder="New Playlist"
          className="sb_addPlayList_input"
        />
      </div>
    </PerfectScrollbar>
  </div>
);
