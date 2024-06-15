'use client';
import { useState, useEffect, useRef } from 'react';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from 'react-icons/fa';
import Logo from '../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 50);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {/* First Navbar */}
      <div
        className={`fixed w-full bg-black text-gray-300 hover:text-white transition-transform duration-300 ease-in-out z-20 ${
          visible ? 'translate-y-0' : '-translate-y-16'
        }`}
      >
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image src={Logo} alt="Logo" width={30} height={30} />
              <div className="text-2xl font-extrabold">Pro-Pulse</div>
            </div>
            <div className="hidden md:flex">
              <div className="relative group">
                <div
                  className="flex items-center cursor-pointer gap-4 "
                  onClick={toggleMenu}
                >
                  <Link href={''} className="text-md font-extrabold">
                    Login
                  </Link>
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {isOpen && (
                  <div
                    ref={menuRef}
                    className="absolute left-0 mt-3 w-40 bg-black text-white rounded-lg shadow-lg opacity-100 duration-300 transition-all"
                  >
                    <Link
                      href={''}
                      className="block px-4 py-2 hover:bg-gray-900 duration-300 transition-all text-sm font-bold"
                      onClick={closeMenu}
                    >
                      As Sports Player
                    </Link>
                    <Link
                      href={''}
                      className="block px-4 py-2 hover:bg-gray-900 duration-300 transition-all text-sm font-bold"
                      onClick={closeMenu}
                    >
                      As Sponsor
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Navbar (Fixed on Scroll) */}
      <div
        className={`fixed top-0 w-full bg-black text-gray-300 z-10 shadow-lg transition-transform duration-300 ease-in-out ${
          isScrolled ? 'translate-y-0' : '-translate-y-16'
        }`}
      >
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image src={Logo} alt="Logo" width={30} height={30} />
              <div className="text-2xl font-extrabold">Pro-Pulse</div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link
                href={''}
                className="hover:text-white px-3 py-2 text-md font-extrabold"
              >
                Home
              </Link>
              <Link
                href={''}
                className="hover:text-white px-3 py-2 text-md font-extrabold"
              >
                About
              </Link>
              <Link
                href={''}
                className="hover:text-white px-3 py-2 text-md font-extrabold"
              >
                Services
              </Link>
              <Link
                href={''}
                className="hover:text-white px-3 py-2 text-md font-extrabold"
              >
                Contact
              </Link>
              <div className="relative flex items-center">
                <FaSearch className="absolute ml-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-700 text-white text-center rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed z-20 bg-black text-gray-300 transition-transform duration-300 transform translate-y-0">
          <div className="px-2 pt-16 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link
              href={''}
              className="hover:text-white block px-3 py-2 text-base font-extrabold"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href={''}
              className="hover:text-white block px-3 py-2 text-base font-extrabold"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href={''}
              className="hover:text-white block px-3 py-2 text-base font-extrabold"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href={''}
              className="hover:text-white block px-3 py-2 text-base font-extrabold"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="relative px-3 py-2 flex items-center">
              <FaSearch className="absolute ml-4" />

              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white text-center"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
