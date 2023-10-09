import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, name, image_url, price, short_description } = service;
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate(`/services/${id}`)
  }
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="flex flex-col relative">
          <img
            className="max-w-[500px] h-[400px] object-cover relative z-10"
            src={image_url}
            alt="Album"
          />
          <p className="z-50 bg-[#00000050] text-2xl font-semibold text-center py-2 w-full h-[50px] text-red-200 absolute bottom-0">Price: {price}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short_description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleSeeMore} className="btn bg-red-100 text-black capitalize rounded-sm text-lg">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
