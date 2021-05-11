import React from 'react'
import {
    Link
} from 'react-router-dom'

const NotSignedIn = (props) => {
    return (
        <div>
            <h1>Bienvenidos a GTracker!</h1>
            <Link to="/signin"><button>SIGN IN</button></Link>
        </div>
    )
}

export default NotSignedIn;