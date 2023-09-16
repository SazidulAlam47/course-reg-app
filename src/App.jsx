import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import CoursesList from './components/CoursesList/CoursesList';
import Cart from './components/Cart/Cart';

function App() {
  const [cartList, setCartList] = useState([]);
  const [credit , setCredit] = useState(0);
  const [remaining, setRemaining ] = useState(20);
  const [price , setPrice ] = useState(0);
  
  const addToCart = course => {
    if ((credit + course.credit) <= 20 ) {
      if(cartList.includes(course.name) === false){
        setCartList([...cartList, course.name]);
        setCredit(credit + course.credit);
        setPrice(price + course.price);
        setRemaining(remaining - course.credit);
      }
      else{
        alert("You can not add same course again");
      }
    }
    else{
      alert("You can not add more than 20 credits");
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="course-ui-container">
        <CoursesList addToCart={addToCart}></CoursesList>
        <Cart cartList={cartList} credit={credit} price={price} remaining={remaining}></Cart>
      </div>
    </div>
  )
}



export default App
