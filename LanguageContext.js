import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('español');

  const toggleIdioma = () => {
    setIdioma(idioma === 'español' ? 'inglés' : 'español');
  };

  return (
    <LanguageContext.Provider value={{ idioma, toggleIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
};