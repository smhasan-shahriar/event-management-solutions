import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
const GetSupport = () => {
  return (
    <div>
      <div className="max-w-[1360px] mx-auto my-10">
        <div className="w-3/4 mx-auto">
          <h2 className="text-4xl font-bold text-center bg-red-100 py-5">
            Get Our Support
          </h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Preferred Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your preferred name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full flex-1">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="w-full flex-1">
                <label className="label">
                  <span className="label-text">Alternate Number</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Alternate Phone Number"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Which event you want to get support for?
                </span>
              </label>
              <select
                id="categorySelect"
                className="input input-bordered w-full"
              >
                <option value="">No Specific Event</option>
                <option value="Category1">Wedding Ceremony</option>
                <option value="Category2">Birthday Parties</option>
                <option value="Category3">Fundraising Gala</option>
                <option value="Category4">Engagement Parties</option>
                <option value="Category5">Retirement Parties</option>
                <option value="Category6">Baby Shower</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Describe your issue</span>
              </label>
              <textarea
                type="text"
                name="name"
                placeholder="Your issue..."
                className="input input-bordered"
                required
              />
            </div>
            <button
              onClick={(e) => e.preventDefault()}
              className="my-5 text-xl font-medium btn bg-red-100"
            >
              Submit
            </button>
            <div className="flex flex-col lg:flex-row items-center gap-2 justify-center text-center">
              <p>More Questions? Directly contact us.</p>
              <p className="flex gap-2 items-center">
                <FaPhoneAlt className="text-green-600" />
                +881234-5678
              </p>
              <p className="flex gap-2 items-center">
                <FaWhatsapp className="text-green-700 text-xl" />
                +881111-9876
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetSupport;
