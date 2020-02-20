const updateCarItems = (cartItems, item, idx) => {
	if (item.count === 0) {
		return [
			...cartItems.slice(0, idx),
			...cartItems.slice(idx + 1),
		];
	}
	if (idx === -1) {
		return [
			...cartItems,
			item,
		];
	}

	return [
		...cartItems.slice(0, idx),
		item,
		...cartItems.slice(idx + 1),
	];
};
const updateCartItem = (book, item = {}, quantity) => {
	const {
		id = book.id, count = 0, title = book.title, price = 0,
	} = item;
	return {
		id,
		title,
		count: count + quantity,
		price: price + (book.price * quantity),
	};
};
const updateOrder = (state, bookId, quantity) => {
	const { bookList: { books }, shoppingCart: { cartItems, orderTotal, countTotal } } = state;
	const book = books.find((item) => item.id === bookId);
	const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
	const item = cartItems[itemIndex];
	const newItem = updateCartItem(book, item, quantity);
	return {
		orderTotal: orderTotal + book.price * quantity,
		countTotal: countTotal + 1 * quantity,
		cartItems: updateCarItems(cartItems, newItem, itemIndex),
	};
};
const updateShoppingCart = (state, action) => {
	if (state === undefined) {
		return {
			cartItems: [],
			orderTotal: 0,
			countTotal: 0,
		};
	}
	switch (action.type) {
	case "BOOK_ADDED_TO_CART":
		return updateOrder(state, action.payload, 1);
	case "BOOK_DEC_TO_CART":
		return updateOrder(state, action.payload, -1);
	case "ALL_BOOKS_REMOVED_FROM_CART":
		const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
		return updateOrder(state, action.payload, -item.count);
	default:
		return state.shoppingCart;
	}
};

export default updateShoppingCart;
