import React from 'react';
import style from './book-list-item.module.css';

const BookListItem =({book})=>{
    const {title, author, price, imgUrl}= book;
    return (
        <div className={style.wrap}>
            <img className={style.image} src={imgUrl} alt=""/>
            <span className={style.item}>title: {title}</span>
            <span className={style.item}>author: {author}</span>
            <span className={style.item}>price: {price}</span>
            <button>add</button>
        </div>
    )
};

export default BookListItem;
