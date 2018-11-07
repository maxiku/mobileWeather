import { h, render, Component } from 'preact';
import homeStyle from './homeStyle';
import SearchBox from './search';
import SettingsIcon from '../settingsIcon';
import SaveIcon from './saveIcon';
export default class Main extends Component {

	constructor(props){
		super(props);
		this.setState({ display: true });
	}

/* this functions loads the settings, save and searchbox components */
	render() {
			return(
				<div class={ homeStyle.phoneContainer }>
					<div class={ homeStyle.topBar }>
						<SettingsIcon />
						<SaveIcon />
					</div>
					<SearchBox />
				</div>
			)
	}

}
