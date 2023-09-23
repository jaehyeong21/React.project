import React, {useState} from 'react';
import './Product.css'

const Product = ({onQuantityChange,Product,Price}) => {
  const [count, setCount] = useState(0);

  const Plus__setCount = () =>{
    setCount((prev) => prev + 1);
    onQuantityChange(1);

  }

  const Minus__setCount = () =>{
    if(count > 0){
    setCount((prev) => prev - 1);
    onQuantityChange(-1);
    }
  }
  return (
    <div className = "Product">
      <p>{`상품명 : ${Product}`}</p>
      <p>{`가격 : ${Price}`}</p><span>개수 : </span>
      <input className = "Product__total" type = "number" value = {count}/>
      <button className = "Product__button"
        onClick={Plus__setCount}
      >
        +
      </button>
      <button className = "Product__button"
        onClick={Minus__setCount}
      >
        -
      </button>
    </div>
  )
}
export default Product;




