import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${props => props.theme.purpleLight};
  color: ${props => props.theme.purple};

  span {
    color: ${props => props.theme.purpleDark};
  }
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: ${props => props.theme.yellowLight};
  padding: 0.5rem;
  border-radius: 8px;

  svg {
    color: ${props => props.theme.yellowDark};
    transition: color 0.3s;

    &:hover {
      color: ${props => props.theme.yellow};
    }
  }

  span {
    position: absolute;
    top: -12px;
    right: -12px;
    background-color: ${props => props.theme.yellowDark};
    color: #fff;
    font-size: 0.75rem;
    padding: 0.15rem 0.55rem;
    border-radius: 50%;
  }
`;
