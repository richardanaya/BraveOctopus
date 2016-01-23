import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import * as history from "history";
import sessionState from "core/sessionState"
import routesContainer from "routes";
import Immutable from "immutable"
require("../lib/react-mdl/material.js")
import {publish,listen} from "core/utils"
var immstruct = require('immstruct');
require('update/auth')

//Deydrate state from json
sessionState.set(immstruct({
	pageLoaded: false,
	message: "Hello World!",
	highfivecount: 0,
	user: null
}));

//setup firebase
window.__firebase__ = new Firebase('https://braveoctopus.firebaseio.com/');

//check if we are logged in
var authData = window.__firebase__.getAuth();
window.__firebase__.onAuth(function(authData) {
	if (authData) {
		publish("loggedIn",authData);
	} else {
	  publish("loggedOut");
	}
});


/**
 * Fire-up React Router.
 */
const reactRoot = window.document.getElementById("react-root");
ReactDOM.render(React.createElement(ReactRouter.Router, {routes: routesContainer, history: history.createHistory()}), reactRoot);

document.addEventListener("DOMContentLoaded", function(event) {
	sessionState.get().cursor().set("pageLoaded",true)
})
