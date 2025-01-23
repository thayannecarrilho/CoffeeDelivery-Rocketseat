import { Plus, Minus, Trash } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {
  CartItemContainer,
  Image,
  Details,
  Name,
  Controls,
  QuantityControls,
  QuantityDisplay,
  QuantityButton,
  RemoveButton,
  Price
} from './styles';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    imageUrl?: string;
    quantity: number;
  };
}

export function CartItem({ item }: CartItemProps) {
  const { updateItemQuantity, removeItem } = useContext(CartContext);

  function handleIncreaseQuantity() {
    updateItemQuantity(item.id, item.quantity + 1);
  }

  function handleDecreaseQuantity() {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  }

  function handleRemoveItem() {
    removeItem(item.id);
  }

  return (
    <CartItemContainer>
      <Image src={item.imageUrl} alt={item.name} />
      <Details>
        <Name>{item.name}</Name>
        <Controls>
          <QuantityControls>
            <QuantityButton onClick={handleDecreaseQuantity}><Minus /></QuantityButton>
            <QuantityDisplay>{item.quantity}</QuantityDisplay>
            <QuantityButton onClick={handleIncreaseQuantity}><Plus /></QuantityButton>
          </QuantityControls>
          <RemoveButton onClick={handleRemoveItem}>
            <Trash size={16} /> Remover
          </RemoveButton>
        </Controls>
      </Details>
      <Price>R$ {item.price.toFixed(2)}</Price>
    </CartItemContainer>
  );
}
