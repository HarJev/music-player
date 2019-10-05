import React from 'react';
import Slider from '@material-ui/core/Slider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
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
          <div
            className="c_songProgress"
            style={{
              width: `${props.currentTimePercentage}%`,
              transition: 'all 0.5s ease-in-out',
            }}
          />
        </div>
        <div className="c_time">
          <span className="c_time_progress">
            {props.formatTime(props.currentTime)}
          </span>
          <span className="c_time_songLength">
            {props.formatTime(props.selectedTrack.length)}
          </span>
        </div>
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
                <span key={ft}>
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
            <div className="c_outsideIcon_div">
              <ShuffleIcon className="c_outsideIcon" />
            </div>
            <div className="c_otherIcon_div">
              <SkipPreviousIcon
                className="c_otherIcon"
                onClick={() => props.handleSkip('previous')}
              />
            </div>
            <div
              className="c_PausePlayIcon_div"
              onClick={props.handlePlayPause}
            >
              {props.playing ? (
                <PauseCircleOutlineIcon className="c_PausePlayIcon" />
              ) : (
                <PlayCircleOutlineIcon className="c_PausePlayIcon" />
              )}
            </div>
            <div className="c_otherIcon_div">
              <SkipNextIcon
                className="c_otherIcon"
                onClick={() => props.handleSkip('next')}
              />
            </div>
            <div className="c_outsideIcon_div">
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
            <Slider
              value={props.volume}
              onChange={props.handleVolumeChange}
              // className="c_volumeBar"
              classes={{
                root: 'c_volume',
                rail: 'c_volumeBar',
                track: 'c_volumeBar_filled',
                thumb: 'c_volumeBar_thumb',
              }}
            />
          </div>
          <div className="c_otherIcon">
            <PlaylistPlayIcon className="c_otherIcon" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
