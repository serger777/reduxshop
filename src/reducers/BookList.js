const updateBookLIst = (state, action) => {
	if (state === undefined) {
		return {
			books: [],
			loading: true,
			error: null,
		};
	}
	switch (action.type) {
	case 'FETCH_BOOKS_REQUESTED':
		return {
			books: [],
			loading: true,
			error: null,
		};
	case 'FETCH_BOOKS_SUCCES':
		return {
			books: action.payload,
			loading: false,
			error: null,
		};
	case 'FETCH_BOOKS_FAILURE':
		return {
			books: [],
			loading: false,
			error: action.payload,
		};
	default:
		return state.bookList;
	}
};

export default updateBookLIst;
