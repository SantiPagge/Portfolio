import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export const NavBar = ({ sobreMiRef, proyectosRef, contactoRef }) => {
  const { idioma } = useContext(LanguageContext);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <button onClick={() => scrollToRef(sobreMiRef)} className="text-white px-4">
          {idioma === 'español'
          ? 'Sobre mi' 
          : 'About me'}
        </button>
        <button onClick={() => scrollToRef(proyectosRef)} className="text-white px-4">
        {idioma === 'español'
          ? 'Proyectos' 
          : 'Projects'}
        </button>
        <button onClick={() => scrollToRef(contactoRef)} className="text-white px-4">
        {idioma === 'español'
          ? 'Contacto' 
          : 'Contact'}
        </button>
      </div>
    </div>
  );
};