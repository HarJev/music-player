import React from 'react';

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
        </div>
      </div>
    </div>
  </div>
);
