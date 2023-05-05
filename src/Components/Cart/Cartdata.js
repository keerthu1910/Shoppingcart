import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { increaseCount } from '../../features/cartSlice'
import '../Cart/style.scss'

export const Cartdata = () => {
    const [price,setPrice] = useState(0)
    const cartdata = useSelector(state=>state.user.items)
    const dispatch = useDispatch()
    console.log(cartdata)
    const getPrice = () => {
        let value = cartdata.map(item=>item.price)
        setPrice(value.reduce((a,b)=>a+b,0))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(price === 0){
            alert('enter an amount')
        }else{
            var options = {
                key:'rzp_test_Ncl8LUqA5rKNvP',
                key_secret:'jgIc4fesLAIBsPDDfjilaZXH',
                amount:price*100,
                currency:'INR',
                name:'Testing',
                description:'for testing purpose',
                handler:function(response){
                    alert(response.razorpay_payment_id)
                },
                prefill:{
                    name:'keerthana',
                    email:'keerthanas1910@gmail.com',
                    contact:'4586933697'
                },
                notes:{
                    address:'Razorpay corporate office'
                },
                theme:{
                    color:'#5D3FD3'
                }
            }
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }
    useEffect(()=>{
        getPrice()
    },[])
    
    return(
        <div className='cart-container'>
            {
                cartdata.map(cartitem => (
                    
                    <div key={cartitem.id} className='item-container'>
                        <img src={cartitem.image} alt={cartitem.title} />
                        <h3>Price:{cartitem.price}</h3> 
                        <div>
                        <button onClick={()=>dispatch(increaseCount(cartitem.id))}>+</button>
                        {/* <button onClick={()=>console.log(cartitem.id)}>+</button> */}
                        <p>qty:{cartitem.qty}</p>
                        <button>-</button>
                        </div>
                    </div>
                ))
            }
            <div className='price-container'>
                <h2>Total price : {price}</h2>
                <button onClick={handleSubmit}>Proceed to payment</button>
            </div>
        </div>
    )
}