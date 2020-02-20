const bookRequested = () => ({
	type: 'FETCH_BOOKS_REQUESTED',
});
const booksLoaded = (newBooks) => ({
	type: 'FETCH_BOOKS_SUCCES',
	payload: newBooks,
});

const booksError = (error) => ({
	type: 'FETCH_BOOKS_FAILURE',
	payload: error,
});
const onAddedToCart = (bookId) => ({
	type: 'BOOK_ADDED_TO_CART',
	payload: bookId,
});
const onDecToCart = (bookId) => ({
	type: 'BOOK_DEC_TO_CART',
	payload: bookId,
});
const allBookRemove = (bookId) => ({
	type: 'ALL_BOOKS_REMOVED_FROM_CART',
	payload: bookId,
});

const fetchBooks = (bookstoreService) => () => (dispatch) => {
	dispatch(bookRequested());
	bookstoreService.getBooks()
		.then((data) => dispatch(booksLoaded(data)))
		.catch((err) => dispatch(booksError(err)));
};
export {
	fetchBooks,
	onAddedToCart,
	onDecToCart,
	allBookRemove,
};
