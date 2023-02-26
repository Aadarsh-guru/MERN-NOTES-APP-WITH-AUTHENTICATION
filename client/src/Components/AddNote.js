import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveNote } from '../services/api'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const defaultValue = {
  title: '',
  description: ''
}
const AddNote = () => {

  const [note, setNote] = useState(defaultValue)

  const { token } = useContext(AuthContext)

  const navigate = useNavigate()

  const handeClick = async () => {
    if (!token) { 
        alert('Please Login') 
       return navigate('/login')
    }
    await saveNote(note)
      navigate('/notes') 
  }

  const onTextChange = (e) => {
    const data = { ...note, [e.target.name]: e.target.value }
    setNote(data)
  }

  return (
    <div className='container'>
      <h2 className="text-center m-4 heading">Add Notes</h2>
      <div className="inputContainer">
        <div className="mt-3">
          <input type="text" className="form-control input" placeholder='Title' name='title' onChange={(e) => onTextChange(e)} />
        </div>
        <div className="mt-3">
          <textarea className="form-control input" id="floatingTextarea" placeholder='Take a Note' name='description' rows='8' onChange={(e) => onTextChange(e)}></textarea>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" disabled={!note.title || note.description === ''} type='submit' onClick={handeClick}>Add Note</button>
        </div>
      </div>
    </div>
  )

}


export default AddNote