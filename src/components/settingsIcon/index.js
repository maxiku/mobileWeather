import { h, render, Component } from 'preact';
import Router from 'preact-router';
import settingStyle from './settingStyle'

export default class SettingsIcon extends Component {
    constructor() {
        super();
    }

    render() {
        return (
      		<div  class={settingStyle.container}>
            <button class={settingStyle.setIcon} onClick={() => {window.location.href = "/Settings"} }>
            <img src="../../assets/icons/settings.png" class={settingStyle.setPic}/>
            </button>
      		</div>
        );
    }
}
