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
				<div className="wow slideInLeft sidenav">
		            <div className="navbar-brand mx-lg-4 mx-md-3 mx-sm-4 mx-xs-3 px-lg-2 my-4">
		            <Link to="/">
		            	<img className="img-fluid" src={require('../icon/logo.svg')} />
		            </Link>
		            </div>
		            <div className="wow fadeInLeft menu text-primary text-center mt-md-4" data-wow-delay="0.6s">
		            	<NavLink to="/database" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-4 demo-icon icon-database fa-lg">&#xe80e;</i>
		            	</NavLink>
		            </div>
		            <div className="wow fadeInLeft menu text-primary text-center" data-wow-delay="0.9s">
		            	<NavLink to="/people" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-4 demo-icon icon-male-fe fa-lg">&#xe80d;</i>
		            	</NavLink>
		            </div>
		            <div className="wow fadeInLeft menu text-primary text-center" data-wow-delay="1.2s">
			            <NavLink to="/eventcalendar" activeClassName="active">
				            <Ink/>
				            <i class=" py-4 demo-icon icon-date fa-lg">&#xe807;</i>
			            </NavLink>
		            </div>
		            <div className="wow fadeInLeft menu text-primary text-center" data-wow-delay="1.5s">
			            <NavLink to="/document" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-4 demo-icon icon-paper fa-lg">&#xe804;</i>
			            </NavLink>
		            </div>
		            <div className="wow fadeInLeft menu text-primary text-center" data-wow-delay="1.8s">
			           	<NavLink to="/chat" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-4 demo-icon icon-chat fa-lg">&#xe805;</i>
			            </NavLink>
		            </div>
		            <div className="wow fadeInLeft menu text-primary text-center" data-wow-delay="1.8s">
			           	<NavLink to="/setting" activeClassName="active">
			            	<Ink/>
			            	<i class=" py-4 demo-icon icon-setting fa-lg">&#xe80a;</i>
			            </NavLink>
		            </div>
		          </div>
			</div>
		);
	}
}
