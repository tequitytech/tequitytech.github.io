import React, { useState } from 'react';
import './Navbar.css';
const Navbar = ({ setOpenModal }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const changeSelectedItemHandler = (index, elemId) => {
    setSelectedItem(index);
    const elmntToView = document.getElementById(elemId);
    elmntToView.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="flex items-center w-full bg-[#19335a] justify-between py-[16px] px-[32px] z-20">
        <div className="text-[#ffffff] flex items-center gap-[16px] text-[32px] font-[600]">
          <svg
            className="block"
            width="70"
            height="73"
            viewBox="0 0 70 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.2705 13.0534C51.2983 6.83864 43.3441 3.41919 34.8944 3.41919C26.4446 3.41919 18.5165 6.83864 12.5443 13.0534C6.57214 19.2681 3.28613 27.5453 3.28613 36.3382C3.28613 45.1311 6.57214 53.4083 12.5443 59.6231C18.5165 65.8378 26.4707 69.2572 34.9204 69.2572C43.3702 69.2572 51.3244 65.8378 57.2966 59.6231C63.2688 53.4083 66.5548 45.1311 66.5548 36.3382C66.5548 27.5453 63.2427 19.2681 57.2705 13.0534V13.0534Z"
              fill="url(#paint0_linear_141_2028)"
            />
            <path
              d="M34.8942 0C15.6216 0 0 16.256 0 36.3113C0 56.3667 15.6216 72.6227 34.8942 72.6227C54.1669 72.6227 69.7885 56.3667 69.7885 36.3113C69.7885 16.256 54.193 0 34.8942 0ZM34.8942 70.5873C16.7169 70.5873 1.95596 55.254 1.95596 36.3113C1.95596 17.3687 16.7169 2.06253 34.8942 2.06253C53.0716 2.06253 67.8325 17.3958 67.8325 36.3385C67.8325 55.2812 53.0977 70.5873 34.8942 70.5873Z"
              fill="url(#paint1_linear_141_2028)"
            />
            <path
              d="M56.4694 48.7074C55.6538 48.7074 54.9549 49.1972 54.6086 49.9053H51.4667V40.4416H46.3054C46.3039 40.4416 46.3031 40.4424 46.3016 40.4424V37.089H54.53C54.8423 37.8854 55.5918 38.4474 56.4694 38.4474C57.6266 38.4474 58.5651 37.4711 58.5651 36.2669C58.5651 35.0627 57.6266 34.0848 56.4694 34.0848C55.5918 34.0848 54.8423 34.6484 54.53 35.4448H46.3015V32.1492C46.303 32.1492 46.3041 32.15 46.3056 32.15H51.467V25.33L55.0626 23.3663C55.4352 23.7195 55.9259 23.9403 56.4694 23.9403C57.6265 23.9403 58.5651 22.964 58.5651 21.7598C58.5651 20.5555 57.6266 19.5793 56.4694 19.5793C55.3118 19.5793 54.3732 20.5555 54.3732 21.7598C54.3732 21.8007 54.3829 21.8384 54.3847 21.8794L49.8869 24.3361V30.5058H46.3056C46.3041 30.5058 46.303 30.5067 46.3015 30.5067V28.9901C46.3015 27.0938 45.2002 23.5068 41.0329 23.5068H31.447C29.6247 23.5068 26.1784 24.6524 26.1784 28.9901V30.513C26.1661 30.5122 26.1557 30.5057 26.1434 30.5057H22.5621V21.0982H17.9667C17.6959 20.22 16.9136 19.5793 15.9796 19.5793C14.8224 19.5793 13.8839 20.5555 13.8839 21.7598C13.8839 22.964 14.8224 23.9403 15.9796 23.9403C16.7952 23.9403 17.4944 23.4505 17.8409 22.7425H20.9821V32.15H26.1434C26.1558 32.15 26.1661 32.1436 26.1784 32.1428V35.4544C26.1619 35.4536 26.148 35.4448 26.1314 35.4448H17.9188C17.6067 34.6476 16.8572 34.0848 15.9796 34.0848C14.8224 34.0848 13.8839 35.0611 13.8839 36.2669C13.8839 37.4711 14.8224 38.4474 15.9796 38.4474C16.8569 38.4474 17.6063 37.8854 17.9188 37.089H26.1314C26.148 37.089 26.162 37.0802 26.1785 37.0794V40.6817C26.1661 40.6809 26.1558 40.6744 26.143 40.6744H20.982V47.3178L17.3857 49.2815C17.0131 48.9283 16.5228 48.7075 15.9796 48.7075C14.8224 48.7075 13.8838 49.6853 13.8838 50.8896C13.8838 52.0939 14.8224 53.0701 15.9796 53.0701C17.1368 53.0701 18.0754 52.0939 18.0754 50.8896C18.0754 50.8479 18.0657 50.8093 18.0638 50.7693L22.5621 48.3117V42.3186H26.143C26.1557 42.3186 26.1661 42.3114 26.1784 42.3114V43.6593C26.1784 45.5556 27.2798 49.141 31.447 49.141H41.0328C42.8552 49.141 46.3014 47.9953 46.3014 43.6593V42.085C46.3029 42.085 46.3037 42.0859 46.3052 42.0859H49.8865V51.5496H54.4814C54.7516 52.4286 55.5342 53.07 56.4693 53.07C57.6265 53.07 58.5651 52.0938 58.5651 50.8896C58.5651 49.6853 57.6265 48.7074 56.4694 48.7074V48.7074ZM44.7213 43.6593C44.7213 47.3572 41.4132 47.4937 41.031 47.4969H31.447C27.89 47.4969 27.7615 44.0494 27.7584 43.6593V28.99C27.7584 25.2882 31.072 25.1541 31.447 25.1508H41.0328C44.5899 25.1508 44.7183 28.5998 44.7213 28.99V43.6593Z"
              fill="#B8BFD6"
            />
            <path
              d="M41.3765 38.7553C41.3426 37.6365 40.7912 36.6561 39.9627 36.0554C39.9045 36.0116 39.8443 35.9709 39.7823 35.9334C39.3305 35.6489 38.8202 35.4803 38.2934 35.4415C38.1904 35.4303 38.0869 35.4246 37.9834 35.4244C37.9296 35.4244 37.6155 35.4241 37.1537 35.4235L36.6564 35.4174H36.4047V35.4098C35.2111 35.4083 34.1874 35.4069 34.0864 35.4069C33.2362 35.4069 32.5397 34.7136 32.4965 33.8454L32.4962 33.8405C32.4951 33.8182 32.4948 33.7957 32.4946 33.773C32.4948 33.7505 32.4952 33.728 32.4962 33.7056L32.4965 33.7008C32.5397 32.8325 33.2362 32.1392 34.0864 32.1392C34.2732 32.1392 38.226 32.1348 39.9627 32.1323H40.1586C40.5952 32.1323 40.9485 31.7642 40.9485 31.3102C40.9485 30.8562 40.5952 30.4881 40.1586 30.4881H38.6443V27.8389C38.6443 27.3845 38.2905 27.0168 37.8542 27.0168C37.4179 27.0168 37.0641 27.3845 37.0641 27.8389V30.4922C36.331 30.4928 35.5382 30.4932 35.4132 30.4934L35.2287 30.4967V27.8389C35.2287 27.3845 34.875 27.0168 34.4387 27.0168C34.0024 27.0168 33.6487 27.3845 33.6487 27.8389V30.5432C32.271 30.7424 31.1713 31.8517 30.9538 33.2708H30.9504C30.9264 33.4325 30.9143 33.5959 30.9141 33.7596C30.9141 33.7641 30.9144 33.7685 30.9144 33.773C30.9144 33.7776 30.9141 33.7821 30.9141 33.7866C30.9141 33.9529 30.927 34.116 30.9504 34.2754H30.9538C31.1809 35.7572 32.3699 36.9021 33.8331 37.0246L35.4132 37.0528L36.4046 37.0541V37.0492H38.0485C39.0084 37.0492 39.7966 37.8771 39.7989 38.8691C39.7966 39.861 39.0153 40.6679 38.0553 40.6679H31.9891V40.6766H31.942C31.5054 40.6766 31.1521 41.0447 31.1521 41.4987C31.1521 41.9527 31.5054 42.3208 31.942 42.3208H33.6488V44.8362C33.6488 45.2906 34.0026 45.6583 34.4389 45.6583C34.8752 45.6583 35.2289 45.2906 35.2289 44.8362V42.3208H36.6564L37.0643 42.3157V44.8362C37.0643 45.2906 37.418 45.6583 37.8543 45.6583C38.2906 45.6583 38.6444 45.2906 38.6444 44.8362V42.25C39.0468 42.1756 39.4325 42.0247 39.7823 41.8048C39.8444 41.7673 39.9046 41.7266 39.9627 41.6828C40.7912 41.0821 41.3426 40.1017 41.3766 38.9829C41.3778 38.954 41.3783 38.9249 41.3786 38.8958C41.3788 38.8883 41.3792 38.8809 41.3792 38.8733V38.8649C41.3792 38.8573 41.3788 38.8499 41.3786 38.8424C41.3783 38.8133 41.3776 38.7843 41.3765 38.7553V38.7553Z"
              fill="#B8BFD6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_141_2028"
                x1="0.000128476"
                y1="72.6496"
                x2="72.5924"
                y2="2.89028"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#19335A" />
                <stop offset="0.786" stop-color="#0C58B6" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_141_2028"
                x1="0"
                y1="72.6498"
                x2="72.5923"
                y2="2.89055"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#19335A" />
                <stop offset="0.786" stop-color="#0C58B6" />
              </linearGradient>
            </defs>
          </svg>
          <p className="hidden sm:block catchphrase-sentence">Tequity</p>
        </div>
        <div className="hidden sm:flex items-center gap-[24px]">
          <button
            onClick={() => changeSelectedItemHandler(0, 'home')}
            className={
              selectedItem === 0
                ? 'selected-item-navbar text-[14px] uppercase text-[#ffffff]'
                : 'text-[14px] font-[500] not-italic uppercase text-[#ffffff] hover:text-[#ffffff]'
            }
          >
            Home
          </button>
          <button
            onClick={() => changeSelectedItemHandler(1, 'aboutUs')}
            className={
              selectedItem === 1
                ? 'selected-item-navbar text-[14px] uppercase text-[#ffffff]'
                : 'text-[14px] font-[500] not-italic uppercase text-[#ffffff] hover:text-[#ffffff]'
            }
          >
            About us
          </button>
          <button
            onClick={() => changeSelectedItemHandler(2, 'ourServices')}
            className={
              selectedItem === 2
                ? 'selected-item-navbar text-[14px] uppercase text-[#ffffff]'
                : 'text-[14px] font-[500] not-italic uppercase text-[#ffffff] hover:text-[#ffffff]'
            }
          >
            Services
          </button>
          <button
            onClick={() => changeSelectedItemHandler(3, 'testimonials')}
            className={
              selectedItem === 3
                ? 'selected-item-navbar text-[14px] uppercase text-[#ffffff]'
                : 'text-[14px] font-[500] not-italic uppercase text-[#ffffff] hover:text-[#ffffff]'
            }
          >
            Testimonials
          </button>
          <button
            onClick={() => setOpenModal(true)}
            className="contact-us-btn border-[1px] border-[#ffffff] text-[14px] px-[16px] py-[8px] rounded-[5px] uppercase text-[#ffffff] hover:text-[#252525] hover:bg-[#ffffff]"
          >
            Talk to an expert
          </button>
        </div>
        <div className="flex items-center relative sm:hidden">
          <button onClick={() => setShowDropDown(!showDropDown)}>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              id="i-menu"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
            </svg>
          </button>
        </div>
      </div>
      {showDropDown && (
        <div className="w-full absolute bg-[#19335a] flex flex-col items-start z-10 py-[16px] gap-[16px] px-[16px] mobile-drop-down sm:hidden">
          <button
            onClick={() => changeSelectedItemHandler(0, 'home')}
            className="text-[14px] font-[500] not-italic uppercase text-[#ffffff] hover:text-[#ffffff]"
          >
            Home
          </button>
          <button
            onClick={() => changeSelectedItemHandler(1, 'aboutUs')}
            className="text-[14px] font-[500] not-italic uppercase text-[#ffffff] hover:text-[#ffffff]"
          >
            About us
          </button>
          <button
            onClick={() => changeSelectedItemHandler(2, 'ourServices')}
            className="text-[14px] font-[500] not-italic uppercase text-[#ffffff] hover:text-[#ffffff]"
          >
            Services
          </button>
          <button
            onClick={() => changeSelectedItemHandler(3, 'testimonials')}
            className="text-[14px] font-[500] not-italic uppercase text-[#ffffff] hover:text-[#ffffff]"
          >
            Testimonials
          </button>
          <button
            onClick={() => setOpenModal(true)}
            className="contact-us-btn border-[1px] border-[#ffffff] text-[14px] px-[16px] py-[8px] rounded-[5px] uppercase text-[#ffffff] hover:text-[#252525] hover:bg-[#ffffff]"
          >
            Talk to an expert
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
