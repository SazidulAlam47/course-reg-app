import './Cart.css'

const cart = ({cartList, credit, price, remaining}) => {
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
        </div>
    );
};

export default cart;