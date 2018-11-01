import React, { Component } from 'react';
import './Content.css';
import { Link } from 'react-router-dom';
import Ink from 'react-ink';
import RightSession from './RightSession';

export default class ContentDay extends Component {
	alert() {
		alert('Maaf, button belum berfungsi');
	}
	render() {
		return (
			<div className="masthead">
				<div className="row m-0">
					<div className="col-md-12 col-lg-10 m-0 p-0">
						<div className="mx-5 px-5 mt-md-0 mt-sm-5 pt-md-0 pt-sm-5">
							<div className="d-flex flex-md-row flex-sm-column bd-highlight py-5" style={{justifyContent: 'space-between'}}>
								<div className="d-flex m-md-0 justify-content-sm-center mb-sm-5">
									<h1 className="title">Meetings</h1>
									<button className="ml-3 btn btn-primary" style={{position: 'relative'}}><i class="fas fa-plus"></i>&nbsp;&nbsp;Create new</button>
								</div>
								<div className="d-flex bg-gray p-2 rounded" style={{justifyContent: 'space-around'}}>
									<Link to="/eventcalendar/">
										<button className="btn px-3 py-1 bg-gray" style={{color: 'gray'}}>Day</button>
									</Link>
									<Link to="/eventcalendar/week">
									<button className="btn px-3 py-1 bg-gray" style={{color: 'gray'}}>Week</button>
									</Link>
										<button className="btn px-3 py-1 btn-light-mat hover-shadow shadow-md">Month</button>
								</div>
							</div>
						<div className="row">
							<div className="wow slideInUp col-md-4 col-sm-12 mb-sm-5" data-wow-delay="0.3s">
								<div className="card rounded-lg shadow-md hover-shadow border-0 p-4">
									<div className="card-title p-2">
										<h3 style={{fontWeight: 'bold'}}>Month 1</h3>
										<h5 className="mt-3">02<small>nd</small> Thursday</h5>
										<div className="progress mt-3 mb-5" style={{height: '8px'}}>
											<div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="card rounded-lg mt-5">
											<div className="card-body">
												<label className="text-disable roboto">11:00 AM - 11:30 AM</label>
												<h5 className="mt-3 roboto">Inspiration gathering</h5>
												<div className="row mt-4">
													<div className="col-7 text-left mt-2">
														<div className="btn shadow-sm m-1 btn-outline-primary-smooth text-sm">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm m-1 btn-primary-smooth text-sm">
															AM
														</div>
														<div className="btn shadow-sm m-1 btn-warning-smooth text-sm">
															ES
														</div>
													</div>
													<div className="col-5 text-right text-sm">
														<i class="fa fa-paperclip text-primary mt-4"></i>&nbsp;&nbsp; 10 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded-lg mt-3 border-0 bg-primary-smooth">
											<div className="card-body text-white">
												<label className="text-disable text-white roboto">11:00 AM - 11:30 AM</label>
												<h5 className="mt-3 roboto">Sketching</h5>
												<div className="row mt-4">
													<div className="col-7 text-left mt-2">
														<div className="btn shadow-sm m-1 btn-outline-light text-sm">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>&nbsp;&nbsp;<i class="fas fa-plus"></i>
														</div>
														<div className="btn shadow-sm m-1 btn-light-smooth text-sm">
															AM
														</div>
														<div className="btn shadow-sm m-1 btn-light-smooth text-sm">
															ES
														</div>
													</div>
													<div className="col-5 text-right text-sm">
														<i class="fa fa-paperclip text-light mt-4"></i>&nbsp;&nbsp; 3 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded-lg mt-3">
											<div className="card-body">
												<label className="text-disable roboto">11:00 AM - 11:30 AM</label>
												<h5 className="mt-3 roboto">Hikoot app Wireframes</h5>
												<div className="row mt-4">
													<div className="col-7 text-left mt-2">
														<div className="btn shadow-sm m-1 btn-outline-primary-smooth text-sm">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm m-1 btn-danger-smooth text-sm">
															LA
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="wow slideInUp col-md-4 col-sm-12 mb-sm-5" data-wow-delay="0.6s">
								<div className="card rounded-lg shadow-md hover-shadow border-0 p-4">
									<div className="card-title p-2">
										<h3 style={{fontWeight: 'bold'}}>Month 2</h3>
										<h5 className="mt-3">03<small>rd</small> Thursday</h5>
										<div className="progress mt-3 mb-5" style={{height: '8px'}}>
											<div className="progress-bar" role="progressbar" style={{width: '15%', backgroundColor: '#D1D1D1'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="card rounded-lg mt-5">
											<div className="card-body">
												<label className="text-disable roboto">11:00 AM - 11:30 AM</label>
												<h5 className="mt-3 roboto">Website for the Product</h5>
												<div className="row mt-4">
													<div className="col-7 text-left mt-2">
														<div className="btn shadow-sm m-1 btn-outline-primary-smooth text-sm">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm m-1 btn-primary-smooth text-sm">
															AM
														</div>
														<div className="btn shadow-sm m-1 btn-warning-smooth text-sm">
															ES
														</div>
													</div>
													<div className="col-5 text-right text-sm">
														<i class="fa fa-paperclip text-primary mt-4"></i>&nbsp;&nbsp; 10 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded-lg mt-3 border">
											<div className="card-body">
												<label className="text-disable roboto">11:00 AM - 11:30 AM</label>
												<h5 className="mt-3 roboto">Hey you guys we need to do this and that too <span role="img" aria-label="image">&#9996;</span> </h5>
												<div className="row mt-4">
													<div className="col-8 text-left mt-2">
														<div className="btn shadow-sm m-1 btn-outline-primary-smooth text-am text-sm">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm m-1 btn-danger-smooth text-sm">
															LA
														</div>
														<div className="btn shadow-sm m-1 btn-primary-smooth text-sm">
															AM
														</div>
														<div className="btn shadow-sm m-1 btn-lavender-smooth text-sm">
															FS
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="wow slideInUp col-md-4 col-sm-12 mb-sm-5" data-wow-delay="0.9s">
								<div className="card rounded-lg shadow-md hover-shadow border-0 p-4">
									<div className="card-title p-2">
										<h3 style={{fontWeight: 'bold'}}>Month 3</h3>
										<h5 className="mt-3">06<small>th</small> Monday</h5>
										<div className="progress mt-3 mb-5" style={{height: '8px'}}>
											<div className="progress-bar" role="progressbar" style={{width: '17%', backgroundColor: '#D1D1D1'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="card rounded-lg mt-5">
											<div className="card-body">
												<label className="text-disable roboto">09:50 AM - 13:25 AM</label>
												<h5 className="mt-3 roboto">Start usability testing</h5>
												<div className="row mt-4">
													<div className="col-7 text-left mt-2">
														<div className="btn shadow-sm m-1 btn-outline-primary-smooth text-sm">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm m-1 btn-primary-smooth text-sm">
															TX
														</div>
														<div className="btn shadow-sm m-1 btn-warning-smooth text-sm">
															ES
														</div>
													</div>
													<div className="col-5 text-right text-sm">
														<i class="fa fa-paperclip text-primary mt-4"></i>&nbsp;&nbsp; 10 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded-lg mt-3 border">
											<div className="card-body">
												<label className="text-disable roboto">04:00 AM - 16:30 AM</label>
												<h5 className="mt-3 roboto">Open discussion</h5>
												<div className="row mt-4">
													<div className="col-8 text-left mt-2">
														<div className="btn shadow-sm m-1 btn-outline-primary-smooth text-am text-sm">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm m-1 btn-danger-smooth text-sm">
															LA
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded-lg mt-3 border">
											<div className="card-body">
												<label className="text-disable roboto">16:35 AM - 17:00 AM</label>
												<div className="d-flex" style={{justifyContent: 'space-between'}}>
													<h5 className="mt-3 roboto">Daily report</h5>
													<i class="fa fa-paperclip text-primary mt-4" style={{transform: 'rotate(-45deg)', cursor: 'pointer'}}></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="progress mt-3 mb-5" style={{height: '8px'}}>
									<div className="progress-bar" role="progressbar" style={{width: '8%', backgroundColor: '#D1D1D1'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
						</div>
					</div>
					<div className="wow slideInRight col-md-12 col-lg-2 m-0 p-0">
						<RightSession/>
					</div>
				</div>
			</div>
		);
	}
}
