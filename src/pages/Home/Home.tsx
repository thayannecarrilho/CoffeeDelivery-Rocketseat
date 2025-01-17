
import Header from '../../components/Header/Header';
import  ProductCart  from '../../components/ProductCart/ProductCart';
import { HomeContainer, IntroContainer, ProductsGrid, IntroContent, Benefits } from './styles';
import CoffeeImage from '../../assets/Copo.png'; // Certifique-se de que o caminho está correto

// Mock de produtos para exemplo
const products = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: '/images/expresso-tradicional.png',
    tags: ['Tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageUrl: '/images/expresso-americano.png',
    tags: ['Tradicional'],
  },
  {
    id: 3,
    name: 'Café com Leite',
    description: 'Meia a meia de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageUrl: '/images/cafe-com-leite.png',
    tags: ['Tradicional', 'Com Leite'],
  },
  // Adicione mais produtos conforme necessário...
];

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        {/* Introdução */}
        <IntroContainer>
          <IntroContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.
            </p>
            <Benefits>
              <div>
                <span>🛒</span>
                Compra simples e segura
              </div>
              <div>
                <span>📦</span>
                Embalagem mantém o café intacto
              </div>
              <div>
                <span>🚚</span>
                Entrega rápida e rastreada
              </div>
              <div>
                <span>☕</span>
                O café chega fresquinho até você
              </div>
            </Benefits>
          </IntroContent>
          <img src={CoffeeImage} alt="Copo de café com grãos" />
        </IntroContainer>

        {/* Listagem de Produtos */}
        <h1>Nossos cafés</h1>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCart
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
  );
}
