import React from "react";

const Questions = () => {
  return (
    <div data-aos="fade-up" className="max-w-[1360px] mx-auto m-20 bg-red-100 rounded-lg p-10">
    <h2 className="text-2xl font-semibold text-center mb-10 ">Frequently Asked Questions</h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-red-200">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          How can I register for an event through the website?
          </div>
          <div className="collapse-content">
            <p>Please click the login button on the navbar. If you are not yet a user, then click the register button</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-red-200">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          How do I contact the event organizers if I have questions or issues?
          </div>
          <div className="collapse-content">
            <p>Get contact information form Contacts page and call our team</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-red-200">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How much I will be charged if I cancel my event?
          </div>
          <div className="collapse-content">
            <p>You will be charged a 20% cancellation fee if you cancel before 7 days of the event.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
