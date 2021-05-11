import React from 'react'
import {
    Link
} from 'react-router-dom'

import { test_user } from './test_user'

const Pedidos = (props) => {
    return (
        <div>
            <h3>Pedidos</h3>
            <ul>
            {
                test_user.pedidos.map((pedido) => 
                    <li key={pedido.codigo}>
                        <p>Producto: {pedido.producto}</p>
                        <p>Cantidad: {pedido.cantidad}</p>
                        <p>Código: {pedido.codigo}</p>
                        <p>Status: {pedido.status}</p>
                        <hr></hr>
                    </li>
                )
            }
            </ul>
        </div>
    )
}

export default Pedidos;