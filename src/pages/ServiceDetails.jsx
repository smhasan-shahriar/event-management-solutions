import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const service = services.find((service) => service.id == id);
  return (
    <div className="max-w-[1360px] lg:mx-auto mx-10">
      <div className="relative">
        <img
          className="w-full object-cover h-[50vh] relative z-10"
          src={service.image_url}
          alt=""
        />
        <h3 className="text-center text-5xl bg-[#FFC0CB80] absolute w-full bottom-0 z-50 p-5 font-medium text-white">
          {service.name}
        </h3>
      </div>
      <h4 className="text-2xl font-semibold my-5">
        {service.short_description}
      </h4>
      <p>{service.description}</p>
      <h4 className="text-2xl font-semibold my-5">Our Expertise</h4>
      <div className="grid gap-10 lg:grid-cols-3 my-10 justify-items-center">
        {service.image_url_collection.map((item, idx) => (
          <div key={idx}>
            <div className="card bg-base-100 shadow-lg rounded-sm">
              <figure>
                <img
                  src={item}
                />
              </figure>
              <div className="card-body">
                <p className="text-lg font-medium text-center">{service.experiences[idx]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
