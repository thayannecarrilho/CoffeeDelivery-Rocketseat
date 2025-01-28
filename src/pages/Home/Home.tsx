import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import {
  HomeContainer,
  IntroContainer,
  ProductsGrid,
  IntroContent,
  ColumnBenefits,
  Benefits,
  BenefitItem,
  SpanGray,
  SpanPurple,
  SpanYellow,
  SpanYellowDark,
} from './styles'
import CoffeeImage from '../../assets/Copo.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import 'styled-components'
import { products } from '../../../products'
import { ModalCart } from '../../components/ModalCart/ModalCart'

export default function Home() {
  return (
    <>
      <Header />
      <ModalCart />
      <HomeContainer>
        <IntroContainer>
          <IntroContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.
            </p>
            <Benefits>
              <ColumnBenefits>
                <BenefitItem>
                  <SpanYellowDark><ShoppingCart /></SpanYellowDark>
                  <span>Compra simples e segura</span>
                </BenefitItem>
                <BenefitItem>
                  <SpanGray><Package /></SpanGray>
                  <span>Embalagem mantém o café intacto</span>
                </BenefitItem>
              </ColumnBenefits>
              <ColumnBenefits>
                <BenefitItem>
                  <SpanYellow><Timer /></SpanYellow>
                  <span>Entrega rápida e rastreada</span>
                </BenefitItem>
                <BenefitItem>
                  <SpanPurple><Coffee /></SpanPurple>
                  <span>O café chega fresquinho até você</span>
                </BenefitItem>
              </ColumnBenefits>
            </Benefits>
          </IntroContent>
          <img src={CoffeeImage} alt="Copo de café com grãos" />
        </IntroContainer>

        <h1>Nossos cafés</h1>
        <ProductsGrid>
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              tags={product.tags}
            />
          ))}
        </ProductsGrid>
      </HomeContainer>
    </>
  )
}
