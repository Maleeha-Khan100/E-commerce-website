'use client';

import { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            Food<span className="text-orange-500">tuck</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link href="/menu" className="hover:text-orange-500">Menu</Link></li>
          <li><Link href="/blog" className="hover:text-orange-500">Blog</Link></li>
          <li><Link href="/pages" className="hover:text-orange-500">Pages</Link></li>
          <li><Link href="/about" className="hover:text-orange-500">About</Link></li>
          <li><Link href="/shop" className="hover:text-orange-500">Shop</Link></li>
          <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/search" className="hover:text-orange-500">🔍</Link>
          <Link href="/profile" className="hover:text-orange-500">👤</Link>
          <Link href="/cart" className="hover:text-orange-500">🛒</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><Link href="/" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/menu" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
            <li><Link href="/blog" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/pages" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Pages</Link></li>
            <li><Link href="/about" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/shop" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
          <div className="flex justify-center gap-4 pb-4">
            <Link href="/search" className="hover:text-orange-500">🔍</Link>
            <Link href="/profile" className="hover:text-orange-500">👤</Link>
            <Link href="/cart" className="hover:text-orange-500">🛒</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
