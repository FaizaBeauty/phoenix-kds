import $ from 'jquery';
import {setUser, setFarms, setSupport, getSupportAc} from "../actions/AppActions";

export function signIn(user) { 
	$.ajax({
	    url: '/api/signin',
	    method: "POST",
	    data: user,
	    cache: false,
	    success: function(data) {
	      setUser(data);
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}

export function signUp(user) {
	$.ajax({
	    url: '/api/signup',
	    method: "POST",
	    data: user,
	    cache: false,
	    success: function(data) {
	      setUser(data);
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this) 
	})
}

export function checkUser() {
	$.ajax({
	    url: '/api/checkuser',
	    method: "POST",
	    cache: false,
	    success: function(data) {
	      setUser(data);
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this) 
	})
}

export function signOut(user) {
	$.ajax({
	    url: '/api/signout',
	    method: "POST",
	    cache: false,
	    success: function(data) {
	      setUser(data);
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this) 
	})
}

export function addFarm(data) {
	console.log(data)
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/api/addfarm", true);
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log("SENT MEEE")
		}else {
			console.log("NOT SENT")
		}
	}
	xhr.send(data)
}

export function getFarms(data) {
	$.ajax({
	    url: '/api/getfarms',
	    method: "POST",
	    cache: false,
	    success: function(data) {
	      setFarms(data);
	      
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}

export function getSupport() {
	$.ajax({
	    url: '/api/getsupport',
	    method: "POST",
	    cache: false,
	    success: function(data) {
	      setSupport(data);
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}

export function sendIssue(data) {
	$.ajax({
	    url: '/api/addissue',
	    method: "POST",
	    data: data,
	    cache: false,
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}

export function sendMessage(data) {
	$.ajax({
	    url: '/api/addmsg',
	    method: "POST",
	    data: data,
	    cache: false,
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}


