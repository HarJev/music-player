import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { LandingPage } from './components/pages/LandingPage';
import { SideBar } from './components/common/Sidebar';

import './App.css';
import Controls from './components/common/Controls/container';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SideBar className="Right_sidebar" />
        {/* <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={LandingPage} />
        </Switch> */}
        <div className="Main">
          <div className="Main_top">
            <div className="Main_app"></div>
            <div className="Right_sidebar"></div>
          </div>
          <Controls className="controls" />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
