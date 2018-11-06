import React, { Component } from 'react';
import './RightSession.css';
import Ink from 'react-ink';
import Calendar from 'rc-calendar';
import './rc-calendar.css';

export default class RightSession extends Component {
	render() {
		return (
			<div className="rightsession shadow-sm">
				<div className="container">
					<div className="row my-4 px-4">
						<div className="col-lg-5 col-sm-12 col-md-12 col-xs-12 px-1 py-3">
							<div className="bg-yellow text-light rounded text-center shadow">
								<Ink/><i class="demo-icon icon-calendar py-2 fa-2x">&#xe808;</i>
							</div>
						</div>
						<div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 text-lg-left text-md-center text-sm-center mt-md-0 mt-sm-3">
							<div className="mt-md-3 calendar">
								<p className="roboto-md mb-0">Calendar</p>
								<p className="roboto-sm text-disable mt-0">02 March</p>
							</div>
						</div>
						<Calendar/>
						<div className="mx-sm-auto mx-md-0 accounts-tab">
							<p className="text-disable letter-spacing text-md-left text-sm-center roboto-md">ACCOUNTS</p>
							<div className="d-flex flex-column align-items-sm-center align-items-md-start bd-highlight mt-4">
									<label className="letter-spacing roboto-sm text-dark"><span className="dot dot-primary"></span>&nbsp;&nbsp; adrian.madacs@gmail.com</label>
									<label className="letter-spacing roboto-sm text-dark"><span className="dot dot-danger"></span>&nbsp;&nbsp; ama@umwelt.com</label>
									<div className="d-flex justify-content-center btn btn-outline-primary-smooth mt-2 roboto-sm" style={{position: 'relative'}}><Ink/>+&nbsp;&nbsp;Add Account</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
