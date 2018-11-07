import { h, render, Component } from 'preact';
import homeStyle from './homeStyle';
import SearchBox from './search';
import SettingsIcon from '../settingsIcon';
import SaveIcon from './saveIcon';
import Points from './points';
import $ from 'jquery';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export default class RouteMap extends Component {

	constructor(props){
		super(props);
		this.state.temp = "";
	}
/* this functions lodas the googlemapapi and allows us to display the map on screen */
	componentDidMount(){
			setTimeout(() => {
				// <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"/>
				let google = document.createElement("script");
				// google.async = true;
				// google.defer = true;
				google.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB3TGseSFjIFLsouPKM617o9xV_RrS_--M&callback=initMap";
				document.head.appendChild(google);
			}, 1000)
	}

/* this fucntion fetches weather data from the weather api and stores it as a json */
	fetchWeatherData = () => {
		var url = "http://api.wunderground.com/api/6e5166aaf3365018/conditions/q/UK/London.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		console.log("test");
	}

/* this function allows us to parse the data fetched from the api and sets the temperature, location and conditions
so they can be displayed on screen */
	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];
		conditions = conditions.replace(/\s/g, '');
		document.getElementById("temp").innerHTML = temp_c + "&#176;C" ;
		document.getElementById("tempIcon").src = 'https://icons.wxug.com/i/c/a/' + conditions.toLowerCase() +'.gif';
		// set states for fields so they could be rendered later on
		/*this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions
		});*/


	}
/* displays all the weather information on screen and also loads components like the settings button,
searchBox and save icon */
	render() {
		this.fetchWeatherData();
			return(
				<div class={ homeStyle.phoneContainer }>
					<div class={ homeStyle.topBar }>
						<SettingsIcon />
						<SearchBox />
						<SaveIcon />
					</div>
					<div class={homeStyle.mapStyle} id="map" ></div>
					<div class={homeStyle.bottomBar}>
						<button class={homeStyle.lButtonStyle}>
							<img src='../../assets/icons/left-arrow.png' class={homeStyle.refreshImg}/>
						</button>
						<button class={homeStyle.sButtonStyle}>
							<img src='../../assets/icons/switch-arrow.png' class={homeStyle.refreshImg}/>
						</button>
						<button class={homeStyle.rButtonStyle} onClick={ this.fetchWeatherData }>
							<img src='../../assets/icons/refresh.png' class={homeStyle.refreshImg}/>
						</button>
						<div class={ homeStyle.tempDiv }>
							<p id="temp" class={homeStyle.tempText}></p>
							<img id="tempIcon" class={homeStyle.weatherIconBar} />
						</div>
					</div>
				</div>
			)
	}

}
