import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

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
      <footer className="text-center text-white bg-gray-500" >
      <div className='container mx-auto  rounded-xl py-4 flex justify-center items-center'>
                <h2 className='text-white mr-4 hidden lg:block md:block'>Connect with me there:</h2>
                <div className='grid lg:grid-cols-5 gap-2 md:grid-cols-4 grid-cols-4'>
                    <SocialIcon target={'_blank'} className='mx-2 border-2 rounded-full bg-white border-white hover:scale-[1.1] transition duration-200 ease-in-out' url="https://www.facebook.com/Rk.rakib666"></SocialIcon>
                    <SocialIcon target={'_blank'}  className='mx-2 border-2 rounded-full bg-white border-white hover:scale-[1.1] transition duration-200 ease-in-out' url="https://www.linkedin.com/in/md-rakib-mia-949773229"></SocialIcon>
                    <SocialIcon target={'_blank'} className='mx-2 border-2 rounded-full bg-white border-white hover:scale-[1.1] transition duration-200 ease-in-out' url="https://twitter.com/MdRakib63447617"></SocialIcon>
                    <SocialIcon target={'_blank'} className='mx-2 border-2 rounded-full bg-white border-white hover:scale-[1.1] transition duration-200 ease-in-out' url='https://github.com/rkrakibhasan680'></SocialIcon>
                </div>
            </div>
        <div className="container p-6 hidden lg:block md:block">
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

<hr />
        <div className="text-center p-4 bg-gray-500" >
          &copy; Copy Right {currentYear} All right reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;