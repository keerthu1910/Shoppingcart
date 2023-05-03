import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/userSlice';
export const Productpage = () => {
    const productdata = useSelector((state)=>state.user.users)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    console.log(productdata)
    return(
        <div>
            {
                productdata.map(product=>(
                    <div key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>Price:{product.price}</h3>
                        <p>{product.description}</p>
                    </div>
                ))
            }
        </div>
    )
} 