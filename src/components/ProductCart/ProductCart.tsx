import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {
  CartContainer,
  Image,
  Tags,
  Name,
  Description,
  Footer,
  Price,
  AddToCartButton,
  QuantityControls,
  QuantityButton,
  QuantityDisplay,
} from './styles';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

interface ProductCartProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  tags: string[];
}

export default function ProductCart({ id, name, description, price, imageUrl, tags }: ProductCartProps) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  // Funções para alterar a quantidade
  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  // Função para adicionar ao carrinho
  const handleAddToCart = () => {
    addItem({ id, name, price, quantity });
    setQuantity(1); // Reseta a quantidade para 1 após adicionar ao carrinho
  };

  return (
    <CartContainer>
      <Image src={imageUrl} alt={name} />
      <Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Footer>
        <Price>
          R$ <strong>{price.toFixed(2)}</strong>
        </Price>
        <QuantityControls>
          <QuantityButton onClick={handleDecreaseQuantity}><Minus/></QuantityButton>
          <QuantityDisplay>{quantity}</QuantityDisplay>
          <QuantityButton onClick={handleIncreaseQuantity}><Plus/></QuantityButton>
        </QuantityControls>
        <AddToCartButton onClick={handleAddToCart}><ShoppingCart/></AddToCartButton>
      </Footer>
    </CartContainer>
  );
}