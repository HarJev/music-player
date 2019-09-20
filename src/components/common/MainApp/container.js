import React, { Component } from 'react';
import { MainAppView } from './View';

export class Container extends Component {
  render() {
    return <MainAppView {...this.props} />;
  }
}

export const MainApp = Container;

export default MainApp;
