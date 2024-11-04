'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import logoImg from '../assets/tarot-logo.svg';

const links = [
  { href: '/', label: 'Home' },
  { href: '/tarot', label: 'Tarot' },
  { href: '/numerology', label: 'Numerology' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-transparent p-4 sm:px-12 sm:pt-8">
      {/* Логотип и название */}
      <div className="flex items-center">
        <Image
          src={logoImg}
          alt="Logo"
          width={40}
          height={36}
          className="mr-2 sm:mr-4 sm:h-[64px] sm:w-[68px]"
        />
        <h1 className="text-lg font-semibold text-zinc-700 sm:text-xl">Sybil App</h1>
      </div>

      {/* Бургер-меню для мобильной версии */}
      <div className="sm:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-zinc-700">
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Ссылки для десктопной версии */}
      <div className="hidden grow justify-center space-x-8 sm:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-1 text-lg text-zinc-600 transition duration-200 hover:bg-[#8762CD] hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Выпадающее меню для мобильной версии */}
      {menuOpen && (
        <div className="absolute right-4 top-16 z-10 rounded-md bg-white p-4 shadow-lg sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-4 py-2 text-base text-zinc-600 transition duration-200 hover:bg-[#8762CD] hover:text-white"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
