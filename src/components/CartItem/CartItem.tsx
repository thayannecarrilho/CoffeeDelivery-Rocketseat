import { Trash } from 'phosphor-react'; // Ajuste conforme biblioteca de ícones
import { useContext } from 'react';
import { CartContext } from '../../contexto/CartContext';
import { CartItemContainer, Image, Details, Name, Controls, QuantityButton, RemoveButton, Price, Quantity } from './styles'

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
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
          <QuantityButton onClick={handleDecreaseQuantity}>-</QuantityButton>
          <Quantity>{item.quantity}</Quantity>
          <QuantityButton onClick={handleIncreaseQuantity}>+</QuantityButton>
          <RemoveButton onClick={handleRemoveItem}>
            <Trash size={16} /> Remover
          </RemoveButton>
        </Controls>
      </Details>
      <Price>R$ {item.price.toFixed(2)}</Price>
    </CartItemContainer>
  );
}