import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import * as history from "history";
import sessionState from "core/sessionState"
import routesContainer from "routes";
require("../lib/react-mdl/material.js")
import {publish,listen} from "core/utils"

//add all our updaters
require('update/auth')
require('update/book')

//set initial state
sessionState.set({
	ready: false,
	user: null,
	books:{}
});

//setup react and navigation
var appHistory = history.createHistory();
const reactRoot = window.document.getElementById("react-root");
sessionState.on('swap',()=>{
		ReactDOM.render(React.createElement(ReactRouter.Router, {routes: routesContainer, history: appHistory}), reactRoot);
})
listen("navigateTo", function *(path){
	appHistory.pushState(null,path);
})

//setup firebase
window.__firebase__ = new Firebase('https://braveoctopus.firebaseio.com/');
var authData = window.__firebase__.getAuth();
window.__firebase__.onAuth(function(authData) {
	if (authData) {
		publish("loggedIn",authData);
	} else {
	  publish("loggedOut");
	}
});
