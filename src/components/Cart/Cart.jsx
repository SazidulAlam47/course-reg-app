import './Cart.css'

const cart = ({cartList, credit, price, remaining, setTost, setTostMessage}) => {

    const handlePurchase = () => {
        if (cartList.length) {
            setTost(true); 
            setTostMessage('Thanks for your purchase');
        }
        else{
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
                    cartList.map(courseName => <li>{courseName}</li>)
                }
            </ol>
            <p>Total Credit Hour : {credit}</p>
            <p>Total Price : {price} USD</p>
            <button onClick={handlePurchase}>Purchase</button>
        </div>
    );
};

export default cart;