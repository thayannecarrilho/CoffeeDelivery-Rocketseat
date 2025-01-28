import { HeaderContainer, HeaderRight, Location, HeaderCart } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


export default function Header() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={Logo} alt='Coffee Delivery Logo' />
      </Link>
      <HeaderRight>
        <Location>
          <MapPin size={20} weight='fill' />
          <span>São Paulo, SP</span>
        </Location>
        <Link to='/cart'>
          <HeaderCart>
            <ShoppingCart size={24} weight='fill' />
            {cartItemCount > 0 && <span>{cartItemCount}</span>}
          </HeaderCart>
        </Link>
       
      </HeaderRight>
    </HeaderContainer>
  );
}
