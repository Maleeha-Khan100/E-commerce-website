import React from "react";
import Link from "next/link";


const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <div className="text-lg font-bold text-green-700">
          Food<span className="text-black">truck</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-800 hover:text-green-700">
            Home
          </Link>
          <Link href="/menu" className="text-gray-800 hover:text-green-700">
            Menu
          </Link>
          <Link href="/blog" className="text-gray-800 hover:text-green-700">
            Blog
          </Link>
          <Link href="/pages" className="text-gray-800 hover:text-green-700">
            Pages
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-green-700">
            About
          </Link>
          <Link href="/shop" className="text-gray-800 hover:text-green-700">
            Shop
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-green-700">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          {/* Search Icon */}
          <button className="text-gray-800 hover:text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.25-2.75A7.5 7.5 0 1111 3.5a7.5 7.5 0 017.5 7.5z"
              />
            </svg>
          </button>
          {/* User Icon */}
          <button className="text-gray-800 hover:text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14c4.97 0 9 4.03 9 9H3c0-4.97 4.03-9 9-9zM12 4a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          </button>
          {/* Cart Icon */}
          <button className="text-gray-800 hover:text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.34 2.68M7 16h10m0 0c2.18 0 4.69 0 5.68-1.73a1.38 1.38 0 00-.06-1.52L20.38 4.8M7 16c-.99 0-2.5 0-4.33-1.21a1.38 1.38 0 01-.37-1.38L5.34 5.68M9 16v3m6-3v3"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 hover:text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Images Section */}
      <div className="container mx-auto mt-6 px-6 lg:px-12 flex justify-between items-center">
        <img
          src="/Text.png"
          alt="Healthy Food 1"
          className="w-1/3 h-auto rounded-md"
        />
        <img
          src="/Vege.png"
          alt="Healthy Food 2"
          className="w-1/3 h-auto rounded-md mx-4"
        />
        <img
          src="/Bg.png "
          alt="Healthy Food 3"
          className="w-1/3 h-auto rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;
