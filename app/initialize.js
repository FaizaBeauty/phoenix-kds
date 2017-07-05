import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/containers/App';
import {setUrl} from './actions/AppActions'; 
import "./ui/assets/styles/normalize.scss";
import "./ui/assets/styles/skeleton.scss";
import "./ui/assets/styles/app.scss";



function hashRouter() {
	var location = window.location.hash;
	setUrl(location);
}

hashRouter()

window.addEventListener("hashchange", hashRouter, false)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />, document.querySelector('#app'));
});

