'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PlayerCard from '../components/Card';

const dummyPlayers = [
  {
    photo: '/images/player1.jpg',
    name: 'John Doe',
    age: 25,
    sports: ['Football', 'Basketball'],
    isApproved: 'approved',
    review: { averageRating: 4.5, length: 32 },
    _id: '1',
    label: 'New',
  },
  {
    photo: '/images/player2.jpg',
    name: 'Jane Smith',
    age: 22,
    sports: ['Tennis'],
    isApproved: 'approved',
    review: { averageRating: 4.8, length: 21 },
    _id: '2',
    label: 'New',
  },
  {
    photo: '/images/player1.jpg',
    name: 'John Doe',
    age: 25,
    sports: ['Football', 'Basketball'],
    isApproved: 'approved',
    review: { averageRating: 4.5, length: 32 },
    _id: '1',
    label: 'New',
  },
  {
    photo: '/images/player2.jpg',
    name: 'Jane Smith',
    age: 22,
    sports: ['Tennis'],
    isApproved: 'approved',
    review: { averageRating: 4.8, length: 21 },
    _id: '2',
    label: 'New',
  },
  {
    photo: '/images/player1.jpg',
    name: 'John Doe',
    age: 25,
    sports: ['Football', 'Basketball'],
    isApproved: 'approved',
    review: { averageRating: 4.5, length: 32 },
    _id: '1',
    label: 'New',
  },
];

const FeaturedPlayersCarousel = () => {
  const [expandedPlayer, setExpandedPlayer] = useState<string | null>(null);
  return (
    <section className="py-12 bg-gray-900 flex flex-wrap">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Featured Players
        </h2>
        <motion.div className="flex overflow-x-auto space-x-4">
          {dummyPlayers.map(player => (
            <motion.div
              key={player._id}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-none"
              onClick={() => setExpandedPlayer(player._id)}
            >
              <PlayerCard player={player} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPlayersCarousel;
