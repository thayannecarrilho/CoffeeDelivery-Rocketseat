// ModalCart.tsx
import * as Dialog from '@radix-ui/react-dialog';
import { ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalCloseButton,
  CartItem,
  CartDetails,
  CartFooter,
  FixedCartButton,
  ModalRoot,
} from './styles';
import { Link } from 'react-router-dom';

export function ModalCart() {
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <ModalRoot>      
      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>Itens no Carrinho</ModalTitle>
          <ModalCloseButton aria-label="Fechar">&times;</ModalCloseButton>

          <div className="cart-items-container">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.imageUrl} alt={item.name} />
                  <CartDetails>
                    <div>
                    <strong>{item.name}</strong>
                    <strong>R$ {item.price.toFixed(2)}</strong>
                    </div>
                    <span>Quantidade: {item.quantity}</span>                    
                  </CartDetails>        
                </CartItem>
                
                
              ))
            ) : (
              <p>Seu carrinho está vazio!</p>
            )}
          </div>

          <CartFooter>
            <div>
              <strong>Total:</strong>
              <span>R$ {totalAmount.toFixed(2)}</span>
            </div>
            <Link to="/cart">
              <button>Ir para o carrinho</button>
            </Link>
          </CartFooter>
        </ModalContent>
      </Dialog.Portal>

      {/* Ícone fixo no canto inferior direito */}
      {cartItems.length > 0 && (
        <Dialog.Trigger asChild>
          <FixedCartButton>
            <ShoppingCart size={24} weight="fill" />
            <span>Conferir Carrinho</span>
          </FixedCartButton>
        </Dialog.Trigger>
      )}
    </ModalRoot>
  );
}
