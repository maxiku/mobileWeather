import { h, render, Component } from 'preact';

import saveStyle from './saveStyle'

export default class SaveIcon extends Component {
    constructor() {
        super();
    }

    render() {
        return (
      		<div class={saveStyle.container}>
            <img src="../../assets/icons/upload.png" class={saveStyle.saveIcon}/>
      		</div>
        );
    }
}
