import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h1 {
    font-size: 2rem;
    color: ${props => props.theme.title};
    text-align: start;
  }
`

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: ${props => props.theme.background};
  border-radius: 8px;
  margin-bottom: 4rem;

  img {
    max-width: 50%;
    height: auto;
    object-fit: cover;
  }
`

export const IntroContent = styled.div`
  max-width: 50%;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.title};
    line-height: 1.3;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${props => props.theme.subtitle};
  }
`

export const Benefits = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
`

export const ColumnBenefits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
`

export const BaseSpan = styled.span`
  color: ${props => props.theme.white};
  border-radius: 50%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-content: center;
`

export const SpanYellowDark = styled(BaseSpan)`
  background: ${props => props.theme.yellowDark};
`

export const SpanPurple = styled(BaseSpan)`
  background: ${props => props.theme.purple};
`

export const SpanYellow = styled(BaseSpan)`
  background: ${props => props.theme.yellow};
`

export const SpanGray = styled(BaseSpan)`
  background: ${props => props.theme.text};
`
