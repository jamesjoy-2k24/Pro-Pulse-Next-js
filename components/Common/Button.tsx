import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  text: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text }) => {
  return (
    <motion.div className="relative inline-block">
      <motion.button className="relative z-10 px-4 py-2 shadow-lg  border-none text-white font-extrabold rounded-lg overflow-hidden group">
        {text}
        <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-gray-500 opacity-0 transition-all duration-500 transform scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-bottom-left pointer-events-none"></span>
      </motion.button>
    </motion.div>
  );
};

export default AnimatedButton;
