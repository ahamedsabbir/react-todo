import React, { useState, useEffect } from 'react'
import axios from 'axios'

function OnlineProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  return (
    <>
      <h1>Online Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail ? product.thumbnail : '/no image.png' } style={{width: '50px', height: '50px'}}/>
            {product.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default OnlineProducts