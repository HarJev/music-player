import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import profilePhoto from '../../../assets/profile_picture.png';

import './style.css';

export const RightbarView = () => (
  <div className="rb_box">
    <div className="rb_top">
      <img src={profilePhoto} alt="profile" className="rb_profilePicture" />
      <div className="rb_userName">Jevaun Harris</div>
      <KeyboardArrowDownIcon className="rb_options" />
    </div>
    <div className="rb_middle">Middle</div>
    <div className="rb_end">End</div>
  </div>
);

export default RightbarView;
