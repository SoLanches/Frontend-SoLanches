export const clearLocalStorage = () => {
  localStorage.removeItem('@solanches/loginToken')
  localStorage.removeItem('@solanches/user')
}