import React, { Component } from 'react';
import { ControlsView } from './View';

export class Container extends Component {
  render() {
    return (
      <div>
        <ControlsView
          {...this.props}
          formatTime={this.props.formatTime}
          playerRef={this.props.playerRef}
          handlePlayPause={this.props.handlePlayPause}
          handleSkip={this.props.handleSkip}
        />
      </div>
    );
  }
}

export const Controls = Container;

export default Controls;
