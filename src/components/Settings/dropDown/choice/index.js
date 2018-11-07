import { h, render, Component } from 'preact';

import choiceStyle from './choiceStyle';

export default class IntervalChoices extends Component {
    constructor() {
        super();
    }

    render({value, chosen}) {
        let button = null
        if(chosen){
        button = <button class={choiceStyle.selected}>{value}</button>
        }
        else{
          button = <button class={choiceStyle.choiceButton}>{value}</button>
        }
        return (
          <div class={choiceStyle.bar}>
          {button}
          </div>
        );
    }
}
