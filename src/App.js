import React, { Component } from 'react';
import './App.css';
import SideNav from './assets/component/SideNav';
import TopPanel from './assets/component/TopPanel';
import ContentDay from './assets/component/ContentDay';
import ContentWeek from './assets/component/ContentWeek';
import ContentMonth from './assets/component/ContentMonth';
import Index from './assets/component/Index';
import EventCalendar from './assets/component/EventCalendar';
import Database from './assets/component/Database';
import People from './assets/component/People';
import Document from './assets/component/Document';
import Chat from './assets/component/Chat';
import Setting from './assets/component/Setting';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Ink from 'react-ink';
import WOW from 'wowjs';

class App extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <SideNav/>
        <TopPanel/>
        <Switch>
          <Route path="/" component={Index} exact/>
          <Route path="/eventcalendar" component={EventCalendar}/>
          <Route path="/eventcalendar/week" component={ContentWeek}/>
          <Route path="/database" component={Database}/>
          <Route path="/people" component={People}/>
          <Route path="/document" component={Document}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/setting" component={Setting}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
