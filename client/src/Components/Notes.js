import Note from './Note'
import { useState, useEffect } from 'react'
import { getNotes } from '../services/api'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Notes = () => {

    const [notes, setnotes] = useState([])

    const {name} = useContext(AuthContext)

    const getAllNotes = async () => {
        const response = await getNotes()
        setnotes(response.data)
    }

    useEffect(() => { getAllNotes() }, [notes])

    return (
        <div className='container'>
            <h2 className="text-center m-5 heading" style={{ textTransform: "capitalize" }} >{name}'s Notes</h2>
            <div className="row">
                {
                    notes.map((note, i) => {
                        return <div className="col-xs-6 col-sm-3" key={note._id} ><Note note={note} /></div>
                    })
                }
                <p className='text-center mt-5'>{notes.length === 0 && 'No Notes to Display, Click Add new to Add notes.'}</p>
            </div>
        </div>
    )
}
export default Notes