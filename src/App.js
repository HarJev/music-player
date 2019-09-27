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
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }

  state = {
    user: { ...UserDatabase },
    music: { ...SongDatabase },
    activePage: 'home',
    selectedTrack: {
      id: '0',
      title: '',
      artist: '',
      feat: [],
      album: '',
      length: 0,
      albumArt: 'profile_picture.png',
      track: 'driptoohard.mp3',
    },
    playing: false,
  };

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

  handlePageChange = page => {
    this.setState({ activePage: page });
    this.props.history.push(`/${page}`);
  };

  playTrack = song => {
    this.setState({ selectedTrack: { ...song } });

    // this.playerRef.src = `assets/music/${song.track}`;
    // this.playerRef.load();
  };

  render() {
    console.log(this.playerRef.paused);
    return (
      <div className="App">
        <SideBar
          className="Right_sidebar"
          handlePageChange={this.handlePageChange}
          {...this.state}
        />
        {/* <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={LandingPage} />
        </Switch> */}
        <div className="Main">
          <div className="Main_top">
            <MainApp
              className="Main_app"
              {...this.state}
              playerRef={this.playerRef}
              formatTime={this.formatTime}
              playTrack={this.playTrack}
            />
            <Rightbar
              className="Right_sidebar"
              name={
                this.state.user.profile.name.firstName +
                ' ' +
                this.state.user.profile.name.lastName
              }
            />
          </div>
          <Controls
            className="controls"
            {...this.state}
            playerRef={this.playerRef}
            formatTime={this.formatTime}
          />
        </div>
      </div>
    );
  }
}

export default hot(withRouter(App));
