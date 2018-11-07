import { h, render, Component } from 'preact';

import refreshStyle from './refreshStyle';

export default class RefreshInterval extends Component {
    constructor() {
        super();
        this.setState({display: false});
    }

    switchDisplay = () =>{
      this.state.display ? {display: false} : {display : true};
    }

    render() {
        return (
          <div class={refreshStyle.container}>
      		  <div class={refreshStyle.bar}>
              <p class={refreshStyle.text}>Refresh Interval</p>
              <button class={refreshStyle.linkButton}>15 Minutes</button>
      		  </div>
            <hr />
          </div>
        );
    }
}
