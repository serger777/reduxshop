import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookListItem from '../book-list-item';
import withBookstoreService from "../hoc/with-bookstore-service";
import { fetchBooks, onAddedToCart } from '../../actions';
import style from './book-list.module.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const BookList = ({ books, onAddedToCart }) => (
	<ul className={style.wrap}>
		{
			books.map((book) => (
				<li className={style.item} key={book.id}>
					<BookListItem
						book={book}
						onAddedToCart={() => onAddedToCart(book.id)}
					/>
				</li>
			))
		}
	</ul>
);

class BookListContainer extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const {
			books, loading, error, onAddedToCart,
		} = this.props;

		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator error={error.message} />;
		}
		return <BookList books={books}
			onAddedToCart={onAddedToCart}
		/>;
	}
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => ({ books, loading, error });
const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return bindActionCreators({
		fetchBooks: fetchBooks(bookstoreService),
		onAddedToCart,
	}, dispatch);
};

export default withBookstoreService()(
	connect(mapStateToProps, mapDispatchToProps)(BookListContainer),
);
