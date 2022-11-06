import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ClientsSection from './Components/ClientsSection/ClientsSection';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import OurServices from './Components/OurServices/OurServices';
import OurSpeciality from './Components/OurSpeciality/OurSpeciality';
import FaqSection from './Components/FaqSection/FaqSection';
import React, { useState } from 'react';
import Modal from './Components/Modal/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <div>
        <Navbar setOpenModal={setOpenModal} />
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div
        id="home"
        className="w-[100%] h-[600px] flex items-center gap-[32px] px-[40px] text-[#ffffff] sm:px-[100px] bg-[#eaebed]"
      >
        <div className="h-full w-full sm:p-[24px] sm:w-[30%] relative">
          <div className="absolute bottom-32 sm:bottom-24 flex flex-col gap-[24px] catchphrase-sentence">
            <p className="text-[32px] uppercase font-[600] main-text">
              Bringing product development expertise to every company.
            </p>
            <p>
              At Tequity we tailor products carefully to ensure that it meets
              your needs.
            </p>
            <button
              onClick={() => setOpenModal(true)}
              className="border-[1px] w-fit border-[#252525] text-[14px] px-[16px] py-[8px] rounded-[5px] uppercase hover:text-[#ffffff] hover:bg-[#252525] contact-us-btn"
            >
              Talk to an expert
            </button>
          </div>
        </div>
        <div className="hidden sm:w-[60%] h-full sm:flex sm:items-center sm:justify-end px-[40px] py-[40px] right-half">
          {/* <div className="phone-app">
            <span className=""></span>
            <div className="relative top-[20px]">
              <img src="https://tequity.tech/images/Transparent.png" />
              <div className="text-[24px] font-[600] px-[16px] py-[8px] rounded-[5px] catchphrase-sentence">
                Let us build the product while you build the business.
              </div>
            </div>
            <div className="w-full flex items-center h-full justify-center float-animation-outer z-[-5]">
              <hr className="h-[150px] w-[2px] border-[5px] border-[#19335a] float-animation z-[-5]" />
            </div>
          </div> */}
        </div>
      </div>
      <OurSpeciality />
      <OurServices setOpenModal={setOpenModal} />
      <Testimonials />
      <ClientsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
