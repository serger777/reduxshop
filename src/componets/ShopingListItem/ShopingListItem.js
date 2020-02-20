import React from 'react';
import style from "./ShopingListItem.module.css";

const ShopingListItem = ({ item }) => {
	const {
		total, name, count, inc, dec, dell,
	} = item;
	return (
		<div className={style.wrap}>
			<div className={style.item_wrap}><span>{name}</span></div>
			<div className={style.item_wrap}>{total} </div>
			<div className={style.item_wrap}>
				<span>{count}</span></div>
			<div className="wrap-button">
				<button>-</button>
				<button>+</button>
				<button>del</button>
			</div>
		</div>
	);
};

export default ShopingListItem;
