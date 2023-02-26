import { useState, useContext } from "react"
import { userLogin } from "../services/auth"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthProvider"


const Login = () => {

  const [login, setLogin] = useState({})
  const { setName, setToken } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async() => {
    const res = await userLogin(login)
        if (res.status !== 201) {
            return alert(res.data.message)
        }
        setToken(res.data.token)
        setName(res.data.user.name)
        localStorage.setItem('token', JSON.stringify(res.data.token))
        localStorage.setItem('userData', JSON.stringify(res.data.user.name))
        navigate('/notes')
  }

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  return (
    <div className='container' style={{ width: '60%', margin: 'auto', marginTop: 100 }} >
      <h2 className='text-center m-5'>Login</h2>
      <div style={{ marginTop: 20 }}>
        <input type="email" className="form-control" placeholder='enter email' name='email' onChange={(e) => onValueChange(e)} />
      </div>
      <div style={{ marginTop: 20 }}>
        <input type="password" className="form-control" placeholder='enter password' name='password' onChange={(e) => onValueChange(e)} />
      </div>
      <div style={{ marginTop: 20 }}>
        <button className="btn btn-primary" onClick={() => handleLogin()} >Login</button>
      </div>
    </div>
  )
}

export default Login