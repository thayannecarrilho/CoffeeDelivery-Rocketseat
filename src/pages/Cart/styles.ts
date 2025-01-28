import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 4rem;
`;

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

export const AddressContainer = styled.div`
  flex: 1;
`;

export const CoffeeSelection = styled.div`
  flex: 1;
`;

export const CoffeeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.card};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CoffeeImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

export const CoffeeDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme.text};
  }
  span {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.subtitle};
  }
  div{
    display: flex;
    gap: 1rem;
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;

`


export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.button};
  border: none;
  padding: 0.5rem 1rem;
  Border-radius: 6px;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: ${(props) => props.theme.purple};
    &:hover {
      color: ${(props) => props.theme.purpleDark};
    }
  }
  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.button};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${(props) => props.theme.hover};
    color: red;
  }
  svg {
    margin-right: 0.5rem;
  }
`;

export const CartTotal = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  width: 100%;
  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.card};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover:enabled {
    background: ${(props) => props.theme.purpleDark};
  }

  &:disabled {
    background: ${(props) => props.theme.hover};
    cursor: not-allowed;
  }
`;
