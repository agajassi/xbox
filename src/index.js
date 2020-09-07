import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Panel from './components/Panel';
import Player from './components/Player';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Player />
    <Panel />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
