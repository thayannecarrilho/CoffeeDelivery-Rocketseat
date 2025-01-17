import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.card};
    text-align: center;
  }
`;

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;

  img {
    max-width: 50%;
    height: auto;
    object-fit: cover;
  }
`;

export const IntroContent = styled.div`
  max-width: 50%;
  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.title};
    line-height: 1.3;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.subtitle};
  }
`;

export const Benefits = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.yellowDark};
    }

    color: ${({ theme }) => theme.text};
    font-size: 1rem;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
