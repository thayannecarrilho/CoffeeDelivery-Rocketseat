import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CartItem } from '../../components/CartItem/CartItem'
import { AddressForm } from '../../components/AddressForm/AddressForm'
import {
  CartContainer,
  CartTotal,
  CoffeeSelection,
  CheckoutButton,
  LayoutContainer,
  AddressContainer,
} from './styles'
import Header from '../../components/Header/Header'

export default function Cart() {
  const { cartItems, totalAmount, addressData, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  function handleCheckout() {
    if (!addressData) {
      alert('Por favor, preencha o endereço antes de finalizar a compra.')
      return
    }

    navigate('/success', { state: { addressData } })
    clearCart()
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
              cartItems.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <p>Seu carrinho está vazio.</p>
            )}

            <CartTotal>
              <span>Total:</span>
              <strong>R$ {totalAmount.toFixed(2)}</strong>
            </CartTotal>

            <CheckoutButton onClick={handleCheckout}>
              Finalizar Compra
            </CheckoutButton>
          </CoffeeSelection>
        </LayoutContainer>
      </CartContainer>
    </>
  )
}
