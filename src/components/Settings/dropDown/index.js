import { h, render, Component } from 'preact';

import Choice from './choice';
import BackIcon from '../../backIcon';
import dropDownStyle from './dropDownStyle';

export default class DropDown extends Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div class={dropDownStyle.container}>
            <BackIcon />
            <Choice value = {'5 Minutes'} chosen={true}/>
            <Choice value = {'10 Minutes'} chosen={false}/>
            <Choice value = {'15 Minutes'} chosen={false}/>
            <Choice value = {'30 Minutes'} chosen={false}/>
            <Choice value = {'45 Minutes'} chosen={false}/>
            <Choice value = {'1 Hour'} chosen={false}/>
            <Choice value = {'2 Hours'} chosen={false}/>
          </div>
        );
    }
}
