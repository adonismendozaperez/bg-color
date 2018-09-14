import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'Get Color'
    };
    this.bg_color = this.bg_color.bind(this);
    this.bt_copy = this.bt_copy.bind(this);
  }

  bg_color() {
    this.setState({
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`
    });
    document.querySelector(".fa-copy").classList  = "far fa-copy copyOn";
  }

  bt_copy(){
    document.querySelector("#text").select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    let x = document.querySelector("#snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor : this.state.color}}>
        <div id="p-title">
          <input type="text" id="text" readOnly style={{ backgroundColor : this.state.color}} value={this.state.color}/>
          <i onClick={this.bt_copy} className="far fa-copy copyOff"></i>
        </div>
        <button id="bt_set_color" onClick={this.bg_color}>Get Random Color</button>
        <div id="snackbar">Copy to Clipboard!</div>
      </div>
    );
  }
}

export default App;