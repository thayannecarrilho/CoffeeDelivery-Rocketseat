import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.card};
  border-radius: 6px 36px;
  padding: 1.5rem;
  text-align: center;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  span {
    background: ${({ theme }) => theme.yellowLight};
    color: ${({ theme }) => theme.yellowDark};
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
  }
`;

export const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.subtitle};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.label};
  margin-bottom: 1.5rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.subtitle};
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${({ theme }) => theme.button};
  border-radius: 8px;
  padding: 0.5rem;
`;

export const QuantityButton = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.purpleLight};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.purpleDark};
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.title};
`;

export const AddToCartButton = styled.button`
  background: ${({ theme }) => theme.purpleDark};
  color: ${({ theme }) => theme.card};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  font-size: 1.25rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.purpleLight};
  }
`;
