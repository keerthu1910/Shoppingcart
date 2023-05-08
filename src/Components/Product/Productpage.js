import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../features/userSlice';
import { addtocart } from '../../features/cartSlice';
import '../Product/style.scss'
export const Productpage = () => {
    const navigate = useNavigate()
    const productdata = useSelector((state)=>state.user.users)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    
    return(
        <div>
            <button className='cartbutton' onClick={()=>navigate('/cart')}>Cart</button>
        <div className='container'>
            {
                productdata.map(product=>(
                    <div className='item-container' key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>Price:{product.price}</h3>
                        <p>{product.description}</p>
                        <div className='button-container'>
                            <button onClick={()=>dispatch(addtocart(product))}>Add to cart</button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
        </div>
    )
} 