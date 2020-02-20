import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './componets/app';
import ErrorBoundry from './componets/error-boundry';
import BookstoreService from './services/book-servise';
import { BookStoreServiceProvider } from './componets/bookstore-service';
import store from './store';

const bookstoreService = new BookstoreService();

ReactDom.render(
	<Provider store={store}>
		<ErrorBoundry>
			<BookStoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookStoreServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById("root"),
);
