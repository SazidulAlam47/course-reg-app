import './Cart.css'
import PropTypes from 'prop-types';

const cart = ({ cartList, credit, price, remaining, setTost, setTostMessage }) => {
    console.log('cartlist', cartList);

    const handlePurchase = () => {
        if (cartList.length) {
            setTost(true);
            setTostMessage('Thanks for your purchase');
        }
        else {
            setTost(true);
            setTostMessage('Add at least one course');
        }
    }
    return (
        <div className="card cart">
            <h4 className="line blue">Credit Hour Remaining {remaining} hr</h4>
            <h3>Course Name</h3>
            <ol className='line'>
                {
                    cartList.map((course, idx) => <li key={idx}>{course.name}</li>)
                }
            </ol>
            <p>Total Credit Hour : {credit}</p>
            <p>Total Price : {price} USD</p>
            <button onClick={handlePurchase}>Purchase</button>
        </div>
    );
};

cart.propTypes = {
    cartList: PropTypes.array.isRequired,
    credit: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    setTost: PropTypes.func.isRequired,
    setTostMessage: PropTypes.func.isRequired,
}

export default cart;