import { useState } from "react"
import { userSignup } from "../services/auth"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [signup, setSignup] = useState({})
    const navigate = useNavigate()

    const handleSignUp = async() => {
        const res = await userSignup(signup)
        if (res.status !== 200) {
            return alert(res.data.message)
        }
        navigate('/login')
    }

    const onValueChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    return (
        <div className='container' style={{ width: '60%', margin: 'auto', marginTop: 100 }} >
            <h2 className='text-center m-5'>SignUp</h2>
            <div style={{ marginTop: 20 }}>
                <input type="text" className="form-control" placeholder='enter name' onChange={(e) => onValueChange(e)} name='name' />
            </div>
            <div style={{ marginTop: 20 }}>
                <input type="email" className="form-control" placeholder='enter email' onChange={(e) => onValueChange(e)} name='email' />
            </div>
            <div style={{ marginTop: 20 }}>
                <input type="password" className="form-control" placeholder='enter password' onChange={(e) => onValueChange(e)} name='password' />
            </div>
            <div style={{ marginTop: 20 }}>
                <button className="btn btn-primary" onClick={() => handleSignUp()} >Sign-Up</button>
            </div>
        </div>
    )
}

export default SignUp