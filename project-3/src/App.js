import './App.css';
import Product from './Product';
import React, {useState} from 'react';

function App() {
  const [total, setTotal] = useState(0);

  const totalChange = (ProductChange) =>{
    setTotal((prevTotal) => prevTotal + ProductChange);
  }
  return (
    <main>
      <div className = "main__Product">
        <h2 className = "main__Product__header">장바구니</h2>
        <p className = "main__Product__header">총 상품 개수 : {total}
        </p>
        <div>
          <Product 
          onQuantityChange = {totalChange}
          Product = '세제'
          Price = "13500"
          />
          <Product onQuantityChange = {totalChange}
          Product = '길벗)리액트를 다루는 기술'
          Price = "42000"/>
        </div>
      </div>
    </main>
  );
}

export default App;
