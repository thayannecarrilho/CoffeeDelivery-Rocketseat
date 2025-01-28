import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {
  CardContainer,
  Image,
  Tags,
  Name,
  Description,
  Footer,
  Price,
  QuantityControls,
  QuantityButton,
  QuantityDisplay,
  AddToCartButton,
} from './styles';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

interface CardProps {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  tags?: string[];
  quantity?: number;
  showRemoveButton?: boolean;
}

export default function Card({
  id,
  name,
  description,
  price,
  imageUrl,
  tags = [],
  quantity: initialQuantity = 1,
  showRemoveButton = false,
}: CardProps) {
  const { addItem, updateItemQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    if (showRemoveButton) updateItemQuantity(id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      if (showRemoveButton) updateItemQuantity(id, quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItem({ id, name, price, imageUrl, quantity });
    setQuantity(1);
  };

  return (
    <CardContainer>
      <Image src={imageUrl} alt={name} />
      {tags.length > 0 && (
        <Tags>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Tags>
      )}
      <Name>{name}</Name>
      {description && <Description>{description}</Description>}
      <Footer>
        <Price>
          R$ <strong>{price.toFixed(2)}</strong>
        </Price>
        <QuantityControls>
          <QuantityButton onClick={handleDecreaseQuantity}>
            <Minus />
          </QuantityButton>
          <QuantityDisplay>{quantity}</QuantityDisplay>
          <QuantityButton onClick={handleIncreaseQuantity}>
            <Plus />
          </QuantityButton>
        </QuantityControls>        
          <AddToCartButton onClick={handleAddToCart}>
            <ShoppingCart />
          </AddToCartButton>
      </Footer>
    </CardContainer>
  );
}
