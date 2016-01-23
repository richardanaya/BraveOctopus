import React from "react";
import {Router, Route, IndexRoute } from "react-router";

import App from "./core/app";
import Main from "./view/main.component";
import Create from "./view/create.component";

/**
 * The React Router 1.0 routes for both the server and the client.
 */
module.exports = (
	<Router>
			<Route path="/" component={App}>
				<IndexRoute component={Main} />
				<Route path="/create" component={Create} />
			</Route>
	</Router>
);
