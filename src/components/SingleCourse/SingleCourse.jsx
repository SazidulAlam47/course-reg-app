import "./SingleCourse.css";
import dollarSign from "../../assets/dollar-sign-solid.svg";
import bookSign from "../../assets/book-open-solid.svg";
import PropTypes from "prop-types";

const SingleCourse = ({ course, addToCart }) => {
    return (
        <div className="card">
            <div className="course-img">
                <img src={course.img} alt="" />
                <h4>{course.name}</h4>
                <p>{course.details}</p>
                <div className="price-credit">
                    <img
                        src={dollarSign}
                        style={{ width: "15px" }}
                        alt="$"
                        className="icon"
                    />{" "}
                    <span style={{ marginRight: "20px" }}>
                        Price: {course.price}{" "}
                    </span>
                    <img
                        src={bookSign}
                        style={{ width: "23px" }}
                        className="icon"
                    />{" "}
                    Credit: {course.credit}hr
                </div>
                <button onClick={() => addToCart(course)}>Select</button>
            </div>
        </div>
    );
};

SingleCourse.propTypes = {
    course: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default SingleCourse;
