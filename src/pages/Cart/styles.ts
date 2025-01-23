import styled from 'styled-components'

export const CartContainer = styled.div`
  padding: 4rem;
`

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`

export const AddressContainer = styled.div`
  flex: 1;
`

export const CoffeeSelection = styled.div`
  flex: 1;
`

export const CartTotal = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`

export const CheckoutButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  width: 100%;
  background: ${props => props.theme.purple};
  color: ${props => props.theme.card};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover:enabled {
    background: ${props => props.theme.purpleDark};
  }

  &:disabled {
    background: ${props => props.theme.hover};
    cursor: not-allowed;
  }
`
