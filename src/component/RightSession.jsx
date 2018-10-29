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
						<div className="col-5">
							<div className="bg-yellow text-light rounded text-center shadow">
								<h2 className="px-1 py-2"><Ink/>C</h2>
							</div>
						</div>
						<div className="col-7">
							<h4>Calendar</h4>
							<h5 className="text-disable">02 March</h5>
						</div>
						<Calendar/>
						<div className="text-left mt-3">
							<h4 className="text-disable">ACCOUNTS</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
