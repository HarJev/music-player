import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { LandingPage } from './components/pages/LandingPage';
import { SideBar } from './components/common/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        {/* <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={LandingPage} />
        </Switch> */}
      </div>
    );
  }
}

export default withRouter(App);
