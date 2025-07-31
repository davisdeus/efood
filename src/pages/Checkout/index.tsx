import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useCompraMutation } from '../../servisces/api'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import ReactInputMask from 'react-input-mask'

import { abrir, limpar } from '../../store/reduces/cart'
import Button from '../../components/Button'

import * as S from './styles'
import { RootReducer } from '../../store'
import { obtertTotalPreco, parseToBrl } from '../../utils'

const Checkout = ({ onClose }: { onClose: () => void }) => {
  const [pagarCartao, setPagarCartao] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  const navigate = useNavigate()

  const [compra, { data, isSuccess, isLoading }] = useCompraMutation()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      nomeCartao: '',
      numeroCartao: '',
      numeroCvv: '',
      mesVencimento: '',
      anoVencimento: '',
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
    },
    validationSchema: Yup.object({
      // Entrega
      nome: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatorio'),
      endereco: Yup.string().required('O campo é obrigatorio'),
      cidade: Yup.string().required('O campo é obrigatorio'),
      cep: Yup.string()
        .min(9, 'O campo deve ter 9 caracteres')
        .max(9)
        .required('O campo é obrigatorio'),
      numero: Yup.string().required('O campo é obrigatorio'),
      complemento: Yup.string(),

      // cartão de crédito
      nomeCartao: Yup.string().when(() =>
        pagarCartao
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      ),
      numeroCartao: Yup.string().when(() =>
        pagarCartao
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      ),
      numeroCvv: Yup.string().when(() =>
        pagarCartao
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      ),
      mesVencimento: Yup.string().when(() =>
        pagarCartao
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      ),
      anoVencimento: Yup.string().when(() =>
        pagarCartao
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      ),
    }),
    onSubmit: (values) => {
      compra({
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento,
          },
          payment: {
            card: {
              name: values.nomeCartao,
              number: values.numeroCartao,
              code: Number(values.numeroCvv),
              expires: {
                month: Number(values.mesVencimento),
                year: Number(values.anoVencimento),
              },
            },
          },
        },
        produtos: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
      })
    },
  })
  const mensageError = (fieldName: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors
    const estaErrado = estaAlterado && estaInvalido

    return estaErrado
  }

  const continuarPagamento = async () => {
    await form.setTouched({
      nome: true,
      endereco: true,
      cidade: true,
      cep: true,
      numero: true,
      nomeCartao: true,
      numeroCartao: true,
      numeroCvv: true,
      mesVencimento: true,
      anoVencimento: true,
    })

    const validaEntrega =
      !form.errors.nome &&
      !form.errors.endereco &&
      !form.errors.cidade &&
      !form.errors.cep &&
      !form.errors.numero

    if (validaEntrega) {
      setPagarCartao(true)
    }
  }

  const openCart = () => {
    dispatch(abrir())
  }

  const handleBack = () => {
    setIsOpenCart(true)
    onClose()
    openCart()
  }

  const handleConclude = () => {
    setIsOpenCart(true)
    onClose()
    navigate('/')
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(limpar())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <S.Container>
      {!isOpenCart && isSuccess && data ? (
        <S.GrupoLinhas>
          <>
            <h2>Pedido realizado - {data.idPedido}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              background="light"
              type="button"
              title="Concluir"
              onClick={handleConclude}
            >
              Concluir
            </Button>
          </>
        </S.GrupoLinhas>
      ) : (
        <div>
          {!pagarCartao ? (
            <>
              <S.GrupoLinhas>
                <form onSubmit={form.handleSubmit}>
                  <h2>Entrega</h2>
                  <S.Linhas>
                    <S.GrupoInput>
                      <label htmlFor="nome">Quem irá receber</label>
                      <input
                        id="nome"
                        type="text"
                        name="nome"
                        value={form.values.nome}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        required
                        className={mensageError('nome') ? 'error' : ''}
                      />
                    </S.GrupoInput>
                    <S.GrupoInput>
                      <label htmlFor="endereco">Endereço</label>
                      <input
                        id="endereco"
                        type="text"
                        name="endereco"
                        value={form.values.endereco}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        required
                        className={mensageError('endereco') ? 'error' : ''}
                      />
                    </S.GrupoInput>
                    <S.GrupoInput>
                      <label htmlFor="cidade">Cidade</label>
                      <input
                        id="cidade"
                        type="text"
                        name="cidade"
                        value={form.values.cidade}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        required
                        className={mensageError('cidade') ? 'error' : ''}
                      />
                    </S.GrupoInput>
                  </S.Linhas>

                  <S.LinhasTwo>
                    <S.GrupoInput>
                      <label htmlFor="cep">CEP</label>
                      <ReactInputMask
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="99999-999"
                        required
                        className={mensageError('cep') ? 'error' : ''}
                      />
                    </S.GrupoInput>
                    <S.GrupoInput>
                      <label htmlFor="numero">Número</label>
                      <input
                        id="numero"
                        type="number"
                        name="numero"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        required
                        className={mensageError('numero') ? 'error' : ''}
                      />
                    </S.GrupoInput>
                  </S.LinhasTwo>
                  <div>
                    <label htmlFor="complemento">Complemento (opcional)</label>
                    <input
                      id="complemento"
                      type="text"
                      name="complemento"
                      value={form.values.complemento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={mensageError('complemento') ? 'error' : ''}
                    />
                    <Button
                      title="Continuar com o pagamento"
                      background="light"
                      type="submit"
                      onClick={continuarPagamento}
                      disabled={isLoading}
                    >
                      {isLoading
                        ? 'Continuar com o ...'
                        : 'Continuar com o pagamento'}
                    </Button>
                    <Button
                      background="light"
                      type="button"
                      title="Voltar para o carrinho"
                      onClick={handleBack}
                    >
                      Voltar para o carrinho
                    </Button>
                  </div>
                </form>
              </S.GrupoLinhas>
            </>
          ) : (
            <S.GrupoLinhas>
              <form onSubmit={form.handleSubmit}>
                <h2>
                  Pagamento - Valor a pagar{' '}
                  {parseToBrl(obtertTotalPreco(items))}
                </h2>
                <S.Linhas>
                  <S.GrupoInput>
                    <label htmlFor="nomeCartao">Nome no cartão</label>
                    <input
                      id="nomeCartao"
                      type="text"
                      name="nomeCartao"
                      value={form.values.nomeCartao}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      required
                      className={mensageError('nomeCartao') ? 'error' : ''}
                    />
                  </S.GrupoInput>
                </S.Linhas>

                <S.LinhasTwo>
                  <S.GrupoInput>
                    <label htmlFor="numeroCartao">Número do cartão</label>
                    <ReactInputMask
                      id="numeroCartao"
                      type="text"
                      name="numeroCartao"
                      value={form.values.numeroCartao}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="9999-9999-9999-9999"
                      required
                      className={mensageError('numeroCartao') ? 'error' : ''}
                    />
                  </S.GrupoInput>
                  <S.GrupoInput>
                    <label htmlFor="numeroCvv">CVV</label>
                    <ReactInputMask
                      id="numeroCvv"
                      type="text"
                      name="numeroCvv"
                      value={form.values.numeroCvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="999"
                      required
                      className={mensageError('numeroCvv') ? 'error' : ''}
                    />
                  </S.GrupoInput>
                </S.LinhasTwo>
                <S.LinhasTwo>
                  <S.GrupoInput>
                    <label htmlFor="mesVencimento">Mês de vencimento</label>
                    <ReactInputMask
                      id="mesVencimento"
                      type="text"
                      name="mesVencimento"
                      value={form.values.mesVencimento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                      required
                      className={mensageError('mesVencimento') ? 'error' : ''}
                    />
                  </S.GrupoInput>
                  <S.GrupoInput>
                    <label htmlFor="anoVencimento">Ano de vencimento</label>
                    <ReactInputMask
                      id="anoVencimento"
                      type="text"
                      name="anoVencimento"
                      value={form.values.anoVencimento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                      required
                      className={mensageError('anoVencimento') ? 'error' : ''}
                    />
                  </S.GrupoInput>
                </S.LinhasTwo>
                <div>
                  <Button
                    type="submit"
                    title="↩"
                    background="light"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                  </Button>
                  <Button
                    type="button"
                    background="light"
                    title="Voltar"
                    onClick={() => setPagarCartao(false)}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </div>
              </form>
            </S.GrupoLinhas>
          )}
        </div>
      )}
    </S.Container>
  )
}
export default Checkout
