import { h, render, Component } from 'preact';

import logoStyle from './logoStyle'

export default class Logo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
      		<div class={logoStyle.container}>
      			<div class={ logoStyle.image }>
      			</div>
      		</div>
        );
    }
}
