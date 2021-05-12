import React, { useState } from 'react'
import Nav from './nav'

const Cart=(props)=> {

    const {cart}=props
    


    return (
        <div>
            <Nav/>


        <div>
            {cart === 0 && <div>Cart is empty</div>} 
        </div>
        </div>
    )
}

export default Cart