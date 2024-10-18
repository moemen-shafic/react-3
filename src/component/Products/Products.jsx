/* eslint-disable no-unused-vars */
// import axios طالما هعمل fetch للبيانات
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Product } from '../Product/Product.jsx';

export const Products = () => {
  // المخزن اللي هخون فيه البيانات بتاعتي 
  //====< اي اسم === set + اي اسم  = useState ([مخزن فاضي])
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

  useEffect(()=>{
    getProducts('https://api.escuelajs.co/api/v1/products')
  },[])
  return (
    <div className='container row margin p-2'>
    
      {
        productList.map((item)=>{
          return <Product key={item.id} obj={item}/>
        })
      }
    </div>
  )
}
