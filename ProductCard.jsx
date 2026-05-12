import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3 className='text-mauve-900 font-normal'>{product.name}</h3>
      <p className='text-sm font-bold text-green-600'>{product.price}</p>
      <p className='text-xs text-gray-500'>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
        className='px-4 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer'
        disabled={!product.inStock}
        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${product.inStock ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
