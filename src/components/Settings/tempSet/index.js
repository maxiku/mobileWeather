import { h, render, Component } from 'preact';

import tempSetStyle from './tempSetStyle';

export default class TopBar extends Component {
    constructor() {
        super();
        this.state.switch = false;
    }

    change = () =>{
      if(this.state.switch){
        this.state.switch = false;
        document.getElementById("switch").src='../../../assets/icons/switch-on.png';
        document.getElementById("name").innerHTML="Farenheit";
      }
      else{
        this.state.switch = true;
        document.getElementById("switch").src='../../../assets/icons/switch-off.png';
        document.getElementById("name").innerHTML="Celcius";
      }
    }

    render() {
        return (
          <div class={tempSetStyle.container}>
      		  <div class={tempSetStyle.bar}>
              <p id="name" class={tempSetStyle.text}>Farenheit</p>
              <button onClick={this.change} class={tempSetStyle.but}><img id="switch" class={tempSetStyle.switch} src='../../../assets/icons/switch-on.png' /></button>
      		  </div>
            <hr />
          </div>
        );
    }
}
