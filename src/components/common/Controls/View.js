import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LoopIcon from '@material-ui/icons/Loop';

import './style.css';

export const ControlsView = () => (
  <div className="c_box">
    <div className="c_right" />
    <div className="c_left">
      <div className="c_musicProgress">
        <div className="c_tempProgress" />
        <div className="c_tempProgressEnd" />
      </div>
      <div className="c_bottom">
        <div className="c_songData">
          <div className="c_albumArt" />
          <div className="c_textData">
            <div className="c_songName">Stronger</div>
            <div className="c_artist">Kanye West</div>
          </div>
          <div className="c_like" style={{ color: '#ffffff' }}>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="c_playbackControls_div">
          <div className="c_playbackControls">
            <div className="c_otherIcon">
              <ShuffleIcon className="c_otherIcon" />
            </div>
            <div className="c_otherIcon">
              <SkipPreviousIcon className="c_otherIcon" />
            </div>
            <div className="c_PausePlayIcon">
              <PauseCircleOutlineIcon className="c_PausePlayIcon" />
            </div>
            <div className="c_otherIcon">
              <SkipNextIcon className="c_otherIcon" />
            </div>
            <div className="c_otherIcon">
              <LoopIcon className="c_otherIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
