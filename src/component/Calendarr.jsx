import React, { Component } from 'react';
import 'rc-calendar/assets/index.css';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD HH:mm:ss';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
if(cn) {
	now.locale('zh-cn').utcOffset(8);
} else {
	now.locale('en-gb').utcOffset(0);
}

function getFormat(time) {
	return time ? format : 'YYYY-MM-DD';
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = <TimePickerPanel defaultValue={moment('00:00:00', 'HH:mm:ss')}/>;

function disableTime(date) {
	console.log('disableTime', date);
	if(date && (date.date() === 15)) {
		return {
			disableHours() {
				return [3, 4];
			},
		};
	}
	return {
		disableHours() {
			return [1, 2];
		},
	};
}

function disableDate(current) {
	if(!current) {
		// allow empty select
		return false;
	}
	const date = moment();
	date.hour(0);
	date.minute(0);
	date.second(0);
	return current.valueOf() < date.valueOf();
}

export default class Calendarr extends React {
	static propTypes = {
		defaultValue: PropTypes.object,
		defaultCalendarValue: PropTypes.object,
	}
	constructor(props){
		super(props);

		this.state = {
			showTime: true,
			showDateInput: true,
			disable: false,
			value: props.defaultValue,
		};
	}

	onChange = (value) => {
		console.log('DatePicker change: ', (value && value.format(format)));
		this.setState ({
			value,
		});
	}

onShowTimeChange = (e) => {
	this.setState({
		showTime: e.target.checked,
	});
}

onShowDateInputChange = (e) => {
	this.setState({
		showDateInput: e.target.checked,
	});
}

toggleDisable = () => {
	this.setState ({
		disable: !this.state.disable,
	});
}

render() {
	const state = this.state;
	const calendar = (<Calendar
		locale={cn ? zhCN : enUS}
		style={{zIndex: 1000}}
		dateInputPlaceholder="please input"
		formatter={getFormat(state.showTime)}
		disableTime={state.showTime ? disableTime : null}
		timePicker={state.showTime ? timePickerElement : null}
		defaultValue={this.props.defaultCalendarValue}
		showDateInput={state.showDateInput}
		disableDate={disableDate}
		/>)
	return(
			<div style={{width: 400, margin: 20}}>
				<div style={{marginBottom: 10}}>
					<label>
						<input type="checkbox" checked={state.showTime} onChange={this.onShowTimeChange} />
						showTime
					</label>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<label>
						<input type="checkbox" checked={state.showDateInput} onChange={this.onShowDateInputChange} />
						showDateInput
					</label>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<label>
						<input checked={state.disable} onChange={this.toggleDisable} type="checkbox" />
						disable
					</label>
				</div>
				<div style={{boxSizing: 'border-box', position: 'relative', display: 'block', lineHeight:1.5, marginBottom: 22}}>
					<DatePicker animation="slide-up" disable={state.disable} calendar={calendar} value={state.value} onChange={this.onChange} >
						{
							({value}) => {
								return(
									<span tabIndex="0">
										<input placeholder="please select" style={{width: 250}} disable={state.disable} readOnly tabIndex="-1" className="ant-calendar-picker-input ant-input" value={value && value.format(getFormat(state.onShowTimeChange)) || ''}
										/>
									</span>
								);
							}
						}
					</DatePicker>
				</div>
			</div>
		);
	}
}

function onStandaloneSelect(value) {
	console.log('onStandaloneSelect');
	console.log(value && value.format(format));
}

function onStandaloneChange(value) {
	console.log('onStanfaloneChange');
	console.log(value && value.format(format));
}

ReactDOM.render((
	<div style={{zIndex: 1000, position: 'relative', width: 900, margin: '20px auto'}}>
		<div>
			<div style={{margin: 10}}>
				<Calendar showWeekNumber={false} locale={cn ? zhCN : enUS} defaultValue={disableTime} disableTime={disableTime} showToday formatter={getFormat(true)} showOk={false} timePicker={timePickerElement} onChange={onStandaloneChange} disableDate={disableDate} onSelect={onStandaloneSelect} renderFooter={() => 'extra footer'} />
			</div>
			<div style={{float: 'left', width: 300}}>
				<Calendarr defaultValue={now}/>
			</div>
			<div style={{float: 'right', width: 300}}>
				<Calendarr defaultCalendarValue={defaultCalendarValue}/>
			</div>
			<div style={{clear: 'both'}}></div>
		</div>
	</div>
	),
document.getElementById('__react-content')
);
