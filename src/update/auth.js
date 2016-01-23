import sessionState from "core/sessionState"
import {publish,listen} from "core/utils"

listen("loggedOut",function *(){
	console.log("Clean up user data")
	sessionState.get().cursor().set("user",null);
})

listen("loggedIn",function *(authData){
	console.log("User " + authData.uid + " is logged in with " + authData.provider);
	console.log("Setup initial user data")
	sessionState.get().cursor().set("user",authData);
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
