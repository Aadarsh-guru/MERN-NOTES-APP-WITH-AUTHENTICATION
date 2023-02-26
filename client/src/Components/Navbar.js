import { Link } from 'react-router-dom'
import { AuthContext } from "../context/AuthProvider"
import { useContext } from 'react'

const Navbar = () => {

  const { token, setToken, setName, name } = useContext(AuthContext)

  const handleLogout = () => {
    setToken()
    setName()
    localStorage.removeItem('token')
    localStorage.removeItem('userData')
  }

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>NoteApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/' style={{ fontWeight: "bold" }}>Add new</Link>
              </li>
              {
                token &&
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/notes' style={{ fontWeight: "bold" }}>Notes</Link>
                </li>
              }
            </ul>
            <div>
            </div>
            <div className="d-flex">
              {
                !token ?
                  (
                    <>
                      <Link className='btn btn-outline-primary' style={{ marginRight: 10 }} to="/login">Login</Link>
                      <Link className='btn btn-outline-success' to="/signup">Signup</Link>
                    </>
                  )
                  :
                  (
                    <>
                      <h3 className="btn btn-primary" style={{ fontWeight: "bold", textTransform:'capitalize' }} > welcome {name} </h3>
                      <Link className='btn btn-outline-danger' onClick={() => handleLogout()} style={{ marginLeft: 10 }} to="/login">Logout</Link>
                    </>
                  )
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar