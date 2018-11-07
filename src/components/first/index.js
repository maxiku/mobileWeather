import { h, render, Component } from 'preact';
import Logo from './logo';
import Warn from './warning';
import Redirect from './button';
import homeStyle from './homeStyle';

export default class Home extends Component {

	constructor(props){
		super(props);
		this.setState({ display: true });
	}
/*this render function displays our homepage screen along with a button to redirect to our
main map page */
	render() {
			return(
				<div class={ homeStyle.phoneContainer }>
					<Logo />
					<Warn />
					<Redirect /> 
				</div>
			)
	}

}
