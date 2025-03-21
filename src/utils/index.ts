import { Cardapio } from '../pages/Home'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)
}

export const obtertTotalPreco = (items: Cardapio[]) => {
  return items.reduce((acumulador, valorATual) => {
    return (acumulador += valorATual.preco)
  }, 0)
}
