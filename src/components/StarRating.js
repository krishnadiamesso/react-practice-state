import React, {useState} from 'react';
import Star from './Star';

const StarRating = () => {
    // Initialize a 'courseRating' state
    const [courseRating, setCourseRating] = useState(0);


    // Write a function that returns 5 Star components
    const createStars = () => {
        const stars = [];
        let i = 0;
        while (i < 5) {
            stars.push(
                <Star
                    key={i}
                    isSelected={i < courseRating}
                    updateCourseRating={updateCourseRating}
                    index={i}
                />
            );
            i++;
        }
        return stars;
    };

    // Write an event handler that updates the courseRating state.
    // Pass the function to a Star component via props
    const updateCourseRating = (index) => {
        if (index + 1 === courseRating) {
            setCourseRating(0);
            return;
        }
        setCourseRating(index + 1);
    }
    

    return (
        <ul className='course--stars'>
            {/* Render the Star components */}
            {createStars()}
        </ul>
    );
}

export default StarRating;