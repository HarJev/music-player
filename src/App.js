import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { LandingPage } from './components/pages/LandingPage';
import { SideBar } from './components/common/Sidebar';

import './App.css';

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
            <div className="Left_sidebar"></div>
          </div>
          <div className="controls"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
