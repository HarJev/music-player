import React from 'react';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Route, Switch } from 'react-router-dom';

import './style.css';
import Home from '../../pages/Home/View';
import { Liked } from 'components/pages/Liked';
import { Radio } from 'components/pages/Radio';

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
      <div className="ma_logo" />
    </div>
    <div className="ma_content">
      <Switch>
        <Route exact path="/" render={() => <Home {...props} />} />
        <Route path="/home" render={() => <Home {...props} />} />
        <Route
          path="/liked"
          render={() => (
            <Liked
              {...props}
              playTrack={props.playTrack}
              likedSongs={props.likedSongs}
            />
          )}
        />
        <Route
          path="/radio"
          render={() => (
            <Radio
              {...props}
              playTrack={props.playTrack}
              likedSongs={props.likedSongs}
            />
          )}
        />
      </Switch>
    </div>
  </div>
);

export default MainAppView;
