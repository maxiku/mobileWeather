import { h, render, Component } from 'preact';

import buttonStyle from './buttonStyle'

export default class Redirect extends Component {
    constructor() {
        super();
    }

/* this render function displays a button component on the screen that redirects to our main page
on click */
    render() {
        return (
      		<div class={buttonStyle.container}>
      			<button class={buttonStyle.continue}onClick={() => {window.location.href = "/Main"}}>
              I AM CURRENTLY NOT DRIVING
            </button>
      		</div>
        );
    }
}
