import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/AddNote';
import Navbar from './Components/Navbar';
import Notes from './Components/Notes';
import EditNote from './Components/EditNote';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AuthProvider from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'


const App = () => {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Home />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/edit/:id' element={<EditNote />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App;