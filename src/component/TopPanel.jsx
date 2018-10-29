import React, { Component } from 'react';
import './TopPanel.css';
import Ink from 'react-ink';

export default class TopPanel extends Component {
	render() {
		return (
			<nav className="topbar fixed-top navbar-inverse w-auto">
				<div className="container-fluid my-2 py-3 px-5">
					<div className="d-flex align-items-center justify-content-between flex-md-row flex-sm-column bd-highlight">
						<div className="d-flex justify-content-between bd-highlight order-sm-2 order-md-1">
								<div className="bd-highlight">
									<i class="text-disable demo-icon icon-search fa-lg" style={{cursor: 'pointer'}}>&#xe80c;</i>
								</div>
								<div className="bd-highlight">
									<input className="bd-highlight ml-3 border-0 w-100" type="text" placeholder="Find a user, team, meeting..." />
								</div>
								
						</div>
						<div className="d-flex flex-md-row flex-sm-column align-items-center justify-content-between bd-highlight mb-md-0 mb-sm-3 order-sm-1 order-md-2">
							
						      	<div className="order-md-1 order-sm-2 bd-highlight btn btn-outline-primary shadow" style={{position: 'relative'}}>
						      		<Ink/><i class="demo-icon icon-telegram-plane">&#xe80f;</i>&nbsp;&nbsp;Invite
						      	</div>
						      	<img className="order-md-2 order-sm-1 bd-highlight ml-4 mr-4 rounded-circle mb-md-0 mb-sm-3" width="60px" height="60px" src={require('../img/salam.jpg')} />
						    
					    </div>
					</div>
				</div>
			</nav>
		);
	}
}
