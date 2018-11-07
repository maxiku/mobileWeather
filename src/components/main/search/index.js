import { h, render, Component } from 'preact';

import searchStyle from './searchStyle';

export default class SearchBox extends Component {
    constructor() {
        super();
    }

/* this function displays a textfield to input locations and
 has a button that will display the RouteMap on click */
    render() {
        return (
      		<div class={searchStyle.container}>
      			<input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Where To?" />
            <button class={searchStyle.navicon} onClick={() => {window.location.href = "/RouteMap"}}><img src="../../../assets/icons/navpoint-small.png" class={searchStyle.naviPic} /></button>
      		</div>
        );
    }
}
