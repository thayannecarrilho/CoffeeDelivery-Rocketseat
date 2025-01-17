import { useContext } from "react"
import { CartContext } from "../../contexto/CartContext"
import { CartItem } from "../../components/CartItem/CartItem";
import { CartContainer, CartTotal } from './styles'

export default function Cart() {
  const { cartItems, totalAmount } = useContext(CartContext);
  
  return (
    <CartContainer>
      <h2>Seu carrinho</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} /> // Passando a propriedade 'item' corretamente
      ))}
        <CartTotal>
          <span>Total:</span>
          <strong>R${totalAmount.toFixed(2)}</strong>
        </CartTotal>
      
    </CartContainer>


    
  )
}
