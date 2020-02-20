import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withBookstoreService } from '../hoc';
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import Header from "../header/Header";
import style from './app.module.css';
import ShopingCart from "../ShopingCart/ShopingCart";

const App = () => (
	<main className={style.main}>
		<Header />
		<Switch>
			<Route path='/' component={HomePage} exact />
			<Route path='/cart' component={CartPage} exact />
		</Switch>
		<ShopingCart />
	</main>
);

export default withBookstoreService()(App);
