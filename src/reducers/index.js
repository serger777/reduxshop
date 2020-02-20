import updateBookLIst from './BookList';
import updateShoppingCart from './ShoppingCart';

const reducer = (state, action) => ({
	bookList: updateBookLIst(state, action),
	shoppingCart: updateShoppingCart(state, action),
});

export default reducer;
