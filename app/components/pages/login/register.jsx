import React from 'react'; 
import $ from 'jquery';
import {signOut} from '../../../actions/AppActions';
import AppStore from '../../../store/AppStore';

export default class Register extends React.Component {

  render() {
    return (
    	<div className="contain">
			<div className="auth">
				<h4><span>REGISTER</span></h4>
				<form className="register">	
					<input type="text" placeholder="Name . . . ." />
					<input type="text" placeholder="Email . . . ." />
					<select>
						<option>USER</option>
						<option>SHOP</option>
					</select>
					<input type="text" placeholder="Password . . . ." />
					<input type="text" placeholder="Confirm Password . . . ." />
					<button>SUBMIT</button>
				</form>
			</div>
		</div>
    );
  }

}






