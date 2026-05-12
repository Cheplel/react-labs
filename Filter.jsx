import { categories } from "./ProductList";

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex items-center gap-2 mb-5">
      <label className="text-sm text-gray-500 font-medium">Filter by Category: </label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
