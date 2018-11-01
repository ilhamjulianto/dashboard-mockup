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
					<div className="row my-4 px-4 py-3">
						<div className="col-lg-5 col-sm-12 col-md-12">
							<div className="mx-md-auto bg-yellow text-light rounded text-center shadow">
								<h1 className="py-3"><Ink/><i class="demo-icon icon-calendar">&#xe808;</i></h1>
							</div>
						</div>
						<div className="col-lg-7 col-md-12 col-sm-12 text-lg-left text-md-center text-sm-center mt-md-3 mt-sm-3">
							<h3>Calendar</h3>
							<h4 className="text-disable">02 March</h4>
						</div>
						<Calendar/>
						<div className="mx-sm-auto mx-md-0 text-left mt-3">
							<h4 className="text-disable letter-spacing text-md-left text-sm-center">ACCOUNTS</h4>
							<div className="d-flex flex-column align-items-sm-center align-items-md-start bd-highlight mt-4 text-md-left text-sm-center">
									<label className="letter-spacing roboto text-dark"><span className="dot dot-primary"></span>&nbsp;&nbsp; adrian.madacs@gmail.com</label>
									<label className="letter-spacing roboto text-dark"><span className="dot dot-danger"></span>&nbsp;&nbsp; ama@umwelt.com</label>
									<div className="d-flex btn btn-outline-primary-smooth mt-3" style={{position: 'relative'}}><Ink/><small><i class="fas fa-plus fa-xs"></i></small>&nbsp;&nbsp;Add Account</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
