import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

import {ContextProvider} from "./Context"
import App from "./App"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<Photos />} />
        <Route path="cart" element={<Cart />} />
    </Route>

))
    
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>
  );
