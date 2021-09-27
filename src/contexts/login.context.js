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
  const [user, setUser] = useState(localStorage.getItem('@solanches/user'))
  const [password, setPassword] = useState('')


  const updateInfo = () => {
    setToken(localStorage.getItem('@solanches/loginToken'))
    setUser(localStorage.getItem('@solanches/user'))
  }
  const values = {
    token,
    user,
    setUser,
    password,
    setPassword,
    updateInfo
  }

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  )
}

export default function useLoginContext() {
  const context = useContext(LoginContext)

  return { ...context }
}
