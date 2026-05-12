import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Bread', price: '$1.50', category: 'Bakery', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true },
  { id: 5, name: 'Banana', price: '$0.50', category: 'Fruits', inStock: false },
  { id: 6, name: 'Croissant', price: '$2.00', category: 'Bakery', inStock: true }
]

const ProductList = ({ selectedCategory, onAddToCart }) => {
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}

export const categories = ['All', 'Fruits', 'Dairy', 'Bakery']
export default ProductList
