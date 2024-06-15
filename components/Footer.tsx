'use client';
import Link from 'next/link';
import {
  MdLocationOn,
  MdOutlinePhone,
  MdOutlineMail,
  MdInfo,
  MdAccessTime,
  MdSecurity,
  MdGavel,
} from 'react-icons/md';
import { FaLaptop, FaUsers, FaFutbol } from 'react-icons/fa';
import {
  RiLinkedinFill,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
} from 'react-icons/ri';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    path: 'https://www.linkedin.com/',
    icon: <RiLinkedinFill />,
  },
  {
    path: 'https://www.facebook.com/',
    icon: <RiFacebookFill />,
  },
  {
    path: 'https://twitter.com/',
    icon: <RiTwitterFill />,
  },
  {
    path: 'https://www.instagram.com/',
    icon: <RiInstagramFill />,
  },
];

const quickLinks01 = [
  {
    path: '/services',
    display: 'Services',
    icon: <FaUsers />,
  },
  {
    path: '/players',
    display: 'Find Players',
    icon: <FaFutbol />,
  },
  {
    path: '/contact',
    display: 'Contact',
    icon: <FaLaptop />,
  },
];

const quickLinks02 = [
  {
    path: '/home',
    icon: <MdLocationOn />,
    display: 'Location',
  },
  {
    path: '/home',
    icon: <MdOutlinePhone />,
    display: 'Phone',
  },
  {
    path: '/home',
    icon: <MdOutlineMail />,
    display: 'Email',
  },
];

const additionalLinks = [
  {
    path: '/about',
    icon: <MdInfo />,
    display: 'About Us',
  },

  {
    path: '/privacy',
    icon: <MdSecurity />,
    display: 'Privacy Policy',
  },
  {
    path: '/legal',
    icon: <MdGavel />,
    display: 'Legal Terms',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ======= Footer Logo and Social Links ======= */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl font-bold text-center md:text-left mb-4 cursor-pointer"
              >
                Pro Pulse
              </motion.h2>
            </Link>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-sm flex items-center text-center md:text-left leading-7 font-semibold text-gray-400 mb-6"
            >
              &copy; {year} Pro Pulse. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex gap-4 justify-center md:justify-start mb-4"
            >
              {socialLinks.map((link, index) => (
                <Link href={link.path} key={index} legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-900 hover:bg-primaryColor transition duration-300"
                  >
                    {link.icon}
                  </motion.a>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* ======= Footer Quick Links 1 ======= */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg font-bold mb-4 text-center md:text-left"
            >
              Quick Links
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-2"
            >
              {quickLinks01.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="flex items-center text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.icon}
                    <span className="ml-2">{link.display}</span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ======= Footer Quick Links 2 ======= */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg font-bold mb-4 text-center md:text-left"
            >
              Useful Links
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="space-y-2"
            >
              {additionalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="flex items-center text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.icon}
                    <span className="ml-2">{link.display}</span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ======= Footer Quick Links 3 ======= */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-lg font-bold mb-4 text-center md:text-left"
            >
              Stay Connected
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="space-y-2"
            >
              {quickLinks02.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="flex items-center text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.icon}
                    <span className="ml-2">{link.display}</span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
