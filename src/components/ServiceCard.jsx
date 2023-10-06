import React from 'react';

const ServiceCard = ({service}) => {
    const {id, name, image_url, price, short_description} = service
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='max-w-[500px] h-[400px] object-cover' src={image_url} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{short_description}</p>
    <div className="card-actions justify-end">
     <p className='btn'>{price}</p>
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;