'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-12 bg-red-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Revolutionize Your Sports Career?
        </motion.h2>
        <Link href="/signup">
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="bg-white text-red-900 font-bold py-2 px-4 rounded inline-block"
          >
            Sign Up Now
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
