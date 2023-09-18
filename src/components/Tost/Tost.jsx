import './Tost.css';

const Tost = ({tost, setTost, tostMessage}) => {
    if (tost)
        return (
            <div className='tost'>
                <span>{tostMessage}</span>
                <button onClick={() => setTost(false)}>Ok</button>
            </div>
        );
};

export default Tost;