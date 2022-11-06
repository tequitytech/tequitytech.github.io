import React from 'react';
import './ClientsSection.css';
const ClientsSection = () => {
  return (
    <div className="w-full py-[32px] flex flex-col gap-[32px] client-section-container">
      {/* <p className="text-center font-[600] text-[40px] heading-section">
        Our Clients
      </p> */}
      <h3 class="text-[40px] sm:text-4xl leading-normal font-extrabold text-[#252525] text-center">
        Our <span class="text-[#4675c0]">Clients</span>
      </h3>
      <div className="slider">
        <div className="slide-track">
          <div className="flex items-center sm:gap-[100px]">
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://static.freshtohome.com/images/logo/2021/logo-medium.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Fresh to home
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://www.chargezone.com/assets/img/CZLogo.svg"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Chargezone
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://cdn.contactcenterworld.com/images/company/sampingan-largex5-logo.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Sampingan</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://monkcircles.com/wp-content/uploads/2022/09/Monk-Circle-LOGO-White-PNG.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Monk Circles
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://thehousemonk.com/wp-content/uploads/2020/07/THM-Logo_Black-1-1.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                The House Monk
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://www.hoppapp.com/images/black.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Hopp</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://img1.wsimg.com/isteam/ip/961df971-f1a6-4e5e-b2f8-476b663fbcbc/blob-0004.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Frilanze</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://static.freshtohome.com/images/logo/2021/logo-medium.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Fresh to home
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://www.chargezone.com/assets/img/CZLogo.svg"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Chargezone
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://cdn.contactcenterworld.com/images/company/sampingan-largex5-logo.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Sampingan</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://monkcircles.com/wp-content/uploads/2022/09/Monk-Circle-LOGO-White-PNG.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Monk Circles
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://thehousemonk.com/wp-content/uploads/2020/07/THM-Logo_Black-1-1.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                The House Monk
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://www.hoppapp.com/images/black.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Hopp</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://img1.wsimg.com/isteam/ip/961df971-f1a6-4e5e-b2f8-476b663fbcbc/blob-0004.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Frilanze</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://static.freshtohome.com/images/logo/2021/logo-medium.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Fresh to home
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://www.chargezone.com/assets/img/CZLogo.svg"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Chargezone
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://cdn.contactcenterworld.com/images/company/sampingan-largex5-logo.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Sampingan</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://monkcircles.com/wp-content/uploads/2022/09/Monk-Circle-LOGO-White-PNG.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Monk Circles
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://thehousemonk.com/wp-content/uploads/2020/07/THM-Logo_Black-1-1.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                The House Monk
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://www.hoppapp.com/images/black.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Hopp</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://img1.wsimg.com/isteam/ip/961df971-f1a6-4e5e-b2f8-476b663fbcbc/blob-0004.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Frilanze</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://static.freshtohome.com/images/logo/2021/logo-medium.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Fresh to home
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://www.chargezone.com/assets/img/CZLogo.svg"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Chargezone
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://cdn.contactcenterworld.com/images/company/sampingan-largex5-logo.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Sampingan</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://monkcircles.com/wp-content/uploads/2022/09/Monk-Circle-LOGO-White-PNG.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                Monk Circles
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px] slide">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://thehousemonk.com/wp-content/uploads/2020/07/THM-Logo_Black-1-1.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">
                The House Monk
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="https://www.hoppapp.com/images/black.png"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Hopp</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[16px]">
              <div className="h-[200px] flex items-center justify-center">
                <img
                  className="w-[200px]"
                  src="	https://img1.wsimg.com/isteam/ip/961df971-f1a6-4e5e-b2f8-476b663fbcbc/blob-0004.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95"
                />
              </div>
              <p className="text-[#252525] text-[14px] font-[600]">Frilanze</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
