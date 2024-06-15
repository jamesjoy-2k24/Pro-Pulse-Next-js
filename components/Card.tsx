'use client';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface Player {
  photo: string;
  name: string;
  age: number;
  sports: string[];
  isApproved: string;
  review: {
    averageRating: number;
    length: number;
  };
  _id: string;
  label?: string;
}

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => {
  const { name, age, sports, isApproved, review, _id, label } = player;

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      className="relative shadow-md shadow-purple-700 bg-red-900 rounded-r-md rounded-bl-md"
    >
      {label && (
        <span className="absolute  transform -rotate-45  text-white text-sm font-bold py-1">
          {label}
        </span>
      )}
      <div
        className="card w-72 h-96 bg-black flex flex-col rounded-r-md rounded-bl-md cursor-pointer"
        style={{
          clipPath:
            'polygon(50px 0%, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0% 50px)',
        }}
      >
        <div className="w-28 h-28 rounded-[20px] border-2 border-red-900 m-auto mt-6">
          <Image
            src={''}
            alt={name}
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <div className="text-center mt-4">
          <span className="text-white font-bold block text-xl">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </span>
          <span className="text-gray-400 block text-sm mb-2">Age: {age}</span>
        </div>
        <div className="mt-1 text-center">
          {sports.map((sport, index) => (
            <span
              key={index}
              className="bg-gray-700 rounded-2xl px-3 py-1 text-white font-bold inline-block mx-1 my-1"
            >
              {sport}
            </span>
          ))}
        </div>
        {isApproved === 'approved' && (
          <div className="text-center text-green-500 font-bold mb-2">
            Approved
          </div>
        )}
        <div className="mt-auto mb-4">
          <div className="flex justify-center items-center mt-2">
            <FaStar className="text-yellow-400" />
            <span className="text-white font-bold text-center block text-sm ml-2">
              {review.averageRating} / 5{' '}
              <span className="ml-2">( {review.length} )</span>
            </span>
          </div>
          <Link href={`/players/${_id}`}>
            <button className="mt-4 py-2 px-4 block m-auto rounded-2xl border-none font-bold text-white bg-red-800 hover:bg-red-600 transition-all duration-300">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PlayerCard;
