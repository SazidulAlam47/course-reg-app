import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import CoursesList from './components/CoursesList/CoursesList';
import Cart from './components/Cart/Cart';
import Tost from './components/Tost/Tost';
import { addToLS } from './utilities/localstorage';
import { getStoredCart } from './utilities/localstorage';

function App() {
  const [cartList, setCartList] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [price, setPrice] = useState(0);
  const [tost, setTost] = useState(false);
  const [tostMessage, setTostMessage] = useState('');

  const addToCart = course => {
    if ((credit + course.credit) <= 20) {
      if (cartList.includes(course) === false && typeof course === 'object') {
        setCartList([...cartList, course]);
        addToLS(course.id);
        setCredit(credit + course.credit);
        setPrice(price + course.price);
        setRemaining(remaining - course.credit);
      }
      else {
        setTost(true);
        setTostMessage('You can not add same course again');
      }
    }
    else {
      setTost(true);
      setTostMessage('You can not add more than 20 credits');
    }
  };

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('course-data.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  //load from local storage
  useEffect(() => {
    if (courses) {
      const storedCartIds = getStoredCart();
      const savedCart = [];

      storedCartIds.map(id => {
        const newSavedCart = courses.find(course => course.id === id);
        newSavedCart && savedCart.push(newSavedCart);
      });

      console.log('savedcart', savedCart);

      setCartList(savedCart);

      let preCredit = 0;
      savedCart.forEach(savedCartElement => preCredit += savedCartElement.credit);
      setCredit(preCredit);

      let prePrice = 0;
      savedCart.forEach(savedCartElement => prePrice += savedCartElement.price);
      setPrice(prePrice);

      setRemaining(remaining - preCredit);
    }
  }, [courses])


  return (
    <div>
      <Tost
        tost={tost}
        setTost={setTost}
        tostMessage={tostMessage}
      ></Tost>

      <Header></Header>

      <div className="course-ui-container">
        <CoursesList
          addToCart={addToCart}
          courses={courses}
        ></CoursesList>
        <Cart
          cartList={cartList}
          credit={credit}
          price={price}
          remaining={remaining}
          setTost={setTost}
          setTostMessage={setTostMessage}
        ></Cart>
      </div>

    </div>
  )
}


export default App
