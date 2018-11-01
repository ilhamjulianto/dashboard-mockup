import React, { Component } from 'react';
import SideNav from './SideNav';
import TopPanel from './TopPanel';
import ContentDay from './ContentDay';
import ContentWeek from './ContentWeek';
import ContentMonth from './ContentMonth';
import Index from './Index';
import Database from './Database';
import People from './People';
import Document from './Document';
import Chat from './Chat';
import Setting from './Setting';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import WOW from 'wowjs';

export default class EventCalendar extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        
          <Switch>
            <Route path="/eventcalendar/" component={ContentDay} exact/>
            <Route path="/eventcalendar/week" component={ContentWeek}/>
            <Route path="/eventcalendar/month" component={ContentMonth}/>
            <Route path="/" component={Index}/>
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
