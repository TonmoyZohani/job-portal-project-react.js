import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footers = () => {
  return (
    <div className="bg-slate-800 w-full font-sans">
      <div className="container md:max-w-7xl mx-auto  mt-20 text-white px-20">
        <div className="py-28 flex justify-between">
          {/* 1st div */}
          <div>
            <h2>Share Tour</h2>
            <p className="w-60 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quibusdam est id assumenda odio.
            </p>
            <div className="flex space-x-2 mt-2">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* 2nd div */}
          <div className="px-8 hidden md:block">
            <h2 className="mb-3 font-semibold">About</h2>
            <div className="text-sm space-y-1">
              <p>About Us</p>
              <p>Features</p>
              <p>News</p>
              <p>Menu</p>
            </div>
          </div>

          {/* 3rd div */}
          <div className="mx-8 hidden md:block">
            <h2 className="mb-3 font-semibold">Company</h2>
            <div className="text-sm space-y-1">
              <p>Why Others</p>
              <p>Partner with us</p>
              <p>FAQ</p>
              <p>Blog</p>
            </div>
          </div>

          {/* 4th div */}
          <div className="mx-8 hidden md:block">
            <h2 className="mb-3 font-semibold">Support</h2>
            <div className="text-sm space-y-1">
              <p>Account</p>
              <p>Support Center</p>
              <p>Feedback</p>
              <p>Contact Us</p>
            </div>
          </div>

          {/* 5th div */}
          <div className="hidden md:block">
            <h2 className="mb-3 font-semibold">Get in Touch</h2>
            <div className="text-sm space-y-2">
              <p>Question to feedback?</p>
              <p>we'd love to hear from you</p>
              {/* seachbar */}
              <div className="border-2 border-white bg-white rounded-2xl px-4 py-2 shadow-md flex justify-between items-center ">
                <input
                  className="bg-transparent focus:outline-none w-full text-black"
                  type="text"
                  placeholder="Email Address"
                />
                <svg
                  className="text-gray-400 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l6-6m0 0l-6-6m6 6h-18"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
