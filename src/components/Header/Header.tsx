import { HeaderContainer, HeaderRight, Location, HeaderCart } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../contexto/CartContext';

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <HeaderContainer>
      {/* Logo - Voltar para Home */}
      <Link to="/">
        <img src={Logo} alt="Coffee Delivery Logo" />
      </Link>

      <HeaderRight>
        {/* Localização */}
        <Location>
          <MapPin size={20} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>

        {/* Carrinho de compras */}
        <Link to="/cart">
          <HeaderCart>
            <ShoppingCart size={24} weight="fill" />
            {cartItemCount > 0 && <span>{cartItemCount}</span>}
          </HeaderCart>
        </Link>
      </HeaderRight>
    </HeaderContainer>
  );
}
