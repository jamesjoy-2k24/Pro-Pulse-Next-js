import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="font-bold text-red-700 text-2xl">Pro-Pulse</a>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/login" legacyBehavior>
            <a className="text-white font-bold shadow-md shadow-black bg-blue-500 py-1 px-8 rounded-md">
              Login
            </a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a className="text-red-700 font-bold shadow-md shadow-black bg-transparent py-1 px-6 rounded-md hover:bg-blue-500 hover:text-white duration-200">
              Register
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
