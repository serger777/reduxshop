import React from 'react';
import { BookStoreServiceConsumer } from "../bookstore-service";

const withBookstoreService = () => (Wrapped) => (props) => (
	<BookStoreServiceConsumer>
		{
			(bookstoreService) => (<Wrapped {...props}
				bookstoreService={bookstoreService}
			/>)
		}
	</BookStoreServiceConsumer>
);
export default withBookstoreService;
