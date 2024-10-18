import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductDetails = () => {
  const navTo=useNavigate();
  const {id} = useParams();

  const [productList, setProductList] = useState([]);
  const getProducts = async (url) => {
    // نستخدم تراي كاتش ونحط جواه الكود دا
    try {
      const res = await axios.get(url);
      const response = res.data;
      setProductList(response);
    } catch (error) {
      console.log(error)
    }
  }
    const goBack = ()=>{
      navTo(-1)
    }
  useEffect(()=>{
    getProducts(`https://api.escuelajs.co/api/v1/products/${id}`)
  },[id])


  return (
    <div className='container row p-3 my-5 m-auto'>
      <div className='col-md-6'>
      <img src={productList.images} className="card-img-top" alt={productList.title} />
      </div>
      <div className='col-md-6 p-2 '>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{productList.title}</h5>
          <p className="card-text">{productList.description}</p>
          <input type='button' value='back' className="btn btn-primary"onClick={goBack} />
        </div>
      </div>
    </div>
    </div>
  )
}
