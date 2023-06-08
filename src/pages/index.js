import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { Proyectos } from '@/components/Proyectos';
import { SobreMi } from '@/components/SobreMi';
import { Tecnologias } from '@/components/Tecnologias';
import { BotonIdioma } from '@/components/BotonIdioma';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export default function Home() {

  const { idioma, toggleIdioma } = useContext(LanguageContext);

  return (
    <div className='pt-2'>
      <div className='flex justify-end'>
        <BotonIdioma/>
      </div>
      <div className="grid sm:grid-cols-2 bg-blue-900 h-96">
        <div className='flex flex-col text-center justify-top'> 
          <h1 className='font-bold lg:text-6xl md:4xl sm:2xl text-white w-auto sm:mt-10 sm:ml-32'>Santiago Pagge</h1>
          <p className='font-bold lg:text-2xl md:4xl sm:2xl text-white w-auto sm:mt-4 sm:ml-32'>Full Stack Web Developer</p>
        <div className='hidden sm:inline'>
          <Tecnologias/>
        </div>
        </div>
        <div className='flex justify-center items-center'>
          <Image src='/Santu.jpg' alt='santu' className='rounded-full lg:w-80 md:w-60 sm:w-60 w-32 border-4 border-slate-950 shadow-lg shadow-slate-900 mr-32' width={500} height={500}/>
        </div>
        <div className='sm:hidden inline'>
          <Tecnologias/>
        </div>
      </div>
      <SobreMi/>
      <div className='bg-blue-900'>
      <h1 className='flex justify-center font-bold text-3xl pt-4'>{idioma === 'español' ? 'Proyectos:' : 'Projects:'}</h1>
      <div>
        <Proyectos/>
      </div>
    </div>
      <div className='flex p-4 justify-center'>
        <h1 className='font-bold text-3xl mt-4'>{idioma === 'español' ? 'Contactame:' : 'Contact Me:'}</h1>
      </div>
        <div>
          <ContactForm/>
        </div>
    </div>
  )
};