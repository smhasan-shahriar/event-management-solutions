import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-100 text-center">
      <div className="carousel max-w-[100vw] md:max-w-[90vw] lg:max-w-[60vw]">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-[50vh]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/6ZsngS9/baby-shower-4.jpg)",
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero min-h-[50vh]"
            style={{
              backgroundImage: "url(https://i.ibb.co/ydkB8Cr/wedding-5.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Grand Wedding</h1>
                <p className="mb-5">
                  Elegant wedding planning and coordination.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero min-h-[50vh]"
            style={{
              backgroundImage: "url(https://i.ibb.co/3dvCx0N/engagement-2.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Engagement Celebrations
                </h1>
                <p className="mb-5">
                  Create beautiful memories of your engagement
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero min-h-[50vh]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/72bJR0X/baby-shower-1.jpg)",
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
