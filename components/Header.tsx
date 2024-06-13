import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  hover: { scale: 1.1, textShadow: '0px 0px 8px rgb(255, 255, 255)' },
};

const Header: React.FC = () => {
  return (
    <motion.header
      className="bg-blue-600 text-white p-4 shadow-lg"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">
            <motion.div whileHover={{ scale: 1.1 }}>Pro-Pulse</motion.div>
          </a>
        </Link>
        <div className="flex space-x-4">
          <Link href="/login" legacyBehavior>
            <a>
              <motion.div variants={linkVariants} whileHover="hover">
                Login
              </motion.div>
            </a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a>
              <motion.div variants={linkVariants} whileHover="hover">
                Register
              </motion.div>
            </a>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
