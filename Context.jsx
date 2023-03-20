import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
	const [allPhotos, setAllPhotos] = useState([])
	const [cartItems, setCartItems] = useState([])

	const url =
		"https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setAllPhotos(data))
	}, [])

	const toggleFavourite = (id) => {
		const newPhotos = allPhotos.map((photo) => {
			if (photo.id === id) {
				photo.isFavorite = !photo.isFavorite
			}

			return photo
		})

		setAllPhotos(newPhotos)
	}

	const addToCart = (newItem) => {
		setCartItems((prevCart) => [...prevCart, newItem])
	}

	return (
		<Context.Provider
			value={{ allPhotos, toggleFavourite, cartItems, addToCart }}
		>
			{children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }
