	import { h, render, Component } from 'preact';
import Choice from './choice';
import BackIcon from '../backIcon';
import homeStyle from './homeStyle';

export default class SavedRoutes extends Component {

	constructor(props){
		super(props);
		this.setState({ display: true });
	}

	render() {
			return(
				<div class={ homeStyle.phoneContainer }>
					<div class={ homeStyle.topBar }>
						<BackIcon />
						<p class={homeStyle.title}>Saved Routes</p>
					</div>
					<Choice value={"London -> Luton"} />
					<Choice value={"London -> Birmingham"} />
					<Choice value={"London -> Scotland"} />
					<Choice value={"London -> Wales"} />
				</div>
			)
	}

}
