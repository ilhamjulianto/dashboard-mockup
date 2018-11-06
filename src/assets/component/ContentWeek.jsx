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
				<div className="wow fadeIn row m-0" data-wow-delay="0.3s">
					<div className="col-md-12 col-lg-12 col-xl-10 m-0 p-0">
						<div className="mx-3 px-4 mt-md-0 mt-sm-3 pt-md-0 pt-sm-3">
							<div className="d-flex flex-md-row flex-sm-column heading bd-highlight mt-5 mb-4" style={{justifyContent: 'space-between'}}>
								<div className="d-flex m-md-0 justify-content-sm-center align-items-center mb-sm-5">
									<h3 className="title">Meetings</h3>
									<button className="ml-3 h7 btn rounded btn-primary" style={{position: 'relative'}} onClick={this.alert}>+&nbsp;&nbsp;Create new</button>
								</div>
								<div className="d-flex bg-gray p-1-set rounded" style={{justifyContent: 'space-around'}}>
									<Link to="/eventcalendar/">
										<button className="btn px-3 h7 p-1-set bg-gray" style={{color: 'gray'}}>Day</button>
									</Link>
										<button className="btn px-3 p-1-set btn-light-mat h7 hover-shadow shadow-md">Week</button>
									<Link to="/eventcalendar/month">
										<button className="btn px-3 h7 p-1-set bg-gray" style={{color: 'gray'}}>Month</button>
									</Link>
								</div>
							</div>
							<div className="body">
						<section className="scroll-new">
							<div className="wow slideInUp content--scroll" wow-data-delay="0.3s">
								<div className="card rounded shadow-md hover-shadow border-0 p-3">
									<div className="card-title p-2">
										<h5 className="mb-2" style={{fontWeight: 'bold'}}>Week 1</h5>
										<h6>02<small>nd</small> Thursday</h6>
										<div className="progress mt-3 mb-3" style={{height: '4px'}}>
											<div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="card rounded mt-4">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">11:00 AM - 11:30 AM</label>
												<p className="mt-1 roboto roboto-md">Inspiration gathering</p>
												<div className="d-flex justify-content-between mt-1 align-items-center">
													<div className="text-left mt-1 d-flex justify-content-md-around align-items-center">
														<div className="shadow-sm rounded text-center btn btn-outline-primary-smooth font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="shadow-sm rounded text-center btn btn-primary-smooth font-md py-1 px-2 mr-1">
															AM
														</div>
														<div className="shadow-sm rounded text-center btn btn-warning-smooth font-md py-1 px-2 mr-1">
															ES
														</div>
													</div>
													<div className="text-right font-md">
														<i class="fa fa-paperclip text-primary mt-2"></i>&nbsp;&nbsp; 10 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3 border-0 bg-primary-smooth">
											<div className="card-body text-white p-3">
												<label className="text-disable text-white roboto-sm">11:00 AM - 11:30 AM</label>
												<h6 className="mt-1 roboto roboto-md">Sketching</h6>
												<div className="d-flex justify-content-between mt-1 align-items-center">
													<div className="text-left mt-2">
														<div className="btn shadow-sm m-1 btn-outline-light font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>&nbsp;&nbsp;+
														</div>
														<div className="shadow-sm rounded btn btn-light-smooth font-md p-1 px-2 mr-1">
															AM
														</div>
														<div className="shadow-sm rounded btn btn-light-smooth font-md p-1 px-2 mr-1">
															ES
														</div>
													</div>
													<div className="text-right font-md">
														<i class="fa fa-paperclip text-light mt-2"></i>&nbsp;&nbsp; 3 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">11:00 AM - 11:30 AM</label>
												<h6 className="mt-1 roboto-md">Hikoot app Wireframes</h6>
												<div className="d-flex justify-content-start mt-1 align-items-center">
													<div className="text-left mt-1">
														<div className="btn shadow-sm m-1 btn-outline-primary-smooth font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm m-1 btn-danger-smooth font-md">
															LA
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<h6 className="mx-3
									 mt-2" style={{fontWeight: 'bold'}}>03<small>rd</small> Thursday</h6>
								</div>
							</div>
							<div className="wow slideInUp content--scroll" data-wow-delay="0.6s">
								<div className="card rounded shadow-md hover-shadow border-0 p-3">
									<div className="card-title p-2">
										<h5 className="mb-2 text-disable" style={{fontWeight: 'bold'}}>Week 2</h5>
										<h6>06<small>th</small> Monday</h6>
										<div className="progress mt-3 mb-3" style={{height: '4px'}}>
											<div className="progress-bar" role="progressbar" style={{width: '17%', backgroundColor: '#D1D1D1'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="card rounded mt-4">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">09:50 AM - 13:25 AM</label>
												<p className="mt-1 roboto-md">Start usability testing</p>
												<div className=" d-flex justify-content-between mt-1 align-items-center">
													<div className="text-left mt-2">
														<div className="btn shadow-sm btn-outline-primary-smooth font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm btn-primary-smooth font-md py-1 px-2 mr-1">
															TX
														</div>
														<div className="btn shadow-sm btn-warning-smooth font-md py-1 px-2 mr-1">
															ES
														</div>
													</div>
													<div className="text-right font-md">
														<i class="fa fa-paperclip text-primary mt-2"></i>&nbsp;&nbsp; 10 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3 border">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">04:00 AM - 16:30 AM</label>
												<p className="mt-1 roboto-md">Open discussion</p>
												<div className=" d-flex justify-content-between align-items-center mt-1">
													<div className="text-left mt-2">
														<div className="btn shadow-sm btn-outline-primary-smooth text-am font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm btn-danger-smooth font-md py-1 px-2 mr-1">
															LA
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3 border">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">16:35 AM - 17:00 AM</label>
												<div className="d-flex" style={{justifyContent: 'space-between'}}>
													<p className="mt-1 roboto-md">Daily report</p>
													<i class="fa fa-paperclip text-primary mt-2" style={{transform: 'rotate(-45deg)', cursor: 'pointer'}}></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="wow slideInUp content--scroll" data-wow-delay="0.9s">
								<div className="card rounded shadow-md hover-shadow border-0 p-3">
									<div className="card-title p-2">
										<h5 className="mb-2 text-disable" style={{fontWeight: 'bold'}}>Week 2</h5>
										<h6>06<small>th</small> Monday</h6>
										<div className="progress mt-3 mb-3" style={{height: '4px'}}>
											<div className="progress-bar" role="progressbar" style={{width: '17%', backgroundColor: '#D1D1D1'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="card rounded mt-4">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">09:50 AM - 13:25 AM</label>
												<p className="mt-1 roboto-md">Start usability testing</p>
												<div className=" d-flex justify-content-between mt-1 align-items-center">
													<div className="text-left mt-2">
														<div className="btn shadow-sm btn-outline-primary-smooth font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm btn-primary-smooth font-md py-1 px-2 mr-1">
															TX
														</div>
														<div className="btn shadow-sm btn-warning-smooth font-md py-1 px-2 mr-1">
															ES
														</div>
													</div>
													<div className="text-right font-md">
														<i class="fa fa-paperclip text-primary mt-2"></i>&nbsp;&nbsp; 10 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3 border">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">04:00 AM - 16:30 AM</label>
												<p className="mt-1 roboto-md">Open discussion</p>
												<div className=" d-flex justify-content-between align-items-center mt-1">
													<div className="text-left mt-2">
														<div className="btn shadow-sm btn-outline-primary-smooth text-am font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm btn-danger-smooth font-md py-1 px-2 mr-1">
															LA
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3 border">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">16:35 AM - 17:00 AM</label>
												<div className="d-flex" style={{justifyContent: 'space-between'}}>
													<p className="mt-1 roboto-md">Daily report</p>
													<i class="fa fa-paperclip text-primary mt-2" style={{transform: 'rotate(-45deg)', cursor: 'pointer'}}></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="wow slideInUp content--scroll" data-wow-delay="0.9s">
								<div className="card rounded shadow-md hover-shadow border-0 p-3">
									<div className="card-title p-2">
										<h5 className="mb-2 text-disable" style={{fontWeight: 'bold'}}>Week 3</h5>
										<h6>06<small>th</small> Monday</h6>
										<div className="progress mt-3 mb-3" style={{height: '4px'}}>
											<div className="progress-bar" role="progressbar" style={{width: '17%', backgroundColor: '#D1D1D1'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="card rounded mt-4">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">09:50 AM - 13:25 AM</label>
												<p className="mt-1 roboto-md">Start usability testing</p>
												<div className=" d-flex justify-content-between mt-1 align-items-center">
													<div className="text-left mt-2">
														<div className="btn shadow-sm btn-outline-primary-smooth font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm btn-primary-smooth font-md py-1 px-2 mr-1">
															TX
														</div>
														<div className="btn shadow-sm btn-warning-smooth font-md py-1 px-2 mr-1">
															ES
														</div>
													</div>
													<div className="text-right font-md">
														<i class="fa fa-paperclip text-primary mt-2"></i>&nbsp;&nbsp; 10 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3 border">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">04:00 AM - 16:30 AM</label>
												<p className="mt-1 roboto-md">Open discussion</p>
												<div className=" d-flex justify-content-between align-items-center mt-1">
													<div className="text-left mt-2">
														<div className="btn shadow-sm btn-outline-primary-smooth text-am font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm btn-danger-smooth font-md py-1 px-2 mr-1">
															LA
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3 border">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">16:35 AM - 17:00 AM</label>
												<div className="d-flex" style={{justifyContent: 'space-between'}}>
													<p className="mt-1 roboto-md">Daily report</p>
													<i class="fa fa-paperclip text-primary mt-2" style={{transform: 'rotate(-45deg)', cursor: 'pointer'}}></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="wow slideInUp content--scroll" data-wow-delay="0.9s">
								<div className="card rounded shadow-md hover-shadow border-0 p-3">
									<div className="card-title p-2">
										<h5 className="mb-2 text-disable" style={{fontWeight: 'bold'}}>Week 3</h5>
										<h6>06<small>th</small> Monday</h6>
										<div className="progress mt-3 mb-3" style={{height: '4px'}}>
											<div className="progress-bar" role="progressbar" style={{width: '17%', backgroundColor: '#D1D1D1'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="card rounded mt-4">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">09:50 AM - 13:25 AM</label>
												<p className="mt-1 roboto-md">Start usability testing</p>
												<div className=" d-flex justify-content-between mt-1 align-items-center">
													<div className="text-left mt-2">
														<div className="btn shadow-sm btn-outline-primary-smooth font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm btn-primary-smooth font-md py-1 px-2 mr-1">
															TX
														</div>
														<div className="btn shadow-sm btn-warning-smooth font-md py-1 px-2 mr-1">
															ES
														</div>
													</div>
													<div className="text-right font-md">
														<i class="fa fa-paperclip text-primary mt-2"></i>&nbsp;&nbsp; 10 attachements
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3 border">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">04:00 AM - 16:30 AM</label>
												<p className="mt-1 roboto-md">Open discussion</p>
												<div className=" d-flex justify-content-between align-items-center mt-1">
													<div className="text-left mt-2">
														<div className="btn shadow-sm btn-outline-primary-smooth text-am font-md py-1 px-2 mr-1">
															<i class="demo-icon icon-telegram-plane" style={{fontWeight: 'bold'}}>&#xe80f;</i>
														</div>
														<div className="btn shadow-sm btn-danger-smooth font-md py-1 px-2 mr-1">
															LA
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="card rounded mt-3 border">
											<div className="card-body p-3">
												<label className="text-disable roboto-sm">16:35 AM - 17:00 AM</label>
												<div className="d-flex" style={{justifyContent: 'space-between'}}>
													<p className="mt-1 roboto-md">Daily report</p>
													<i class="fa fa-paperclip text-primary mt-2" style={{transform: 'rotate(-45deg)', cursor: 'pointer'}}></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						</div>
					</div>
				</div>
				<div className="wow slideInRight col-md-12 col-lg-12 col-xl-2 m-0 p-0">
							<RightSession/>
						</div>
			</div>
		</div>
		);
	}
}
