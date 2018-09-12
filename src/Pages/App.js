import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="p-title">
          <input type="text" id="text" readOnly value="Get Color"/>
          <i onClick={bt_copy} className="far fa-copy copyOff"></i>
        </div>
        <button id="bt_set_color" onClick={bg_color}>Get Random Color</button>
        <div id="snackbar">Copy to Clipboard!</div>
      </div>
    );
  }
}

let bg_color = ()=>{
  let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector("#p-title > input").value = color;
  document.querySelector("#p-title > input").style.backgroundColor = color;
  document.querySelector(".fa-copy").classList  = "far fa-copy copyOn";
} 

function bt_copy(){
  document.querySelector("#text").select();
  document.execCommand("copy");
  document.getSelection().removeAllRanges();
  let x = document.querySelector("#snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

export default App;