import React from "react"
import importScript from '../customHooks/importScript';

function getScripts(){
  importScript("/player/cvp.min.js");
  importScript("/player/cvui.min.js");
  importScript("/player/player.js");
}

class Panel extends React.Component {
    
  render() {
    return (
      <div>
        <h1>Hello from Create React App</h1>
        <p>I am in a React Component!</p>
      </div>
    )
  }
}
export default Panel