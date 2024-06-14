'use client';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../public/logo.png';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`fixed w-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
          isScrolled ? '-translate-y-16' : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">
              <Image src={Logo} alt="Logo" width={40} height={40} />
              {/* <div>Pro-Pulse</div> */}
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="#"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Navbar */}
      <div className="fixed top-0 w-full bg-gradient-to-r from-black to-gray-800 text-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold flex items-center gap-3">
              <Image src={Logo} alt="Logo" width={40} height={40} />
              <div>Pro-Pulse</div>
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="#"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
