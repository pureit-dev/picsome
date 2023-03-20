import React from "react"
import { Outlet } from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
	return (
		<div>
			<Header />
            <main>
                <Outlet />
            </main>
		</div>
	)
}

export default App
