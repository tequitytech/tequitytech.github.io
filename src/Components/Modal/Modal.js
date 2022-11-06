import React from 'react';
import './Modal.css';

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modal-main-center">
      <div className="modal-container">
        <div className="">
          <div className="flex items-center justify-between p-[16px]">
            <p className="text-[24px] text-[#323232] font-[600]">
              Get in touch with us.
            </p>
            <button
              type="button"
              className="hover:invert-[40%]"
              onClick={() => setOpenModal(false)}
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="modal-body py-[32px]">
          <form className="flex flex-col gap-[24px]">
            <div className="flex items-center gap-[16px] text-[14px]">
              <input
                placeholder="Name"
                className="border-[0.5px] border-[#0505051A] px-[16px] py-[8px] rounded-[5px] focus:outline-none focus:border-[2px] focus:border-[#4675c0] focus:py-[7px]"
                type="text"
              />
              <input
                placeholder="johndoe@gmail.com"
                className="border-[0.5px] border-[#0505051A] px-[16px] py-[8px] rounded-[5px] focus:outline-none focus:border-[2px] focus:border-[#4675c0] focus:py-[7px]"
                type="email"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Any Message"
              className="w-full border-[0.5px] border-[#0505051A] px-[16px] py-[8px] rounded-[5px] focus:outline-none focus:border-[2px] focus:border-[#4675c0] focus:py-[7px]"
            />
            <button
              type="submit"
              className="bg-[#323232] text-[#ffffff] submit-button-modal p-[16px] rounded-[5px] hover:bg-[#323232ee]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
