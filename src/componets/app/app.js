import React from 'react';
import { withBookstoreService } from '../hoc'
import {Route, Switch} from 'react-router-dom';
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import Header from "../header/Header";
import style from './app.module.css'
import ShopingCart from "../ShopingCart/ShopingCart";

const App=()=>{
    return (
        <main className={style.main}>
            <Header/>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/cart' component={CartPage} exact/>
            </Switch>
            <ShopingCart/>
        </main>
    )
}

export default withBookstoreService()(App);
