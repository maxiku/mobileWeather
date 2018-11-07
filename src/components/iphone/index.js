// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import start from './start';
import style_iphone from '../button/style_iphone';
import clockStyle from '../clock/clockStyle';
import $ from 'jquery';
// import the Button component
import Button from '../button';
import Clock from '../clock';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		var whatsthemessage = this.props.message;
		this.setState({ display: true });
	}

	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

		// display all weather data
		return (
			<div class={ style.container }>
				<div class={ style.header }>
					<div class={ style.city }>{ this.state.locate }</div>
					<div class={ style.conditions }>{ this.state.cond }</div>
					<span class={ tempStyles }>{ this.state.temp }</span>
				</div>
				<div class={ style.details }></div>
                <div class= { clockStyle.container }>
                    <Clock class={ clockStyle.clock }/>
                </div>
				<div class= { style_iphone.container }>
					{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.renderLogoPage } buttonText = {'First'}/ > : null }
				</div>
				<div class= { style_iphone.container }>
					{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData } buttonText = {'Main'}/ > : null }
				</div>
				<div class= { style_iphone.container }>
					{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData } buttonText = {'Route'}/ > : null }
				</div>
				<div class= { style_iphone.container }>
					{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData } buttonText = {'List View'}/ > : null }
				</div>
				<div class= { style_iphone.container }>
					{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData } buttonText = {'Saved Routes'}/ > : null }
				</div>
				<div class= { style_iphone.container }>
					{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData } buttonText = {'Settings'}/ > : null }
				</div>
				<div class= { style_iphone.container } style="margin-bottom: 100px;">
					{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData } buttonText = {'display hello world!'}/ > : null }
				</div>
			</div>
		);
	}
/*
	renderLogoPage = () =>{
		return (
			<div class={ start.container }>
				<div class={ logoStyle.container }>
					<Logo class={ logoStyle.logo }/>
				</div>
			</div>
		)
	}
	*/
	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions
		});
	}
}
