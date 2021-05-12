import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Nav from './nav'
import './nav.css'
import fakedata from './fakedata'
import { addItemToCart } from './cartHelper'
import Cart from './cart'
import { Cartcontext } from './cartcontext'

const Kit=()=> {

    const {products} = fakedata
    const [cart, setCart] = useContext(Cartcontext)

    const onAdd = (product)=>{
        
         const exist = cart.find((x)=>x.id===product.id);
         if(exist){
            setCart(cart.map((x)=>x.id === product.id ? {...exist, qty: exist.qty + 1}:x)
                     );
         }
         else{
           setCart([...cart,{...product,qty: 1}]);
        
     }
    }

    return (
        <div>
       
{/* content */}
                
                <a className="vegitablelink2"  href="">Vegitables</a>
                <Link to="/">
                    <a className="kitlink2"  href="">Kit</a>
                </Link>
                <div className="whiteclr"></div>
                <div className="hidn">
                    
                </div>


{/* products */}

                <div className="row p-3 m-2 mt-3">
                   
                    {products.map((product)=>(
                        <div key={product.id} className="col-12 col-md-6 col-lg-3">
                            <img src={product.image} />
                            <h1>{product.name}</h1>
                            <h3>RS {product.price}</h3>
                            <button onClick={()=>onAdd(product)}>Add to cart</button>
                        </div>
                        
                    ))}
                </div>
                <div>
                    hii
                    {cart.map((item)=>{
                        <div key = {item.id}>
                            <div className="colr"><h1>{item.name}</h1></div>
                            {console.log(item)}
                            {console.log(item.name)}
                        </div>
                    })}
                </div>
              
           
        </div>
    )
}
export default Kit