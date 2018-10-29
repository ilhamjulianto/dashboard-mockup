import React, { Component } from 'react';
import './App.css';
import TopPanel from './component/TopPanel';
import ContentDay from './component/ContentDay';
import ContentWeek from './component/ContentWeek';
import ContentMonth from './component/ContentMonth';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Ink from 'react-ink';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="sidenav">
            <div className="navbar-brand mx-4 mx-lg-3 px-lg-2 my-4">
              <img className="img-fluid" src={require('./icon/logo.svg')} />
            </div>
            <div className="menu text-primary text-center mt-4 py-4" style={{elevation: 8}}>
              <Ink/>
              <i class="demo-icon icon-database fa-lg">&#xe80e;</i>
            </div>
            <div className="menu text-primary text-center py-4">
              <Ink/>
              <i class="demo-icon icon-male-fe fa-lg">&#xe80d;</i>
            </div>
            <div className="menu text-primary text-center py-4">
              <Ink/>
              <i class="demo-icon icon-date fa-lg">&#xe807;</i>
            </div>
            <div className="menu text-primary text-center py-4">
              <Ink/>
              <i class="demo-icon icon-paper fa-lg">&#xe804;</i>
            </div>
            <div className="menu text-primary text-center py-4">
              <Ink/>
              <i class="demo-icon icon-setting fa-lg">&#xe80a;</i>
            </div>
          </div>
          <TopPanel/>
          <Switch>
            <Route path="/" component={ContentDay} exact />
            <Route path="/week" component={ContentWeek} />
            <Route path="/month" component={ContentMonth} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
