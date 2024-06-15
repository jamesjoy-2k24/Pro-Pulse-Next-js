'use client';
import React from 'react';
import AnimatedButton from './Common/Button';

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-bottom h-screen relative"
      style={{ backgroundImage: 'url(/Hero.jpeg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-5 ">
        <div className="">
          <h1 className="text-5xl font-bold  text-white mb-4 animate-fade-in-up">
            Welcome to Pro-Pulse
          </h1>
          <p className="text-xl text-white mb-8 animate-fade-in-up-delay">
            Your one-stop solution for all your needs.
          </p>
          <AnimatedButton text="Get Start" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
