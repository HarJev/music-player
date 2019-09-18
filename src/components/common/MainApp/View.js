import React from 'react';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import './style.css';
import Home from '../../pages/Home/View';

export const MainAppView = props => (
  <div className="ma_box">
    <div className="ma_top">
      <div className="back_forward">
        <div className="back">
          <KeyboardArrowLeftIcon className="nav" />
        </div>
        <div className="forward">
          <KeyboardArrowRightIcon className="nav" />
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" className="search_input" />
      </div>
      <div className="ma_logo">LOGO</div>
    </div>
    <div className="ma_content">
      <Home {...props} />
    </div>
  </div>
);

export default MainAppView;
