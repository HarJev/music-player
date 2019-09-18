import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { LandingPage } from './components/pages/LandingPage';
import { SideBar } from './components/common/Sidebar';
import { Controls } from './components/common/Controls';
import { Rightbar } from './components/common/RightBar';
import { MainApp } from './components/common/MainApp';
import UserDatabase from './assets/stubs/profile.json';
import SongDatabase from './assets/stubs/songs.json';

import './App.css';

class App extends React.Component {
  state = {
    user: { ...UserDatabase },
    music: { ...SongDatabase },
  };
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
            <MainApp className="Main_app" {...this.state} />
            <Rightbar
              className="Right_sidebar"
              name={
                this.state.user.profile.name.firstName +
                ' ' +
                this.state.user.profile.name.lastName
              }
            />
          </div>
          <Controls className="controls" {...this.state} />
        </div>
      </div>
    );
  }
}

export default hot(withRouter(App));
