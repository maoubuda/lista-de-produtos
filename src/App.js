import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <header className="header">
        <h1 className="title">Lista de Produtos</h1>
      </header>
      <div className="container">
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Preço: ${product.price}</p>
              <hr className="divider" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
