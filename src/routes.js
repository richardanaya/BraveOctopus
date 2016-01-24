import React from "react";
import {Router, Route, IndexRoute } from "react-router";

import App from "./core/app";
import Main from "./view/main";
import Create from "./view/create";
import Book from "./view/book";

/**
 * The React Router 1.0 routes for both the server and the client.
 */
module.exports = (
	<Router>
			<Route path="/" component={App}>
				<IndexRoute component={Main} />
				<Route path="/book" component={Create} />
				<Route path="/book/:bookId" component={Book} />
			</Route>
	</Router>
);
