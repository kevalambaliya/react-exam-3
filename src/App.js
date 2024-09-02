import React, { useState } from 'react';


const App = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [products, setProducts] = useState([]);

  const Submit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      image: imageUrl
    };

    setProducts([...products, newProduct]);
 
    setProductName('');
    setProductPrice('');
    setImageUrl('');
  };

  return (
    <div>
     
      <form onSubmit={Submit}>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Product Price:
            <input
              type="number"
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              type="text"
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Product List</h2>
      <div>
        {
          products.map((addproduct, index) => (
            <div key={index}>
              <h3>{addproduct.name}</h3>
              <p>Price: ${addproduct.price}</p>
              {addproduct.image && (
                <img style={{width:"200px"}}
                  src={addproduct.image}
                  alt={addproduct.name}
                />
              )}
            </div>
          ))
        
        }
      </div>
    </div>
  );
};

export default App;