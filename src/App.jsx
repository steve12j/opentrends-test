import Layout from "@/scenes/layout"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import ProductsListing from "@/scenes/productsListing"
import Cart from "@/scenes/cart"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsListing />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
          {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
