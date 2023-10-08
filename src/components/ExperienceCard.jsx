import React from 'react';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

const ExperienceCard = ({service}) => {
    const {name, experience_collection} = service
    return (
        <div>
            <h2 className='bg-red-100 text-2xl font-medium my-10 p-5 text-center'>{name}</h2>
            <ImageGallery items={experience_collection} />
        </div>
    );
};

export default ExperienceCard;