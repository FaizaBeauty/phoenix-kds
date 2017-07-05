import React from 'react'; 
import $ from 'jquery';
import HyperLink from '../layouts/hyperLinks';
import {setUrl} from '../../actions/AppActions';
import AppStore from '../../store/AppStore';

export default class Home extends React.Component {

  render() {
    return (
		<div className="contain">
			<div className="home">
				<div className="desc">
					<h2>Imagine</h2>
					<h2>Create</h2>
					<h2>Have Fun</h2>
					<button>Enroll</button>
				</div>
			</div>			
		</div>	
    );
  }

}

// <div className="students">
// 				<div>
// 					<h3>SHS STUDENTS</h3>
// 				</div>
// 				<div>
// 					<h3>UNIVERSITY STUDENTS</h3>
// 				</div>
// 			</div>




