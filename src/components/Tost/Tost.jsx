import './Tost.css';

const Tost = ({tost, setTost, tostMessage}) => {
    const handelOk = () => {
        setTost(false);
        if (tostMessage === 'Thanks for your purchase') {
            window.location.reload();
            localStorage.clear();
        }
    }
    if (tost)
        return (
            <div className='tost'>
                <span>{tostMessage}</span>
                <button onClick={handelOk}>Ok</button>
            </div>
        );
};

export default Tost;