'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaTrophy, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-lg text-gray-700 mb-6"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <FaCheckCircle className="text-4xl text-red-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Mission</h3>
            <p className="text-gray-700">
              Our mission is to create a seamless and efficient connection
              between sports talent and opportunities, ensuring every athlete
              finds their perfect match.
            </p>
          </div>
          <div className="text-center">
            <FaUsers className="text-4xl text-red-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p className="text-gray-700">
              We envision a world where sports recruitment is transparent,
              efficient, and accessible to all, promoting excellence and
              fairness in sports.
            </p>
          </div>
          <div className="text-center">
            <FaTrophy className="text-4xl text-red-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Key Features</h3>
            <p className="text-gray-700">
              Discover top-tier talent, verified profiles, global access, and an
              intuitive user interface that simplifies your recruitment process.
            </p>
          </div>
          <div className="text-center">
            <FaGlobe className="text-4xl text-red-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Benefits</h3>
            <p className="text-gray-700">
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
