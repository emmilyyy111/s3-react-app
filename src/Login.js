
import React, { useState } from "react"


export default function Login () {
    const [user, setUser] = useState({})

    const handleUserForm = () => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleUserLogin = () => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json',
        },
        body:JSON.stringify(user),
        })
        .then(res => (res.ok ? setStatus('User logged in now') : setStatus('authentication failed')))
        .catch(error => console.log(error))
    }

    return (
        <>
        <h2>Sign in form</h2>
        <input type='email' name='email' onChange={handleUserForm} />
        <input type='password' name='password' onChange={handleUserForm} />
        <button type="Submit">Sign me in !</button>
        <small>{status}</small>
        </>
    )
}