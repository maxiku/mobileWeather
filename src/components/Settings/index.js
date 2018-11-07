import { h, render, Component } from 'preact';
import TopBar from './topBar';
import TempSet from './tempSet';
import RefreshInterval from './refreshInterval';
import homeStyle from './homeStyle';

export default class SettingsPage extends Component {

	constructor(props){
		super(props);
		this.setState({ display: true });
	}

	render() {
			return(
				<div class={ homeStyle.phoneContainer }>
					<TopBar />
					<TempSet />
					<RefreshInterval />
				</div>
			)
	}

}
