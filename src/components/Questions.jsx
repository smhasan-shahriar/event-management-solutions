const Questions = () => {
  return (
    <div data-aos="fade-up" className="max-w-[1360px] mx-2 lg:mx-auto md:mx-4 my-20 bg-red-100 rounded-lg p-10">
    <h2 className="text-2xl font-semibold text-center mb-10 ">Frequently Asked Questions</h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-red-200">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          How can I register for an event through the website?
          </div>
          <div className="collapse-content">
            <p>Please click the login button on the navbar. If you are not yet a user, then click the register button. Then go to the Get Support page and submit the form with required information.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-red-200">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          How do I contact the event organizers if I have questions or issues?
          </div>
          <div className="collapse-content">
            <p>Get support from our staff from Get Support page after logging in. You can also give us a call on +881234-5678 if you have any questions.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-red-200">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How much will I be charged if I cancel my event?
          </div>
          <div className="collapse-content">
            <p>You have to inform us before 3 days of the event to get refund. You will be charged a 20% cancellation fee if you cancel before 7 days of the event. If you cancel before 3 days of the event, you will be charged a 40% cancellation fee.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
