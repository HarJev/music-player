import React, { Component } from 'react';
import { MainAppView } from './View';

export class Container extends Component {
  formatTime = time => {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = '';

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  };

  render() {
    return <MainAppView {...this.props} formatTime={this.formatTime} />;
  }
}

export const MainApp = Container;

export default MainApp;
