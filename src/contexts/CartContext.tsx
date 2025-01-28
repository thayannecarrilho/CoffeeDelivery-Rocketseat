import { createContext, useState, ReactNode } from 'react';

// Interface para itens do carrinho
interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

// Interface para dados de endereço e forma de pagamento
interface AddressData {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  paymentMethod: string;
}

// Interface do contexto do carrinho
interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  totalAmount: number;
  addressData: AddressData | null;
  setAddressData: (data: AddressData) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => {},
  updateItemQuantity: () => {},
  removeItem: () => {},
  totalAmount: 0,
  addressData: null,
  setAddressData: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [addressData, setAddressData] = useState<AddressData | null>(null);

  // Adiciona um item ao carrinho, se já existir, atualiza a quantidade
  function addItem(item: CartItem) {
    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      updateItemQuantity(item.id, itemExists.quantity + item.quantity);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  }

  // Atualiza a quantidade de um item no carrinho
  function updateItemQuantity(id: number, quantity: number) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  // Remove um item do carrinho
  function removeItem(id: number) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  // Limpa o carrinho após finalizar o pedido
  function clearCart() {
    setCartItems([]);
  }

  // Calcula o valor total do carrinho
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        updateItemQuantity,
        removeItem,
        totalAmount,
        addressData,
        setAddressData,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
