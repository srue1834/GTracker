import React from 'react'
import {
    Link
} from 'react-router-dom'

import Pedidos from './Pedidos'

import { test_user } from './test_user'

const VendorProfile = (props) => {
    return (
        <div>
            <h3>Profile</h3>
            <p>{test_user.username}</p>
            <p>{test_user.phone_number}</p>
            <p>{test_user.role}</p>
            <Pedidos></Pedidos>
        </div>
    )
}

export default VendorProfile;