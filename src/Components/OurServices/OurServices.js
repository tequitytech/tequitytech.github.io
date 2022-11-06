import React from 'react';
import './OurServices.css';

const OurServices = ({ setOpenModal }) => {
  return (
    // <div class="our-services-container w-[100%] px-[80px] py-[24px] mt-[16px]">
    //   <h3 class="mt-2 text-[40px] text-center sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
    //     Our
    //     <span class="text-[#19335a]"> Services</span>
    //   </h3>
    //   <div class="row w-full flex items-center">
    //     <div class="service">
    //       <i class="fas fa-laptop-code"></i>
    //       <h2>Web Design</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    //         quae?
    //       </p>
    //     </div>
    //     <div class="service">
    //       <i class="fas fa-chart-line"></i>
    //       <h2>Marketing</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    //         quae?
    //       </p>
    //     </div>
    //     <div class="service">
    //       <i class="fab fa-sketch"></i>
    //       <h2>Graphics</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    //         quae?
    //       </p>
    //     </div>
    //     <div class="service">
    //       <i class="fas fa-database"></i>
    //       <h2>Data Analysis</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    //         quae?
    //       </p>
    //     </div>
    //     <div class="service">
    //       <i class="fas fa-mobile-alt"></i>
    //       <h2>App Development</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    //         quae?
    //       </p>
    //     </div>
    //     <div class="service">
    //       <i class="fas fa-file-invoice"></i>
    //       <h2>Accounting</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    //         quae?
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div
      id="ourServices"
      className="p-[32px] sm:p-[80px] sm:flex sm:items-center sm:justify-center sm:gap-[16px]"
    >
      <section>
        <h3 class="mt-2 text-center text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our
          <span class="text-[#4675c0]"> Services</span>
        </h3>
        <p class="section__desc">
          Our team built pioneering technology that helps 1000s of customers
          maintain and manage real estate properties. Now, we leverage our
          learnings to help other companies serve their customers.
        </p>
        <div class="features">
          <div class="feature feature-one flex flex-col items-center gap-[16px]">
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H5C3.89543 16 3 15.1046 3 14V6ZM5 6H19V14H5V6Z"
                  fill="#252525"
                />
                <path
                  d="M2 18C1.44772 18 1 18.4477 1 19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18H2Z"
                  fill="#252525"
                />
              </svg>
            </div>
            <h2 class="feature__title  font-[700]">Web Development</h2>
            <p class="feature__desc">
              Your website can be a powerful business tool, rich in
              functionalities. We provide top-notch offshore web development
              services to serve your business requirements.
            </p>
          </div>
          <div class="wrapper">
            <div class="feature feature-two flex flex-col items-center gap-[16px] !bg-[#4675c0] !text-[#ffffff]">
              <div>
                <svg
                  className="invert-[100%]"
                  width="30px"
                  height="30px"
                  stroke="#323232"
                  viewBox="0 0 24 24"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <style></style>
                    <clipPath id="clip-path">
                      <rect class="cls-1" x="0.13" width="24" height="24" />
                    </clipPath>
                  </defs>
                  <title>phone</title>
                  <g class="cls-2">
                    <path d="M14.45,22.08H9.55a4,4,0,0,1-4-4V5.92a4,4,0,0,1,4-4h4.9a4,4,0,0,1,4,4V18.08A4,4,0,0,1,14.45,22.08ZM9.55,3.92a2,2,0,0,0-2,2V18.08a2,2,0,0,0,2,2h4.9a2,2,0,0,0,2-2V5.92a2,2,0,0,0-2-2Z" />
                    <path d="M12,19.35a1,1,0,0,1-.38-.07,1.06,1.06,0,0,1-.33-.22,1,1,0,0,1-.29-.71.84.84,0,0,1,.08-.38,1,1,0,0,1,.21-.32.91.91,0,0,1,.33-.22,1,1,0,0,1,.57-.06l.19.06.17.09.16.13a1,1,0,0,1,.29.7,1,1,0,0,1-1,1Z" />
                  </g>
                </svg>
              </div>
              <h2 class="feature__title font-[700]">App Development</h2>
              <p class="feature__desc">
                We cater to simple applications with customized admin features
                entangling all your business logic tools. Make your app
                user-friendly and instantaneous with our magic from our
                excellence.
              </p>
            </div>
            <div class="feature feature-three flex flex-col items-center gap-[16px]">
              <div>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z" />
                  </g>
                </svg>
              </div>
              <h2 class="feature__title font-[700]">Branding & Designing</h2>
              <p class="feature__desc">
                Our online and UI/UX design firm can help you revamp your brand.
                Because user experience is always our top priority, our talented
                UI/UX designers can create engaging experiences with a
                user-focused perspective.
              </p>
            </div>
          </div>
          <div class="feature feature-four flex flex-col items-center gap-[16px]">
            <div>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M5 3v16h16v2H3V3h2zm14.94 2.94l2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3 3.94-3.94z" />
                </g>
              </svg>
            </div>
            <h2 class="feature__title font-[700]">Hybrid App Development</h2>
            <p class="feature__desc">
              With hybrid app development, you may accelerate your time to
              market, maximise your budget, and completely transform your
              company. We create top-notch applications to offer flawless client
              engagement and experiences.
            </p>
          </div>
        </div>
      </section>
      <div className="hidden sm:relative sm:block">
        <div className="w-full flex items-center h-full justify-center float-animation-outer z-[-5] ">
          <hr className="h-[500px] top-[-350px] absolute w-[2px] border-[5px] border-[#19335a] phone-cord float-animation z-[-5]" />
        </div>
        <div class="phone relative text-[#ffffff]">
          <span></span>
          <div className="flex flex-col w-full items-center gap-[16px] absolute top-[20px]">
            <div className="text-[20px] font-semibold text-center px-[16px]">
              We Help You To Start Your Project
            </div>
            <div className="bg-[#4675c0] text-[#ffffff] font-semibold w-[90%] mt-[32px] px-[16px] py-[16px] rounded-[5px]">
              <p>
                Bringing tried and tested product development practices to your
                company
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpenModal(true);
              }}
              className="bg-[#4675c0] px-[16px] py-[8px] rounded-[5px] mt-[16px] hover:bg-[#ffffff] hover:text-[#252525] contact-us-btn"
            >
              Get in touch.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
