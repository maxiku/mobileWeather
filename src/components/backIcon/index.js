import { h, render, Component } from 'preact';

import saveStyle from './saveStyle'

export default class BackIcon extends Component {
    constructor() {
        super();
    }

    render() {
        return (
      		<div class={saveStyle.container}>
            <img src="../../assets/icons/left-arrow.png" class={saveStyle.saveIcon}/>
      		</div>
        );
    }
}
