import AppDispatcher from "../dispatcher/AppDispatcher";
import {AppConstants} from "../constants/AppConstants";
import {signIn, signUp, checkUser, addFarm, getFarms, getSupport, sendIssue, sendMessage, signOut} from "../utils/appAPI";
import {EventEmitter} from "events";


var CHANGE_EVENT = "change";

var _store = {
	url: "",
	user: {},
	farmslist: [],
	farm: {},
	issuesList: [],
	issue: {},
}

class StoreClass extends EventEmitter {
	addListener(cb) {
		this.on(CHANGE_EVENT, cb)
	}

	setUrl(url = location.pathname) {
		return _store.url = url;
	}

	setUser(user) {
		return _store.user = JSON.parse(user);
	}

	setFarms(data) {
		return _store.farmslist = JSON.parse(data);
	}

	getFarm(data) {
		return _store.farm = data;
	}

	setSupport(data) {
		return _store.issuesList = JSON.parse(data);
	}

	getIssue(data) {
		return _store.issue = data;
	}

	removeListener(cb){
		this.on(CHANGE_EVENT, cb)
	}

	getStore() {
		return _store;
	}
}

const AppStore = new StoreClass(); 


AppDispatcher.register((payload) => {
  const action = payload.action;
  switch(action.actionType) {

  	case AppConstants.SET_URL:
  		AppStore.setUrl(action.url)
  		AppStore.emit(CHANGE_EVENT)
  		break;
  	case AppConstants.SIGNIN:
  		signIn(action.data)
  		break;
  	case AppConstants.SIGNUP:
  		signUp(action.data)
  		break;
  	case AppConstants.SET_USER:
  		AppStore.setUser(action.data)
  		AppStore.emit(CHANGE_EVENT)
  		break;
    case AppConstants.SIGNOUT:
      signOut()
      AppStore.emit(CHANGE_EVENT)
      break;
    case AppConstants.CHECK_USER:
      checkUser()
      AppStore.emit(CHANGE_EVENT)
      break;
    case AppConstants.ADD_FARM:
      addFarm(action.data)
      AppStore.emit(CHANGE_EVENT)
      break;
  	case AppConstants.GET_FARMS:
  		getFarms()
  		break;
  	case AppConstants.SET_FARMS:
  		AppStore.setFarms(action.data)
  		AppStore.emit(CHANGE_EVENT)
  		break;
  	case AppConstants.GET_FARM:
  		AppStore.getFarm(action.data) 
  		AppStore.emit(CHANGE_EVENT)
  		break;
  	case AppConstants.GET_SUPPORT:
  		getSupport()
  		break;
  	case AppConstants.SET_SUPPORT:
  		AppStore.setSupport(action.data)
  		AppStore.emit(CHANGE_EVENT)
  		break;
  	case AppConstants.GET_ISSUE:
  		AppStore.getIssue(action.data)
  		AppStore.emit(CHANGE_EVENT)
  		break;
  	case AppConstants.SEND_ISSUE:
  		sendIssue(action.data) 
  		break;
    case AppConstants.SEND_MESSAGE:
      sendMessage(action.data) 
      break;

  }
  return true;
})

export default AppStore;