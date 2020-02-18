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
import RadioDatabase from './assets/stubs/radio.json';

import './App.css';

class App extends React.Component {
  state = {
    user: { ...UserDatabase },
    music: { ...SongDatabase },
    radio: { ...RadioDatabase },
    activePage: 'home',
    selectedTrack: {
      id: '0',
      title: '',
      artist: '',
      feat: [],
      album: '',
      length: 0,
      albumArt: 'profile_picture.png',
      track: '',
    },
    playing: false,
    currentTime: 0,
    currentTimePercentage: 0,
    currentPlaylist: [],
    volume: 100,
  };

  componentDidMount() {
    this.playerRef.addEventListener('timeupdate', e => {
      this.setState({
        currentTime: e.target.currentTime,
        currentTimePercentage:
          (e.target.currentTime / this.state.selectedTrack.length) * 100,
      });
      if (
        (e.target.currentTime / this.state.selectedTrack.length) * 100 >=
        100
      ) {
        if (this.state.currentPlaylist.length >= 1 && !this.state.selectedTrack.radio) {
          this.handleSkip('next');
        }
      }
    });
  }

  componentWillUnmount() {
    this.playerRef.removeEventListener('timeupdate', () => { });
  }

  pushToPlaylist = list => {
    if (this.state.currentPlaylist === list || this.state.playing) {
      return;
    }
    this.setState(
      {
        currentPlaylist: list,
      },
      () => console.log('hey', this.state.currentPlaylist)
    );
  };

  handleSkip = direction => {
    if (this.state.selectedTrack.radio) {
      return;
    }
    if (direction === 'next') {
      const currentTrackIndex = this.state.currentPlaylist.findIndex(
        song => song.id === this.state.selectedTrack.id
      );
      console.log('currentTrackIndex', currentTrackIndex);
      let nextTrackIndex;
      if (currentTrackIndex === this.state.currentPlaylist.length - 1) {
        nextTrackIndex = 0;
      } else {
        nextTrackIndex = currentTrackIndex + 1;
      }
      console.log('nextTrackIndex', nextTrackIndex);
      console.log(
        'this.state.currentPlaylist',
        this.state.currentPlaylist[nextTrackIndex]
      );
      this.playerRef.src = require(`assets/music/${this.state.currentPlaylist[nextTrackIndex].track}`);
      this.playerRef.play();
      this.setState({
        selectedTrack: this.state.currentPlaylist[nextTrackIndex],
      });
    }
    if (direction === 'previous') {
      if (this.state.currentTime > 5) {
        this.playerRef.currentTime = 0;
      } else {
        const currentTrackIndex = this.state.currentPlaylist.findIndex(
          song => song.id === this.state.selectedTrack.id
        );
        console.log('currentTrackIndex', currentTrackIndex);
        let previousTrackIndex;
        if (currentTrackIndex === 0) {
          previousTrackIndex = 0;
        } else {
          previousTrackIndex = currentTrackIndex - 1;
        }
        console.log('previousTrackIndex', previousTrackIndex);
        console.log(
          'this.state.currentPlaylist',
          this.state.currentPlaylist[previousTrackIndex]
        );
        this.playerRef.src = require(`assets/music/${this.state.currentPlaylist[previousTrackIndex].track}`);
        this.playerRef.play();
        this.setState({
          selectedTrack: this.state.currentPlaylist[previousTrackIndex],
        });
      }
    }
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

  handlePlayPause = () => {
    if (this.state.selectedTrack.id === '0') {
      return;
    }

    if (this.state.selectedTrack.radio) {
      if (this.state.playing) {
        this.playerRef.pause();
        this.setState({ playing: false });
        return;
      }
      else {
        this.playerRef.src = this.state.selectedTrack.track;
        this.playerRef.play();
        this.setState({ playing: true });
        return;
      }
    }

    this.setState({ playing: !this.state.playing }, () => {
      if (this.state.playing) {
        this.playerRef.play();
      } else {
        this.playerRef.pause();
      }
    });
  };

  playTrack = song => {
    if (song.radio) {
      if (this.state.playing) {
        this.playerRef.pause();
        this.setState({ playing: false });
        return;
      }
      else {
        this.playerRef.src = song.track;
        this.playerRef.play();
        this.setState({ playing: true });
        this.setState({ selectedTrack: { ...song } });
        return;
      }
    }
    if (
      this.state.playing === false &&
      this.state.selectedTrack.id !== song.id
    ) {
      this.playerRef.src = require(`assets/music/${song.track}`);
      this.playerRef.play();

      this.setState({ selectedTrack: { ...song }, playing: true });
    } else if (
      this.state.playing === false &&
      this.state.selectedTrack.id === song.id
    ) {
      this.playerRef.play();
      this.setState({ playing: true });
    } else if (
      this.state.playing === true &&
      this.state.selectedTrack.id !== song.id
    ) {
      this.playerRef.src = require(`assets/music/${song.track}`);
      this.playerRef.play();
      this.setState({ selectedTrack: { ...song } });
    } else if (
      this.state.playing === true &&
      this.state.selectedTrack.id === song.id
    ) {
      this.playerRef.pause();
      this.setState({ playing: false });
    }
  };

  handleVolumeChange = (event, volume) => {
    this.playerRef.volume = volume / 100;
    this.setState({ volume: volume });
  };

  handleTimeChange = (event, time) => {
    this.playerRef.currentTime = (time / 100) * this.state.selectedTrack.length;
  };

  render() {
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
              pushToPlaylist={this.pushToPlaylist}
              likedSongs={this.likedSongs}
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
            handlePlayPause={this.handlePlayPause}
            handleSkip={this.handleSkip}
            handleVolumeChange={this.handleVolumeChange}
            handleTimeChange={this.handleTimeChange}
          />
        </div>
        <audio ref={ref => (this.playerRef = ref)} />
      </div>
    );
  }
}

export default hot(withRouter(App));
