import { h, render, Component } from 'preact';

import choiceStyle from './choiceStyle';

export default class IntervalChoices extends Component {
    constructor() {
        super();
    }

    render({value}) {
        return (
          <div class={choiceStyle.bar}>
            <button class={choiceStyle.choiceButton}>{value}</button>
          </div>
        );
    }
}
