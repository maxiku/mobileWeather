/* the following code imports necessary node modules as well
as components from elsewhere in the src */
import { h, render, Component, PureComponent } from 'preact';
import style from './style';
import RouteMap from '../routeMap';
import Main from '../main';
import Home from '../first';
import SettingsPage from '../Settings';
import DropDown from '../Settings/dropDown';
import Router from 'preact-router';
import SearchBox from "../routeMap/search";
import SavedRoutes from "../savedRoutes";
import Iphone from "../iphone-BACK/index - ORIGINAL.js";

export default class Phone extends Component {

/* this render function displays the first screen also sets up the routes to other pages
so we can navigate between them*/
  render() {
    return (
			<div class={ style.container }>
      <Router>
				<Home path="/"/>
				<Main path="/Main"/>
				<RouteMap path="/RouteMap"/>
				<SettingsPage path="/Settings"/>
        			<savedRoutes path="/savedRoutes"/>
				<refreshInterval path="/Settings/refreshInterval"/>
		</Router>
			</div>

    )
  }

}
