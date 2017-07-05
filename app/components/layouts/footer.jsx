import React from 'react'; 
import $ from 'jquery';
import {setUrl} from '../../actions/AppActions';
import AppStore from '../../store/AppStore';

export default class Footer extends React.Component {

  render() {
    return (
		<footer>
          <div className="message">
            <form>
              <h5>LEAVE US A MESSAGE</h5>
              <input type="text" placeholder="Name " />
              <input type="text" placeholder="Email " />
              <textarea placeholder="Message "></textarea>
              <button>SUBMIT</button>
            </form>   
          </div>
        </footer>
    );
  }

}






