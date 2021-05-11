import React, { useState } from 'react'
import {
    Link,
    Redirect,
    useHistory
} from 'react-router-dom'

import { test_user } from './test_user'

const SignIn = (props) => {

    const history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signedIn, setSignedIn] = useState(false)

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    } 

    const handleSubmit = () => {
        if (username === test_user.username && password === test_user.password ) {
            console.log("Signed in")
            history.push("/profile")
        }
    }

    return (
        <div>
                <p>Usuario:</p>
                <input type="text" name="username" onChange={handleUsername} required></input>
                <p>Contraseña: </p>
                <input type="password" name="password" onChange={handlePassword} required></input>
                <input type="submit" onClick={handleSubmit}></input>
        </div>
    )
}

export default SignIn;