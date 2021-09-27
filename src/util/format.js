export const formatRoute = (route) => {
    const route_lower = route.toLowerCase()
    const route_formated = route_lower.replace(/ /g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    return (route_formated)
}

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const normalize = (string) => {
  return string.normalize('NFD')
}