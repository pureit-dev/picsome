import React, { useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"
const price = 5.99

function Cart() {
	const { cartItems, setCartItems } = useContext(Context)
	const [orderPlaced, setOrderPlaced] = React.useState(false)

	const cartItemElements = cartItems.map((item) => (
		<CartItem
			key={item.id}
			item={item}
			price={price.toLocaleString("en-GB", {
				style: "currency",
				currency: "GBP",
			})}
		/>
	))

	const placeOrder = () => {
		setOrderPlaced(true)
		console.log("order placed")
		setTimeout(() => {
			setCartItems([])
			setOrderPlaced(false)
		}, 3000)
	}

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElements}
			<p className="total-cost">
				Total:{" "}
				{(cartItems.length * price).toLocaleString("en-GB", {
					style: "currency",
					currency: "GBP",
				})}
			</p>
			<div className="order-button">
				{cartItems.length > 0 && <button onClick={() => placeOrder()}>
					{!orderPlaced ? "Place Order" : "Ordering"}
				</button>}
			</div>
		</main>
	)
}

export default Cart
