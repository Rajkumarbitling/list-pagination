import { useState } from 'react'
import './App.css'
import usePagination from './hooks/usePagination'
import Card from './components/Card'
import { useEffect } from 'react'
import Pagination from './components/Pagination'

function App() {
  const [products, setProducts] = useState([])
  const url = "https://dummyjson.com/products";
  const { slicedData, handleNext, handlePrev, paginate, setCurrentPage } = usePagination(products);

  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="product-list">
        {slicedData.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
      {slicedData.length > 0 && (
        <Pagination
          className="pagination-box"
          paginate={paginate}
          handlePrev={handlePrev}
          handleNext={handleNext}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  )
}

export default App
