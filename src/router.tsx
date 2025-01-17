import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Checkout from "./pages/Checkout/Checkout";
import Success from './pages/Success/Success'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Success" element={<Success />} />
        </Routes>
    </BrowserRouter>
  )
}
