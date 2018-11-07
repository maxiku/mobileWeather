import { h, render, Component } from 'preact';

import barStyle from './barStyle';

export default class TopBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
      		<div class={barStyle.topBar}>
            <button class={barStyle.leftArrow} onClick={() => {window.location.href = "/Main"}}><img class={barStyle.leftArrow} src="../../../assets/icons/left-arrow.png" /></button>
            <p class={barStyle.title}>Settings</p>
      		</div>
        );
    }
}
