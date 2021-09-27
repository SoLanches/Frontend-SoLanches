/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

const LoginContext = createContext()

export function LoginProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('@solanches/loginToken'))
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setToken(localStorage.getItem('@solanches/loginToken'))
    setToken(localStorage.getItem('@solanches/user'))
  }, [localStorage, setToken])

  const values = {
    token,
    user,
    setUser,
    password,
    setPassword
  }

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  )
}

export default function useLoginContext() {
  const context = useContext(LoginContext)

  return { ...context }
}
