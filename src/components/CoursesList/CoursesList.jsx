import SingleCourse from '../SingleCourse/SingleCourse';
import { useEffect, useState } from 'react';
import './CoursesList.css'

const CoursesList = ({addToCart, courses}) => {
    

    return (
        <div className='courses-container'>
            {
                courses.map(course => <SingleCourse key={course.id} course={course} addToCart={addToCart}></SingleCourse> )
            }
        </div>
    );
};

export default CoursesList;