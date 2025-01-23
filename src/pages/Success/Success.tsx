import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { SuccessContainer, DeliveryInfo, InfoItem } from './styles'
import Header from '../../components/Header/Header'
import deliveryImage from '../../assets/Illustration.png' // Exemplo de imagem da moto
import { MapPin, Money, Timer } from 'phosphor-react'

export default function Success() {
  const { addressData } = useContext(CartContext)

  if (!addressData) {
    return <p>Informações de endereço não encontradas.</p>
  }

  return (
    <>
      <Header />
      <SuccessContainer>
        <div>
          <h1>Uhuu!! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <DeliveryInfo>
            <InfoItem>
              <MapPin size={24} />
              <p>
                Entrega em{' '}
                <strong>
                  {`${addressData.rua}, ${addressData.numero} - ${addressData.bairro}, ${addressData.cidade} - ${addressData.uf}`}
                </strong>
              </p>
            </InfoItem>
            <InfoItem>
              <Timer size={24} />
              <p>
                Previsão de Entrega <strong>20 min - 30 min</strong>
              </p>
            </InfoItem>
            <InfoItem>
              <Money size={24} />
              <p>
                Pagamento na entrega <strong>{addressData.paymentMethod}</strong>
              </p>
            </InfoItem>
          </DeliveryInfo>
        </div>
        <img src={deliveryImage} alt="Moto de entrega" />
      </SuccessContainer>
    </>
  )
}
