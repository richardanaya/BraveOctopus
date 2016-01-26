import React from "react";
import {Router, Route, IndexRoute } from "react-router";

import Container from "./view/container";
import Main from "./view/main";
import BookList from "./view/bookList";
import Book from "./view/book";

/**
 * The React Router 1.0 routes for both the server and the client.
 */
module.exports = (
	<Router>
			<Route path="/" component={Container}>
				<IndexRoute component={Main} />
				<Route path="/book" component={BookList} />
				<Route path="/book/:bookId/:page" component={Book} />
			</Route>
	</Router>
);
