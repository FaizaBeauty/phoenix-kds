import React from 'react'; 
import $ from 'jquery';
import {getFarms, getSupport} from '../../actions/AppActions';
import AppStore from '../../store/AppStore';

//LAYOUT
import Header from '../layouts/header';
import Footer from '../layouts/footer';


//APP
import Home from '../pages/home';




export default class App extends React.Component {

  constructor(props) {
  	super(props)
    this.state = AppStore.getStore();
    this._onChange = this._onChange.bind(this);
    //this.pageAccess = this.pageAccess.bind(this);
    //this.loggedIn = this.loggedIn.bind(this);
  }

  _onChange() {
    this.setState(AppStore.getStore());
  }

  // pageAccess() {
  //   if (this.state.user.Admin != true) {
  //     location.hash = ""
  //   }else if (this.state.user.LoggedIn != true) { 
  //     location.hash = ""
  //   }
  //   return
  // }

  // loggedIn(user) {
  //   if (user) {
  //     if (user.Admin == true) {
  //       if (location.hash != "") {
  //         return
  //       }else {
  //         location.hash = "#/dash/farms"
  //       }
  //     }
  //   }
  //   return
  // }

  componentDidMount() {
  	AppStore.addListener(this._onChange);    
  }

  componentWillUnmount() {
    AppStore.removeListener(this._onChange)
  }

  render() {
    var header;
    var sidemenu;
  	var body;
    var footer;

  	switch(this.state.url) {
      case '':
        header = <Header />
        body = <Home />
        break
      default:
       return (
          <div>
            <h1>Page not found</h1>
          </div>
        )
    }
    return (
	    <div>
        {header}
			  {body}
        <Footer />
	  	</div>
    );
  }

}
