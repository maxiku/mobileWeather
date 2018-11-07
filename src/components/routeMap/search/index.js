import { h, render, Component } from 'preact';

import searchStyle from './searchStyle'

export default class SearchBox extends Component {
    constructor() {
        super();
    }

    render() {
        return (
      		<div class={searchStyle.container}>
            <img src="../../../assets/icons/navpoint-green.png" class={searchStyle.greenicon}/>
      			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;London</p>
            <img src="../../../assets/icons/right-arrow.png" class={searchStyle.arrow}/>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Luton</p>
            <img src="../../../assets/icons/navpoint-small.png"  class={searchStyle.navicon}/>
      		</div>
        );
    }
}
