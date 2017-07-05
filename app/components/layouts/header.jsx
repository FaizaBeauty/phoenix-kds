import React from 'react'; 
import $ from 'jquery';
import HyperLink from './hyperLinks';
import {signOut} from '../../actions/AppActions';
import AppStore from '../../store/AppStore';

export default class Header extends React.Component {

  render() {
    return (
		<header>			
			<nav>
				<li>
					<a>HOME</a>
				</li>
				<li>
					<a>ABOUT</a>
				</li>
				<li>
					<a>COURSES</a>
				</li>
				<li>
					<a>ENROLL</a>
				</li>
				<li>
					<a>CONTACT</a>
				</li>
			</nav>
		</header>
    );
  }

}






