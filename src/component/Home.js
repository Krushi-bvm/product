import React from 'react';
import Navbar from './Navbar';
import img1 from '../assets/abs.png';
import { Instagram, Facebook, YouTube } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import About from './About';
import Portfolio from './Portfolio';

function Home() {
  return (
    <>
      <Navbar />
      <div className=" bg-ecf0f3 flex items-center justify-center px-10">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-screen-lg">
          {/* Left Section */}
          <div className="max-w-lg">
            <p className="text-xs mb-4 font-sans tracking-[.15em]">WELCOME TO MY WORLD</p>
            <h1 className="text-5xl font-bold mb-6 font-sans">
              Hi, I'm{' '}
              <span className="text-[#f3024d]">Jone Lee, <br />a</span> Professional Coder.
            </h1>

            <p className="font-sans text-lg mb-6 text-[#a1a4a6]">
              I use animation as a third dimension by which to simplify experiences and guide through each and every interaction. I'm not adding motion just to spruce things up,
              but doing it in ways that matter.
            </p>

            {/* Social Links */}
            <div className="flex mt-10 gap-10">
              <div>
                <h2 className="text-xs font-sans font-bold text-gray-700 mb-4 tracking-[.15em]">FIND WITH ME</h2>
                <div className="flex gap-4 mt-5">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/jonelee_/"
                    className="flex items-center justify-center w-12 h-12 bg-[#eaeff1] rounded-lg shadow-lg hover:shadow-xl text-blue-500"
                  >
                    <Instagram sx={{ color: 'black', backgroundColor: '#f8f9fa' }} />
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/jonelee.official/"
                    className="flex items-center justify-center w-12 h-12 bg-[#eaeff1] rounded-lg shadow-lg hover:shadow-xl text-blue-500"
                  >
                    <Facebook sx={{ color: 'black' }} />
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/channel/UCxQqQ5Q5pZU6V4c9yXrjQ2A"
                    className="flex items-center justify-center w-12 h-12 bg-[#eaeff1] rounded-lg shadow-lg hover:shadow-xl text-red-500"
                  >
                    <TwitterIcon sx={{ color: 'black' }} />
                  </a>
                </div>
              </div>
              <h2 className="text-xs font-sans font-bold text-gray mb-2 tracking-[.15em]">BEST SKILL ON</h2>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Hero Image"
              className="rounded-lg w-[500px] h-[600px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* About and Portfolio Sections */}
      <div className="px-10">
        <About />
        <Portfolio />
      </div>
    </>
  );
}

export default Home;
