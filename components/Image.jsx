import React from "react"
import { Context } from "../Context"

function Image({ img, className }) {
	const [isHovered, setIsHovered] = React.useState(false)
	const { toggleFavourite, updateCart, cartItems } = React.useContext(Context)
	const { id, isFavorite, url } = img
	const heartIcon = () => {
		if (isFavorite) {
			return (
				<i
					className="ri-heart-fill favorite"
					onClick={() => toggleFavourite(id)}
				></i>
			)
		} else if (isHovered) {
			return (
				<i
					className="ri-heart-line favorite"
					onClick={() => toggleFavourite(id)}
				></i>
			)
		}
	}

	const cartIcon = (id) => {
		if (cartItems.find((item) => item.id === id)) {
			return (
				<i
					className="ri-shopping-cart-fill cart"
					onClick={() => updateCart(img)}
				></i>
			)
		} else if (isHovered) {
			return (
				<i
					className="ri-add-circle-line cart"
					onClick={() => updateCart(img)}
				></i>
			)
		}
	}

	return (
		<div
			className={`${className} image-container`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={url} className="image-grid" />
			{heartIcon()}
			{cartIcon(id)}
		</div>
	)
}

export default Image
