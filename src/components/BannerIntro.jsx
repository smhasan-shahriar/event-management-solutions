import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
const BannerIntro = () => {
  return (
    <div  data-aos="fade-up" className="mx-auto max-w-[1360px] flex items-center justify-center">
      <AwesomeSlider cssModule={AwesomeSliderStyles}>
        <div
          className="hero"
          style={{
            backgroundImage: "url(https://i.ibb.co/6ZsngS9/baby-shower-4.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Amazing Party</h1>
              <p className="mb-5">Fun and memorable birthday celebrations</p>
            </div>
          </div>
        </div>
        <div
          className="hero"
          style={{
            backgroundImage: "url(https://i.ibb.co/ydkB8Cr/wedding-5.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Grand Wedding</h1>
              <p className="mb-5">Elegant wedding planning and coordination.</p>
            </div>
          </div>
        </div>
        <div
          className="hero"
          style={{
            backgroundImage: "url(https://i.ibb.co/3dvCx0N/engagement-2.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Engagement Celebrations</h1>
              <p className="mb-5">Create beautiful memories of your engagement</p>
            </div>
          </div>
        </div>
        <div
          className="hero"
          style={{
            backgroundImage: "url(https://i.ibb.co/72bJR0X/baby-shower-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Grand Baby Shower</h1>
              <p className="mb-5">Adorable baby shower celebrations</p>
            </div>
          </div>
        </div>

      </AwesomeSlider>
    </div>
  );
};

export default BannerIntro;
