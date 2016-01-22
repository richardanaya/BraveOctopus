import sessionState from "core/sessionState"
import {publish,listen} from "core/utils"

listen("logout",function *(){
	window.__firebase__.unauth();
	sessionState.get().cursor().set("user",null);
});

listen("login",function *(){
	window.__firebase__.authAnonymously(function(error, authData) {
	  if (error) {
	    console.log('Login Failed!', error);
	  } else {
	    console.log('Authenticated successfully with payload:', authData);
			sessionState.get().cursor().set("user",authData);
	  }
	});
})
