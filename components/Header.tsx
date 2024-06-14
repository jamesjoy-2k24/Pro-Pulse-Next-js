import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg shadow-black w-[98%] mx-auto rounded-md mt-2">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">Pro-Pulse</a>
        </Link>
        <div>
          <Link href="/login" legacyBehavior>
            <a className="mr-4">Login</a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a>Register</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
