import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Ink from 'react-ink';
import WOW from 'wowjs';

export default class SideNav extends Component {
	componentDidMount() {
		new WOW.WOW().init();
	}
	render() {
		return (
			<div>
				<div className="sidenav">
		            <div className="navbar-brand mx-lg-2 px-lg-2 mx-md-1 mx-sm-4 mx-xs-3 px-lg-1 my-3">
		            <Link to="/">
		            	<img className="img-fluid" src={require('../icon/logo.svg')} />
		            </Link>
		            </div>
		            <div className="menu text-primary text-center mt-md-4">
		            	<NavLink to="/database" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-3 demo-icon icon-database">&#xe80e;</i>
		            	</NavLink>
		            </div>
		            <div className="menu text-primary text-center">
		            	<NavLink to="/people" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-3 demo-icon icon-male-fe">&#xe80d;</i>
		            	</NavLink>
		            </div>
		            <div className="menu text-primary text-center">
			            <NavLink to="/eventcalendar" activeClassName="active">
				            <Ink/>
				            <i class=" py-3 demo-icon icon-date">&#xe807;</i>
			            </NavLink>
		            </div>
		            <div className="menu text-primary text-center">
			            <NavLink to="/document" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-3 demo-icon icon-paper">&#xe804;</i>
			            </NavLink>
		            </div>
		            <div className="menu text-primary text-center">
			           	<NavLink to="/chat" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-3 demo-icon icon-chat">&#xe805;</i>
			            </NavLink>
		            </div>
		            <div className="menu text-primary text-center">
			           	<NavLink to="/setting" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-4 demo-icon icon-setting">&#xe80a;</i>
			            </NavLink>
		            </div>
		          </div>
			</div>
		);
	}
}
