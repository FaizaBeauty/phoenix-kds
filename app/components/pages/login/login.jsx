import React from 'react'; 
import $ from 'jquery';
import {signOut} from '../../../actions/AppActions';
import AppStore from '../../../store/AppStore';

export default class Login extends React.Component {

  render() {
    return (
    	<div className="contain">
			<div className="auth">
				<h4><span>LOG IN</span></h4>
				<form className="login">	
					<input type="text" placeholder="Name . . . ." />
					<input type="text" placeholder="Password . . . ." />
					<button>SUBMIT</button>
				</form>
			</div>
		</div>
    );
  }

}






