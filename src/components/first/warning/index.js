import { h, render, Component } from 'preact';

import warnStyle from './warnStyle'

export default class Logo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
      		<div class={warnStyle.container}>
      			Please Do Not Use The App While Driving
            <hr />
      		</div>
        );
    }
}
