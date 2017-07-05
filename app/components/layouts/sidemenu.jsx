import React from 'react'; 
import $ from 'jquery';
import HyperLink from './hyperLinks';
import {signOut} from '../../actions/AppActions';
import AppStore from '../../store/AppStore';

export default class Sidemenu extends React.Component {

  render() {
    return (
		<div className="sidemenu">
			<nav>
				<li>
					<a>HOME</a>
				</li>
				<li>
					<a>DESIGN</a>
				</li>
				<li>
					<a>APPS</a>
				</li>
				<li>
					<a>DIGITAL</a>
				</li>
				<li>
					<a>CONTACT</a>
				</li>
			</nav>
		</div>
    );
  }

}






