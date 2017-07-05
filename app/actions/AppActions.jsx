import AppDispatcher from '../dispatcher/AppDispatcher'; 
import { AppConstants } from '../constants/AppConstants';


export function setUrl(url) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_URL,
    url: url
  });
}

export function signIn(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SIGNIN,
    data: data
  });
}

export function signUp(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SIGNUP,
    data: data
  });
}

export function setUser(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_USER,
    data: data
  });
}

export function checkUser(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.CHECK_USER 
  });
}

export function signOut() {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SIGNOUT
  });
}

export function addFarm(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.ADD_FARM,
    data: data
  });
}

export function getFarms(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.GET_FARMS,
    data: data
  });
}

export function setFarms(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_FARMS,
    data: data
  });
}

export function getFarm(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.GET_FARM,
    data: data
  });
}

export function getSupport() {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.GET_SUPPORT
  });
}

export function setSupport(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_SUPPORT,
    data: data
  });
}

export function getIssue(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.GET_ISSUE,
    data: data
  });
}


//SENDING DATA

export function sendIssue(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SEND_ISSUE,
    data: data
  });
}

export function sendMessage(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SEND_MESSAGE,
    data: data
  });
}