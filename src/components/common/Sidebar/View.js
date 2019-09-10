import React from 'react';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import RadioOutlinedIcon from '@material-ui/icons/RadioOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HomeIcon from '@material-ui/icons/Home';

import './View.css';

export const SidebarView = () => (
  <div className="sb_box">
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

    <div className="sb_quickAccess">
      <div className="sb_quickAccess_text">Quick Access</div>
      <div className="sb_quickAccess_navs">
        <div className="sb_quickAccess_nav">
          <div className="sb_quickAccess_nav_indicator"></div>
          <HomeIcon className="sb_quickAccess_nav_icon" />
          <span className="sb_quickAccess_nav_text">Home</span>
        </div>
        <div className="sb_quickAccess_nav">
          <div className="sb_quickAccess_nav_indicator"></div>
          <ExploreOutlinedIcon className="sb_quickAccess_nav_icon" />
          <span className="sb_quickAccess_nav_text">Browse</span>
        </div>
      </div>
    </div>
  </div>
);
