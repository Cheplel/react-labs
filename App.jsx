import  { useState } from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import Filter from './components/Filter'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)
  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState('All')
  return (
    <div  className={darkMode ? "dark-mode" : "light-mode"}>
      <h1 className="text-2xl font-bold mb-4">🛒 Shopping App</h1>
      <p>
        Welcome! Browse our products and add them to your cart. Use the filter to find items by category, and toggle dark mode for a different look!
      </p>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      {/* TODO: Implement category filter dropdown */}
      <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <ProductList selectedCategory={selectedCategory} onAddToCart={handleAddToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
