'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaTrophy, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-1xl font-bold text-center mb-6"
        >
          <p className="font-bold text-center ">
            <span className="relative inline-block">
              <span className="inline-block text-[3rem] text-white p-1 relative z-10">
                About Us!
              </span>
              <span className="rounded-[10px] absolute inset-0 bg-red-700 z-0 transform -skew-x-3 -skew-y-3"></span>
            </span>
          </p>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-lg text-gray-300 font-[300] mb-[3rem]"
        >
          Pro-Pulse is dedicated to revolutionizing the way sports players are
          hired. Our mission is to connect players with the best opportunities
          and help teams find the perfect talent. We believe in transparency,
          efficiency, and excellence in sports recruitment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center lg:grid-cols-4 gap-8"
        >
          <div className="text-center shadow-md hover:bg-white hover:text-black duration-300 transition-all text-white bg-black p-3 shadow-purple-500 border-none rounded-2xl w-[330px] h-[330px] flex flex-col justify-center">
            <FaCheckCircle className="text-8xl text-red-900 mx-auto mb-4 shadow-lg shadow-gray-500 rounded-full py-4 border-none bg-white" />
            <h3 className="text-xl font-bold mb-2">Mission</h3>
            <p className="text-gray-600">
              Our mission is to create a seamless and efficient connection
              between sports talent and opportunities, ensuring every athlete
              finds their perfect match.
            </p>
          </div>
          <div className="text-center shadow-md hover:bg-white hover:text-black duration-300 transition-all text-white bg-black p-3 shadow-purple-500 border-none rounded-2xl w-[330px] h-[330px] flex flex-col justify-center">
            <FaUsers className="text-8xl text-red-900 mx-auto mb-4 shadow-lg shadow-gray-500 rounded-full py-4 border-none bg-white" />
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p className="text-gray-600">
              We envision a world where sports recruitment is transparent,
              efficient, and accessible to all, promoting excellence and
              fairness in sports.
            </p>
          </div>
          <div className="text-center shadow-md hover:bg-white hover:text-black duration-300 transition-all text-white bg-black p-3 shadow-purple-500 border-none rounded-2xl w-[330px] h-[330px] flex flex-col justify-center">
            <FaTrophy className="text-8xl text-red-900 mx-auto mb-4 shadow-lg shadow-gray-500 rounded-full py-4 border-none bg-white" />
            <h3 className="text-xl font-bold mb-2">Key Features</h3>
            <p className="text-gray-600">
              Discover top-tier talent, verified profiles, global access, and an
              intuitive user interface that simplifies your recruitment process.
            </p>
          </div>
          <div className="text-center shadow-md hover:bg-white hover:text-black duration-300 transition-all text-white bg-black p-3 shadow-purple-500 border-none rounded-2xl w-[330px] h-[330px] flex flex-col justify-center">
            <FaGlobe className="text-8xl text-red-900 mx-auto mb-4 shadow-lg shadow-gray-500 rounded-full py-4 border-none bg-white" />
            <h3 className="text-xl font-bold mb-2">Benefits</h3>
            <p className="text-gray-600">
              Benefit from a diverse pool of athletes, a user-friendly platform,
              and a streamlined hiring process that saves you time and effort.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
