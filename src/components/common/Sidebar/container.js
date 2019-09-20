import React, { Component } from 'react';
import { SidebarView } from './View';

export class Container extends Component {
  render() {
    return (
      <div>
        <SidebarView {...this.props} />
      </div>
    );
  }
}

export const SideBar = Container;

export default SideBar;
