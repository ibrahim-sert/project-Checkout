import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';



const UpdateProduct = () => {
  const {state: item } = useLocation()
  const url = process.env.REACT_APP_API_URL;
  const [formData , setFormData ] = useState (item)
  const navigate = useNavigate()


  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value })
    console.log({[e.target.id]:e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put (`${url}/${item.id}` , formData )
       navigate(-1)
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <div className='container'>
       <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
    </div>
  );
}

export default UpdateProduct