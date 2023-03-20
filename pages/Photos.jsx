import React from "react"
import { Context } from "../Context"
import Image from "../components/Image"
import { getClass } from "../utils"

function Photos() {
	const { allPhotos } = React.useContext(Context)

	return (
		<main className="photos">
			{allPhotos.map((photo, index) => {
				return (
					<Image
						key={photo.id}
						img={photo}
						className={getClass(index)}
					/>
				)
			})}
		</main>
	)
}

export default Photos
