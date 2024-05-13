import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/userSlice";
import { addtocart } from "../../features/cartSlice";
import cartimg from '../../assets/shoppingcart.png';
import brand_one from '../../assets/adidas.png';
import brand_two from '../../assets/amazon.png';
import brand_three from '../../assets/levis.png';
import brand_four from '../../assets/handm.png';
import brand_five from '../../assets/puma.png';

import "../Product/style.scss";

export const Productpage = () => {
  const navigate = useNavigate();
  const productdata = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [page,setPage] = useState(1);
  const brands = [brand_one,brand_two,brand_three,brand_four,brand_five]
  const handlePage = (pageno) => {
    if(pageno>=1 && pageno<=productdata.length/4 && pageno !== page){
      setPage(pageno)}
    }
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="product-container">
      <div className="navbar">
        <p>E-Cart</p>
        <button className="cartbutton" onClick={() => navigate("/cart")}>
          Cart
        </button>
      </div>
      <div className="ad-container">
        <div className="tagline-container">
          <p className="white-bg">Shop with us </p>
          <p>for all </p>
          <p className="yellow-bg">your needs</p>
        </div>
        <div className="img-container">
            <img src={cartimg} alt='cart-img'/>
        </div>
      </div>
      <div className="brand-container">
          {
            brands.map((item)=>(
              <div className="brands">
                <img className="brand-img" src={item} alt='brand-img' />
             </div>
            ))
          }
      </div>
      <div className="container">
        {productdata.slice(page*3 - 3,page*3).map((product) => (
          <div className="item-container" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>Price:{product.price}</h3>
            <p>{product.title}</p>
            <div className="button-container">
              <button onClick={() => dispatch(addtocart(product))}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
       
      </div>
      {
          <div className="pagination">
              <span className = {page === 1 ? "pagination-disabled":""} onClick={()=>handlePage(page-1)}>Prev</span>
              {
                [...Array(productdata.length / 4)].map((_,i)=>{
                  return <span key={i} onClick={()=>handlePage(i+1)}>{i+1}</span>
                })
              }
              <span className={page < productdata.length /4 ? '':'pagination-disabled'} onClick={()=>handlePage(page+1)}>Next</span>
          </div>
        }
    </div>
  );
};
