import React, { Component } from 'react';
import { RightbarView } from './View';

export class Container extends Component {
  render() {
    return <RightbarView name={this.props.name} />;
  }
}

export const Rightbar = Container;

export default Rightbar;
