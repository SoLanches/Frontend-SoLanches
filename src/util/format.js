import { lowerCase } from "lodash"

export const formatRoute = (route) => {
    const lowercased_route = lowerCase(route)
    const route_formated = lowercased_route.replaceAll(/ /g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    return (route_formated)
}

export const deformatName = (word) => {
  return word.replaceAll('_', ' ')
}

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const normalize = (string) => {
  return string.normalize('NFD')
}