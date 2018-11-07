import { h, render, Component } from 'preact';

import pointStyle from './pointStyle'

export default class Points extends Component {
    constructor() {
        super();
    }

    render() {
        return (
      		<div>
            <img src="../../../assets/icons/navpoint-small.png" class={pointStyle.redicon}/>
            <img src="../../../assets/icons/navpoint-green.png"  class={pointStyle.greenicon}/>
      		</div>
        );
    }
}
