import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 right-0 mt-4 mr-4 sm:hidden z-30 ${isMenuOpen ? 'open' : ''}`}>
      <button className="text-white" onClick={toggleMenu}>
        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-20" onClick={toggleMenu}></div>
      )}
      <div className={`fixed top-0 right-0 h-full w-64 bg-blue-900 border-l border-white z-10 ${isMenuOpen ? 'open' : ''}`}>
        <ul className="flex flex-col items-end h-full p-4">
          <li>
            <Link legacyBehavior href="#sobreMi">
              <a className="text-white">Sobre Mí</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#Proyectos">
              <a className="text-white">Proyectos</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#Contacto">
              <a className="text-white">Contacto</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;