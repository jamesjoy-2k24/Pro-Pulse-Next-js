'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-bottom h-screen relative"
      style={{ backgroundImage: 'url(/Hero.jpeg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10">
        <section className="h-full flex items-center">
          <div className="w-[90%] mx-auto  justify-between">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-between"
            >
              {/* ========= hero content ========= */}
              <div className="lg:w-full lg:max-w-[570px] lg:text-justify mt-12">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-left lg:text-6xl text-white font-bold leading-tight md:leading-normal"
                >
                  Revolutionize Sports Player with{' '}
                  <span className="text-red-600 font-bold">Pro-pulse</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-white mt-6 md:mt-8 lg:mt-10 text-sm md:text-xl text-center lg:text-left"
                >
                  PRO PULSE is a web app that allows you to hire eligible &
                  verified sports players anytime, from anywhere you can access.
                  A simple and effective way to search and find your desired
                  player.
                </motion.p>
                <Link href={''}>
                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-6 md:mt-8 lg:mt-10 px-6 py-3 justify-center flex mx-auto bg-red-700 text-white font-semibold rounded-lg hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>

              {/* ======== hero left ========= */}
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: -30 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8 lg:mt-12 flex flex-col sm:flex-row md:flex-row lg:flex-col lg:items-center gap-4 lg:gap-10 ml-[4rem]"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <motion.h1 className="text-3xl lg:text-4xl text-black font-bold rounded-lg bg-white p-1 md:p-2 lg:p-3">
                    300+
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-white font-semibold text-sm md:text-base"
                  >
                    Active Players
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    ⭐⭐⭐⭐⭐
                  </motion.p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <motion.h1 className="text-3xl lg:text-4xl text-black font-bold rounded-lg bg-white p-1 md:p-2 lg:p-3">
                    100+
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-white font-semibold text-sm md:text-base"
                  >
                    Active Sponsors
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    ⭐⭐⭐⭐
                  </motion.p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <motion.h1 className="text-3xl lg:text-4xl text-black font-bold rounded-lg bg-white p-1 md:p-2 lg:p-3">
                    100+
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-white font-semibold text-sm md:text-base"
                  >
                    Bookings
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    ⭐⭐⭐⭐⭐
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
