import { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {
  FormContainer,
  InputFlex,
  InputBlock,
  SectionSub,
  FormGroup,
  SectionTitle,
  PaymentOptions,
  PaymentOptionButton
} from './styles';
import {
  MapPinLine,
  CurrencyDollar,
  Money,
  Bank,
  CreditCard
} from 'phosphor-react';

export function AddressForm() {
  const { setAddressData } = useContext(CartContext);
  const [formData, setFormData] = useState({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    paymentMethod: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSelection = (method: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.cep || !formData.rua || !formData.numero || !formData.bairro || !formData.cidade || !formData.uf || !formData.paymentMethod) {
      alert('Por favor, preencha o endereço e selecione uma forma de pagamento.');
      return;
    }

    setAddressData(formData);
    console.log('Dados enviados:', formData);
  };

  return (
    <>
      <SectionTitle>Complete seu pedido</SectionTitle>
      <FormContainer onSubmit={handleSubmit}>
        <SectionSub>
          <MapPinLine size={24} />
          <div>
            <h5>Endereço de entrega</h5>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </SectionSub>

        <FormGroup>
          <InputBlock>
            <input placeholder='CEP' name='cep' value={formData.cep} onChange={handleChange} />
          </InputBlock>
          <InputBlock>
            <input placeholder='Rua' name='rua' value={formData.rua} onChange={handleChange} />
          </InputBlock>
          <InputFlex>
            <input placeholder='Número' name='numero' value={formData.numero} onChange={handleChange} />
            <input placeholder='Complemento (Opcional)' name='complemento' value={formData.complemento} onChange={handleChange} />
          </InputFlex>
          <InputFlex>
            <input placeholder='Bairro' name='bairro' value={formData.bairro} onChange={handleChange} />
            <input placeholder='Cidade' name='cidade' value={formData.cidade} onChange={handleChange} />
            <input placeholder='UF' name='uf' value={formData.uf} onChange={handleChange} />
          </InputFlex>
        </FormGroup>

        <SectionSub>
          <CurrencyDollar size={24} />
          <div>
            <h5>Pagamento</h5>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </SectionSub>

        <PaymentOptions>
          <PaymentOptionButton
            type='button'
            $isSelected={formData.paymentMethod === 'Cartão de Crédito'}
            onClick={() => handlePaymentSelection('Cartão de Crédito')}
          >
            <span><CreditCard size={20} /> Cartão de Crédito</span>
          </PaymentOptionButton>
          <PaymentOptionButton
            type='button'
            $isSelected={formData.paymentMethod === 'Cartão de Débito'}
            onClick={() => handlePaymentSelection('Cartão de Débito')}
          >
            <span><Bank size={20} /> Cartão de Débito</span>
          </PaymentOptionButton>
          <PaymentOptionButton
            type='button'
            $isSelected={formData.paymentMethod === 'Dinheiro'}
            onClick={() => handlePaymentSelection('Dinheiro')}
          >
            <Money size={20} /> Dinheiro
          </PaymentOptionButton>
        </PaymentOptions>
        <button type='submit'>Salvar Endereço</button>
      </FormContainer>
    </>
  );
}
