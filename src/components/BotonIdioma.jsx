import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../LanguageContext';
import Image from 'next/image'

export const BotonIdioma = () => {
    const { idioma, toggleIdioma } = useContext(LanguageContext);
    const [idiomaActual, setIdiomaActual] = useState(idioma);
  
    const handleClickEspañol = () => {
      if (idiomaActual === 'inglés') {
        toggleIdioma();
        setIdiomaActual('español');
      }
    };
  
    const handleClickInglés = () => {
      if (idiomaActual === 'español') {
        toggleIdioma();
        setIdiomaActual('inglés');
      }
    };
  
    return (
      <div className='flex flex-row'>
        <div className='mr-2'>
            <button onClick={handleClickEspañol}>
                {idiomaActual === 'español' ? (
                        <Image src="/BanderaEspana1.png" alt="Spanish" width={50} height={50}/>
                    ) : (
                        <Image src="/BanderaEspana0.png" alt="Spanish" width={50} height={50}/>
                    )
                }
            </button>
        </div>
        <div className='mr-2'>
            <button onClick={handleClickInglés}>
                {idiomaActual === 'inglés' ? (
                        <Image src="/BanderaIng1.png" alt="English" width={50} height={50}/>
                    ) : (
                        <Image src="/BanderaIng0.png" alt="English" width={50} height={50}/>
                    )
                }
            </button>
        </div>
      </div>
    );
  };