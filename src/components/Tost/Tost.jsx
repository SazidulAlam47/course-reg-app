import "./Tost.css";
import PropTypes from "prop-types";

const Tost = ({ tost, setTost, tostMessage }) => {
    const handelOk = () => {
        setTost(false);
        if (tostMessage === "Thanks for your purchase") {
            window.location.reload();
            localStorage.clear();
        }
    };
    if (tost)
        return (
            <div className="tost">
                <span>{tostMessage}</span>
                <button onClick={handelOk}>Ok</button>
            </div>
        );
};

Tost.propTypes = {
    tost: PropTypes.bool.isRequired,
    setTost: PropTypes.func.isRequired,
    tostMessage: PropTypes.string.isRequired,
};

export default Tost;
