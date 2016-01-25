import sessionState from "core/sessionState"
import {publish,listen} from "core/utils"
var Immutable = require('immutable');

listen("loggedOut",function *(){
	console.log("Clean up user data")
	var state = sessionState.get();
	state.set("user",null);
	state.set("books",Immutable.Map())
	state.set("ready",true)
})

listen("loggedIn",function *(authData){
	console.log("User " + authData.uid + " is logged in with " + authData.provider);
	console.log("Setup initial user data")
	var state = sessionState.get()
	state.set("user",authData);
	var books = Immutable.Map();
	//populate session state with initial book set
	var snapshot = yield window.__firebase__.once("value");
	snapshot.forEach((childSnapshot)=>{
		var key = childSnapshot.key();
		var book = childSnapshot.val();
		books = books.set(key,Immutable.fromJS(book));
	});
	state.set("books",books)
	state.set("ready",true)
})

listen("logout",function *(){
	window.__firebase__.unauth();
});

listen("login",function *(){
	window.__firebase__.authAnonymously(function(error, authData) {
	  if (error) {
	    console.log('Login Failed!', error);
	  }
	});
})
