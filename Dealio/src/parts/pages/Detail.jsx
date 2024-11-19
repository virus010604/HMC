import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { useParams } from 'react-router-dom'
import Footer from '../component/Footer';

function detail() {
     const {id} = useParams()
     const [data, setData] = useState([]);
   
     useEffect(() => {
      console.log(id)
       setTimeout(() => {
         fetch(`https://fakestoreapi.com/products/${id}`)
           .then((response) => response.json())
           .then((json) => {
             setData(json);
           })
           .catch((error) => {
             console.error("error fetching data: ", error);
           });
       },); 
     }, []);

  return (
    <>
    <Navbar/>
    <div className='m-48'>
        <h1>{data?.title}</h1>
    </div>
    <Footer/>
    </>
  )
}

export default detail