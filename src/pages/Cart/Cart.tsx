// Arquivo: Cart.tsx

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { AddressForm } from '../../components/AddressForm/AddressForm';
import {
  CartContainer,
  CartTotal,
  CoffeeSelection,
  CheckoutButton,
  LayoutContainer,
  AddressContainer,
  CoffeeItem,
  CoffeeImage,
  CoffeeDetails,
  SpaceBetween,
  QuantityControls,
  RemoveButton,
} from './styles';
import Header from '../../components/Header/Header';
import { Trash } from 'phosphor-react';

export default function Cart() {
  const { cartItems, totalAmount, addressData, clearCart, removeItem, updateItemQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  function handleCheckout() {
    if (!addressData) {
      alert('Por favor, preencha o endereço antes de finalizar a compra.');
      return;
    }
    navigate('/success', { state: { addressData } });
    clearCart();
  }

  return (
    <>
      <Header />
      <CartContainer>
        <LayoutContainer>
          <AddressContainer>
            <AddressForm />
          </AddressContainer>
          <CoffeeSelection>
            <h2>Seu carrinho</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CoffeeItem key={item.id}>
                  <CoffeeImage src={item.imageUrl} alt={item.name} />
                  <CoffeeDetails>
                    <SpaceBetween>
                    <h3>{item.name}</h3>
                    <span>R$ {item.price.toFixed(2)}</span>
                    </SpaceBetween>
                    <div>
                    <QuantityControls>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </QuantityControls>
                    <RemoveButton onClick={() => removeItem(item.id)}>
                      <Trash size={16} /> REMOVER
                    </RemoveButton>                      
                    </div>                   
                    
                  </CoffeeDetails>
                </CoffeeItem>
              ))
            ) : (
              <p>Seu carrinho está vazio.</p>
            )}
            <CartTotal>
              <span>Total:</span>
              <strong>R$ {totalAmount.toFixed(2)}</strong>
            </CartTotal>
            <CheckoutButton onClick={handleCheckout} disabled={cartItems.length === 0}>
              Finalizar Compra
            </CheckoutButton>
          </CoffeeSelection>
        </LayoutContainer>
      </CartContainer>
    </>
  );
}
