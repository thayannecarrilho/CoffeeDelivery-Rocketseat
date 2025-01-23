import AppRouter from "./router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CartProvider } from './contexts/CartContext'; // Importando o CartProvider

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider> 
        <AppRouter /> 
        <GlobalStyle /> 
      </CartProvider>
    </ThemeProvider>
  );
}
