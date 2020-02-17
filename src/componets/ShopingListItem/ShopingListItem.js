import React from 'react';
import style from "../book-list-item/book-list-item.module.css";

const ShopingListItem =({book})=>{
    // const {title, author, price, imgUrl}= book;
    return (
        <div className={style.wrap}>
            {/*<img className={style.image} src={imgUrl} alt=""/>*/}
            {/*<span className={style.item}>title: {title}</span>*/}
            {/*<span className={style.item}>author: {author}</span>*/}
            {/*<span className={style.item}>price: {price}</span>*/}

        </div>
    )
}

export default ShopingListItem;
