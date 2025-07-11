import { useEffect, useState } from "react"


function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('URL DOES NOT EXIST')
        }
        else {
          return response.json()
        }
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      })
  }, [])

  return (
    <div>
      {

        products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
            </div>
          )))


          : (
            <div>
              products loading
            </div>
          )}



    </div>
  )
}

export default App
