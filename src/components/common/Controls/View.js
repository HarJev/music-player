import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LoopIcon from '@material-ui/icons/Loop';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import DevicesIcon from '@material-ui/icons/Devices';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import './style.css';

export const ControlsView = props => (
  <div className="c_box">
    <div className="c_right" />
    <div className="c_left">
      <div className="c_musicProgress">
        <div className="c_emptyProgress">
          <div className="c_tempProgress" />
        </div>
        <div className="c_time">
          <span className="c_time_progress">1:17</span>
          <span className="c_time_songLength">
            {props.formatTime(props.selectedTrack.length)}
          </span>
        </div>
        {/* <div className="c_tempProgressEnd" /> */}
      </div>
      <div className="c_bottom">
        <div className="c_songData">
          <div className="c_albumArt_div">
            <img
              src={require(`assets/${props.selectedTrack.albumArt}`)}
              alt={props.selectedTrack.title}
              className="c_albumArt"
            />
          </div>
          <div className="c_textData">
            <div className="c_songName">{props.selectedTrack.title}</div>
            <span className="c_artist">
              <span className="liked_underline">
                {props.selectedTrack.artist}
              </span>
              {props.selectedTrack.feat.map(ft => (
                <span>
                  ,&nbsp;<span className="liked_underline">{ft}</span>
                </span>
              ))}
            </span>
          </div>
          <div className="c_like" style={{ color: '#ffffff' }}>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="c_playbackControls_div">
          <div className="c_playbackControls">
            <div className="c_outsideIcon">
              <ShuffleIcon className="c_outsideIcon" />
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
            <div className="c_outsideIcon">
              <LoopIcon className="c_outsideIcon" />
            </div>
          </div>
        </div>
        <div className="c_otherOptions">
          <div className="c_otherIcon" style={{ marginRight: '22px' }}>
            <DevicesIcon className="c_otherIcon" />
          </div>
          <div className="c_volumeControl" style={{ marginRight: '22px' }}>
            <div className="c_otherIcon">
              <VolumeUpIcon className="c_otherIcon" />
            </div>
            <div className="c_volumeBar">
              <div className="c_volumeBar_level" />
            </div>
          </div>
          <div className="c_otherIcon">
            <PlaylistPlayIcon className="c_otherIcon" />
          </div>
        </div>
      </div>
    </div>
    <audio
      ref={props.playerRef}
      autoPlay
      src={require(`assets/music/${props.selectedTrack.track}`)}
      paused
    />
  </div>
);
