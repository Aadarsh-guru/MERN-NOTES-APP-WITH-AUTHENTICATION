import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getNote, editNote } from '../services/api'

const defaultValue = {
    title: '',
    description: ''
}

const EditNote = () => {

    const [note, setNote] = useState(defaultValue)
    const { id } = useParams()
    const navigate = useNavigate()

    const loadNote = async()=>{
       const response = await getNote(id)
       setNote(response.data)
    }

    useEffect(()=>{loadNote()},[])

    const handleEdit = async()=>{
       await editNote(id, note)
       navigate('/notes')
    }

    const onNoteChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <h2 className="text-center m-4 heading">Edit Note</h2>
            <div className="inputContainer">
                <div className="mt-3">
                    <input type="text" className="form-control input" placeholder='Title' name='title' onChange={(e) => onNoteChange(e)} value={note.title} />
                </div>
                <div className="mt-3">
                    <textarea className="form-control input" id="floatingTextarea" placeholder='Take a Note' name='description' rows='8' onChange={(e) => onNoteChange(e)} value={note.description} ></textarea>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary" disabled={!note.title || note.description === ''} onClick={handleEdit} >Edit Note</button>
                </div>
            </div>
        </div>
    )
}

export default EditNote