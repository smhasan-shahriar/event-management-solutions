
import ReactStars from "react-rating-stars-component";


const CustomerReview = () => {
  return (
    <div data-aos="fade-up" className="max-w-[1360px] mx-auto my-20">
        <h2 className="text-2xl font-semibold text-center">Our Delighted Customers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-10 justify-items-center">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-40 h-40 object-cover rounded-full"
              src="https://i.ibb.co/ZN9FYzG/user-em-1.jpg"
            />
          </figure>
          <div className="card-body flex justify-center flex-col items-center">
            <h2 className="card-title">Ms. Alex Robert</h2>
            <p className="text-center">Exceptional event management team! They made our celebration unforgettable with their attention to detail.</p>
            <img className="w-20" src="https://i.ibb.co/gVWF9cs/Screenshot-2023-10-08-100502.png" alt="" />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-40 h-40 object-cover rounded-full"
              src="https://i.ibb.co/RyYXmJf/user-em-3.jpg"
            />
          </figure>
          <div className="card-body flex justify-center flex-col items-center">
            <h2 className="card-title">Mr. John Doe</h2>
            <p className="text-center">Highly recommend this event company! Their creativity and professionalism exceeded our expectations.</p>
            <img className="w-20" src="https://i.ibb.co/gVWF9cs/Screenshot-2023-10-08-100502.png" alt="" />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-40 h-40 object-cover rounded-full"
              src="https://i.ibb.co/gtX45HS/user-em-2.jpg"
            />
          </figure>
          <div className="card-body flex justify-center flex-col items-center">
            <h2 className="card-title">Ms. Robin Millory</h2>
            <p className="text-center">Outstanding service! The event ran seamlessly, thanks to their expertise. We couldn't be happier with the results.</p>
            <img className="w-20" src="https://i.ibb.co/gVWF9cs/Screenshot-2023-10-08-100502.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
