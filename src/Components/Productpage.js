import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/userSlice';
import {increment,decrement} from '../features/quantitySlice';
import './style.scss'
export const Productpage = () => {
   
    const productdata = useSelector((state)=>state.user.users)
    const productCount = useSelector((state)=>state.quantity.count)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    console.log(productdata)
    return(
        <div className='container'>
            {
                productdata.map(product=>(
                    <div className='item-container' key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>Price:{product.price}</h3>
                        <p>{product.description}</p>
                        <div className='button-container'>
                            <button onClick={()=>dispatch(increment())}>+</button>
                            <p>Qty:{productCount}</p>
                            <button onClick={()=>dispatch(decrement())}>-</button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
} 