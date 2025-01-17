import { createContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  totalAmount: number;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => {},
  updateItemQuantity: () => {},
  removeItem: () => {},
  totalAmount: 0,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Função para adicionar um item ao carrinho
  function addItem(item: CartItem) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  // Função para atualizar a quantidade de um item
  function updateItemQuantity(id: number, quantity: number) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  // Função para remover um item do carrinho
  function removeItem(id: number) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  // Calculando o valor total do carrinho
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
