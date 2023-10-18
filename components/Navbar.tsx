'use client';

import { useEffect, useState } from 'react';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import Image from 'next/image';

import AccountMenu from './AccountMenu';
import MobileMenu from './MobileMenu';
import NavbarItem from './NavbarItem';

const TOP_OFFSET = 66;

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const [showBackground, setShowBackground] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

  const toggleAccountMenu = () => setShowAccountMenu((prevState) => !prevState);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY >= TOP_OFFSET);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed z-40 w-full">
      <div
        className={`flex items-center px-4 py-6 transition duration-500 md:px-16  ${
          showBackground ? 'bg-zinc-900 bg-opacity-90' : ''
        }`}>
        <Image
          className="h-4 md:h-7"
          src="/images/logo.png"
          alt="application logo"
          width="104"
          height="28"
        />
        <div className="hidden ml-8 gap-7 lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="relative flex items-center gap-2 ml-8 cursor-pointer lg:hidden">
          <p className="text-sm text-white">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex items-center ml-auto gap-7">
          <div className="text-gray-200 transition cursor-pointer hover:text-gray-300">
            <BsSearch />
          </div>
          <div className="text-gray-200 transition cursor-pointer hover:text-gray-300">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="relative flex items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 overflow-hidden rounded-md lg:w-10 lg:h-10">
              <Image
                src="/images/default-blue.png"
                alt="user avatar"
                width="40"
                height="40"
              />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? 'rotate-180' : 'rotate-0'
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
