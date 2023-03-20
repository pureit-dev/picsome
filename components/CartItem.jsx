import React from "react"
import { Context } from "../Context"

function CartItem({ item, price }) {
	const { removeItemFromCart } = React.useContext(Context)
	const [isHovered, setIsHovered] = React.useState(false)

	return (
		<div className="cart-item">
			<i
				className={
					isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
				}
				onClick={() => removeItemFromCart(item)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			></i>
			<img src={item.url} width="130px" />
			<p>{price}</p>
		</div>
	)
}

export default CartItem
