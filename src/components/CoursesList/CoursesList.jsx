import SingleCourse from "../SingleCourse/SingleCourse";
import "./CoursesList.css";
import PropTypes from "prop-types";

const CoursesList = ({ addToCart, courses }) => {
    return (
        <div className="courses-container">
            {courses.map((course) => (
                <SingleCourse
                    key={course.id}
                    course={course}
                    addToCart={addToCart}
                ></SingleCourse>
            ))}
        </div>
    );
};

CoursesList.propTypes = {
    addToCart: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
};

export default CoursesList;
