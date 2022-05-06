import React from 'react';

const Footer = () => {
  const footerImg1 = 'https://i.ibb.co/H28Hy9y/img-1.webp';
  const footerImg2 = 'https://i.ibb.co/7nqfjjV/img-3.webp';
  const footerImg3 = 'https://i.ibb.co/Bn6QD3D/img-5.webp';
  const footerImg4 = 'https://i.ibb.co/1KpMtHx/img-6.webp';
  const footerImg5 = 'https://i.ibb.co/XbV5XL3/img-7.webp';
  const footerImg6 = 'https://i.ibb.co/T8H3Nmh/img-2.webp';
  const today = new Date();
    const currentYear = today.getFullYear();

  return (
    <div style={{ maxHeight: "100%" }}>
      <footer className="text-center text-white bg-[#caced1]" >
        <div className="container p-6 ">
          <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
            <div className="lg:mb-0 mb-6">
              <img src={footerImg1} alt="footerImg" className="w-full rounded-md shadow-lg" />
            </div>
            <div className="lg:mb-0 mb-6">
              <img src={footerImg2} className="w-full rounded-md shadow-lg" alt="footerImg" />
            </div>
            <div className="lg:mb-0 mb-6">
              <img src={footerImg3} className="w-full rounded-md shadow-lg" alt="footerImg" />
            </div>
            <div className="lg:mb-0 mb-6">
              <img src={footerImg4} className="w-full rounded-md shadow-lg" alt="footerImg" />
            </div>
            <div className="lg:mb-0 mb-6">
              <img src={footerImg5} className="w-full rounded-md shadow-lg" alt="footerImg" />
            </div>
            <div className="lg:mb-0 mb-6">
              <img src={footerImg6} className="w-full rounded-md shadow-lg" alt="footerImg" />
            </div>
          </div>
        </div>


        <div className="text-center p-4 bg-gray-500" >
          &copy; Copy Right {currentYear} All right reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;