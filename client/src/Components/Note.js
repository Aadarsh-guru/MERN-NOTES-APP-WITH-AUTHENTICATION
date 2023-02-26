import { useNavigate } from 'react-router-dom'
import { deleteNote } from '../services/api'

const Note = ({ note }) => {

    const navigate = useNavigate()

    const deleteNoteDetailts = async (id) => {
        await deleteNote(id)
    }

    return (
        <div>
            <div className="card m-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="d-flex">
                        <button className="btn btn-danger" onClick={() => deleteNoteDetailts(note._id)} >Delete</button>
                        <button className="btn btn-success" onClick={() => navigate(`/edit/${note._id}`)}>Edit</button>
                    </div>
                </div>
                <p className="mt-2 text-center mb-1" style={{ color: "#b4b4b4" }} >{note.date}</p>
            </div>
        </div>
    )
}

export default Note