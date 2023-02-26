import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(null)
  const [name, setName] = useState(null)

  axios.defaults.headers.common["Authorization"] = token

  useEffect(() => {
    const data = localStorage.getItem('token')
    const userData = localStorage.getItem('userData')
    if (data && userData) {
      const parsedData = JSON.parse(data)
      setToken(parsedData)
      const parsedUserData = JSON.parse(userData)
      setName(parsedUserData)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      token,
      setToken,
      name,
      setName
    }} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider