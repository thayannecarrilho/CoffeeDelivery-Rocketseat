import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 1rem;
`;

export const Details = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.button};
  border-radius: 8px;
  padding: 0.5rem;
`;

export const QuantityDisplay = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.title};
`;

export const QuantityButton = styled.button`
  color: ${props => props.theme.purple};
  font-weight: bold;
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

export const Quantity = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.purpleDark};
`;

export const RemoveButton = styled.button`
  background: transparent;
  color: ${props => props.theme.purpleDark};
  border: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;

  &:hover {
    color: red;
  }
`;

export const Price = styled.span`
  font-weight: bold;
  margin-left: 1rem;
`;
