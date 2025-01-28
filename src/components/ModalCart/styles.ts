// styles.ts
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const ModalRoot = styled(Dialog.Root)`
  position: absolute;
`;


export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Permite o scroll quando o conteúdo ultrapassar a altura */
`;

export const ModalTitle = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ModalCloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.hover};
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const CartDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  span {
    font-size: 0.875rem;
    color: #666;
  }
    div {
    display: flex;
    justify-content: space-between;
    }
`;

export const CartFooter = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    width: 100%;
    padding: 0.75rem;
    background: #8257e5;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
      background: #6842c2;
    }
  }
`;

// Estilos para o ícone fixo do carrinho
export const FixedCartButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.purpleDark};
  }

  span {
    margin-left: 8px;
    font-size: 16px;
  }
`;

