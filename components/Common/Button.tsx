import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Click Me
    </motion.button>
  );
};

export default AnimatedButton;
