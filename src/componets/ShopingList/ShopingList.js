import React from 'react';
import { connect } from "react-redux";
import style from "./ShopingList.module.css";
import { onAddedToCart, onDecToCart, allBookRemove } from "../../actions";

const ShopingList = ({
	items, total, inc, dec, dell,
}) => (
	<div className={style.wrap}>
		<div className={style.wrap_item}>
			<div className={style.item}>title</div>
			<div className={style.item}>total </div>
			<div className={style.item}>
                    count</div>
			<div className={style.item}>

			</div>
		</div>
		{
			items.map((item) => {
				const {
					id, title, count, price,
				} = item;
				return (
					<div className={style.wrap_item} key={id}>
						<div className={style.item}>{title}</div>
						<div className={style.item}>{price}$ </div>
						<div className={style.item}>
							<span>{count}</span></div>
						<div className="wrap-button">
							<button onClick={() => inc(id)}>-</button>
							<button onClick={() => dec(id)}>+</button>
							<button onClick={() => dell(id)}>del</button>
						</div>
					</div>
				);
			})
		}
		<div className={style.order_tottal}>TOTAL: {total}$</div>
	</div>

);
const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => ({
	items: cartItems,
	total: orderTotal,
});
const mapDispatchToProps = {
	dec: onAddedToCart,
	inc: onDecToCart,
	dell: allBookRemove,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopingList);
