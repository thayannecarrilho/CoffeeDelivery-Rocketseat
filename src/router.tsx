import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Success from './pages/Success/Success';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} /> {/* Corrigido o caminho para letras minúsculas */}
      </Routes>
    </BrowserRouter>
  );
}
