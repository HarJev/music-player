import React, { Component } from 'react';
import { ControlsView } from './View';

export class Container extends Component {
  render() {
    return (
      <div>
        <ControlsView />
      </div>
    );
  }
}

export const Controls = Container;

export default Controls;
