import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${props => props.theme.button};
  padding: 2rem;
  border-radius: 8px;

  button {
    cursor: pointer;
  }
`;

export const InputBlock = styled.div`
  display: block;
`;

export const InputFlex = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-template-columns: 1fr 1fr;

  input {
    padding: 12px;
    border: 1px solid ${props => props.theme.input};
    background: ${props => props.theme.input};
    border-radius: 8px;
    width: 100%;
  }

  input[name='cep'],
  input[name='numero'],
  input[name='bairro'] {
    width: 200px;
  }

  input[name='uf'] {
    width: 60px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

export const PaymentOptionButton = styled.button<{ $isSelected: boolean }>`
  padding: 8px 16px;
  border: 1px solid #ccc;
  background-color: ${({ $isSelected }) => ($isSelected ? '#8047F8' : '#E6E5E5')};
  color: ${({ $isSelected }) => ($isSelected ? 'white' : 'black')};
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ $isSelected }) => ($isSelected ? props => props.theme.purple : props => props.theme.purpleLight)};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.purple};
  }
`;

export const SectionSub = styled.div`
  display: flex;
  gap: 0.2rem;
  line-height: 1.5rem;

  svg {
    color: ${props => props.theme.yellowDark};
  }

  h5 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  
`;
