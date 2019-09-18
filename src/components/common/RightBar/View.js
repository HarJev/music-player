import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import profilePhoto from '../../../assets/profile_picture.png';
import logo from '../../../assets/cover.png';

import './style.css';

export const RightbarView = () => (
  <div className="rb_box">
    <div className="rb_top">
      <img src={profilePhoto} alt="profile" className="rb_profilePicture" />
      <div className="rb_userName">Jevaun Harris</div>
      <KeyboardArrowDownIcon className="rb_options" />
    </div>
    <div className="rb_middle">
      <span className="rb_friendActivity">Friend Activity</span>
      <div className="rb_friendsMessage">
        Check what your friends are up to!
      </div>
      <div className="rb_upgrade">
        <span className="rb_upgrade_text">upgrade</span>
      </div>
    </div>
    <div className="rb_end"></div>
  </div>
);

export default RightbarView;
