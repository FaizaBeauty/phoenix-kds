import React from 'react'; 
import $ from 'jquery';
import HyperLink from '../layouts/hyperLinks';
import Register from './login/login';
import Login from './login/register';
import {setUrl} from '../../actions/AppActions';
import AppStore from '../../store/AppStore';

export default class Auth extends React.Component {

  constructor(props) {
  	super(props)
  	this.state = {
  		page: "signin",
  	}
  }

  route(route) {
  	this.setState({
  		page: route
  	})
  }

  render() {
  	var body;
  	if(this.state.page == "signin") {
  		body = <Login route={this.route.bind(this, "join")} />
  	} else {
  		body = <Register route={this.route.bind(this, "signin")} />
  	}
    
  	return (
  		<div className="contain">
  			{body}
  		</div>
  	)
  }
}






