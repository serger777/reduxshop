import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import {booksLoaded} from '../../actions'
import { compose } from '../../utils';
import style from './book-list.module.css'

class BookList extends Component{
    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data)
    }

    render(){
        const {books}= this.props;
        console.log(this.props);
        return (
            <ul className={style.wrap}>
                {
                    books.map(book=>{
                        return(
                            <li  className={style.item} key={book.id}>
                                <BookListItem book={book}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
};
const mapStateToProps = ({books})=>{
    return {books}
};
const mapDispatchToProps ={
        booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(BookList)
