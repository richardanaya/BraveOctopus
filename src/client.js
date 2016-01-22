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
require('auth')

//Deydrate state from json
sessionState.set(immstruct({
	pageLoaded: false,
	message: "Hello World!",
	highfivecount: 0,
	user: null
}));

window.__firebase__ = new Firebase('https://braveoctopus.firebaseio.com/');

var authData = window.__firebase__.getAuth();
if (authData) {
	console.log("User " + authData.uid + " is logged in with " + authData.provider);
	sessionState.get().cursor().set("user",authData);
} else {
  console.log("User is not logged in");
}

/**
 * Fire-up React Router.
 */
const reactRoot = window.document.getElementById("react-root");
ReactDOM.render(React.createElement(ReactRouter.Router, {routes: routesContainer, history: history.createHistory()}), reactRoot);

document.addEventListener("DOMContentLoaded", function(event) {
	sessionState.get().cursor().set("pageLoaded",true)
})
