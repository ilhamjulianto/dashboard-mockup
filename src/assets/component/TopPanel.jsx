import React, { Component } from 'react';
import './TopPanel.css';
import Ink from 'react-ink';
import { Link } from 'react-router-dom';

export default class TopPanel extends Component {
	render() {
		return (
			<nav className="wow slideInDown topbar fixed-top navbar-inverse w-auto" data-wow-delay="0.3s">
				<div className="container-fluid my-2 py-3 px-md-5">
					<div className="d-flex align-items-center justify-content-between flex-md-row flex-sm-row bd-highlight">
						<div className="d-flex justify-content-between align-items-center bd-highlight order-sm-2 order-md-1">
								<div className="bd-highlight mr-3">
						            <Link to="/">
						            	<img className="img-fluid logo" src={require('../icon/logo.svg')} style={{width: '50px', height: '50px'}}/>
						            </Link>
					            </div>
								<div className="bd-highlight">
									<i class="text-disable demo-icon icon-search fa-lg" style={{cursor: 'pointer'}}>&#xe80c;</i>
								</div>
								<div className="bd-highlight">
									<input className='bd-highlight ml-3 border-0 input' type="text" placeholder="Find a user, team, meeting..." />
								</div>
								
						</div>
						<div className="d-flex flex-md-row flex-sm-row align-items-center justify-content-between bd-highlight mb-md-0 mb-sm-0 order-sm-2 order-md-1">
							
						      	<div className="order-md-1 order-sm-1 bd-highlight btn btn-outline-primary-smooth" style={{position: 'relative'}}>
						      		<Ink/><i class="demo-icon icon-telegram-plane">&#xe80f;</i>&nbsp;&nbsp;Invite
						      	</div>
						      	<img className="order-md-2 order-sm-2 bd-highlight ml-4 mr-md-4 rounded-circle mb-md-0 mb-sm-0" width="60px" height="60px" src={require('../img/salam.jpg')} />
						    
					    </div>
					</div>
				</div>
			</nav>
		);
	}
}
