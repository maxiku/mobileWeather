import { h, Component } from 'preact';

import Iphone from './iphone';
import Phone from './testGround';

export default class App extends Component {

	componentWillMount(){
		let map = document.createElement("script");
		map.src = "/assets/map.js"
		document.head.appendChild(map);
	}

	componentWillMount(){
		let map = document.createElement("script");
		map.src = "/assets/map.js"
		document.head.appendChild(map);
	}
	/* this render function will display our first page to the screen */
	render(){
			return (
				<div id="app">
					<Phone/ >
				</div>
			);
	}
}
