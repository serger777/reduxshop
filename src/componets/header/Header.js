import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { connect } from "react-redux";

const Header = ({ numItems, countTotal }) => (
	<header className={style.header}>
		<Link className={style.link} to="/">
			<h3>SHOP</h3>
		</Link>
		<Link className={style.link} to="cart">
			{numItems>0 && <p >{numItems} items {countTotal}</p> }
		</Link>

	</header>
);

const mapStateToProps = ({ shoppingCart: { cartItems, countTotal } }) => ({
	numItems: cartItems.length,
	countTotal,
});

export default connect(mapStateToProps)(Header);
