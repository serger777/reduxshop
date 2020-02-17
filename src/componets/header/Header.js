import React from 'react';
import style from './Header.module.css'

const Header =({numItems, total})=>{
    return(
        <header className={style.header}>
            <a href="/">SHOP</a>
            <p>{numItems} items {total}</p>
        </header>
    )
}
export default Header;
