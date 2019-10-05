import React, { Component } from 'react';
import { MainAppView } from './View';

export class Container extends Component {
  render() {
    return (
      <MainAppView
        {...this.props}
        formatTime={this.props.formatTime}
        playTrack={this.props.playTrack}
        pushToPlaylist={this.props.pushToPlaylist}
        likedSongs={this.props.likedSongs}
      />
    );
  }
}

export const MainApp = Container;

export default MainApp;
