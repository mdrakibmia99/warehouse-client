import React from 'react';

const Footer = () => {
    return (
        <div style={{maxHeight:"100%"}}>
            <footer className="text-center text-white bg-[#caced1]" >
  <div className="container p-6">
    <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
      <div className="lg:mb-0 mb-6">
        <img src="https://i.ibb.co/H28Hy9y/img-1.webp" className="w-full rounded-md shadow-lg" />
      </div>
      <div className="lg:mb-0 mb-6">
        <img src="https://i.ibb.co/T8H3Nmh/img-2.webp" className="w-full rounded-md shadow-lg" />
      </div>
      <div className="lg:mb-0 mb-6">
        <img src="https://i.ibb.co/7nqfjjV/img-3.webp" className="w-full rounded-md shadow-lg" />
      </div>
      <div className="lg:mb-0 mb-6">
        <img src="https://i.ibb.co/Bn6QD3D/img-5.webp" className="w-full rounded-md shadow-lg" />
      </div>
      <div className="lg:mb-0 mb-6">
        <img src="https://i.ibb.co/1KpMtHx/img-6.webp" className="w-full rounded-md shadow-lg" />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://i.ibb.co/XbV5XL3/img-7.webp" className="w-full rounded-md shadow-lg" />
      </div>
    </div>
  </div>
  

  <div className="text-center p-4 bg-gray-500" >
    © 2021 Copyright:
  </div>
</footer>
        </div>
    );
};

export default Footer;