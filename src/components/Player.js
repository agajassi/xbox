import React,{Component} from "react";
import ReactDOM from "react-dom";
import cvp from 'cvp';
// import './App.css';

class Player extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "./player/playerSetup.js";
    this.div.appendChild(script);
  }

  render() {
    return (
      <div className="Player" ref={el => (this.div = el)}>
        {/* Script is inserted here */
          console.log(cvp.buildInfo)
        }
      </div>
    );
  }
}

export default Player;
