import React from "react"


function useHover(){
	
	const [isHovered, setIsHovered] = React.useState(false)

    const enter = () => {
        setIsHovered(true)
    }

    const leave = () => {
        setIsHovered(false)
    }

	return (
		
	)
}

export default useHover