import Image from 'next/image'
import {ContactForm} from '@/components/ContactForm'
import { Proyectos } from '@/components/Proyectos'
import { SobreMi } from '@/components/SobreMi'
import { Tecnologias } from '@/components/Tecnologias'

export default function Home() {
  return (
    <div className='pt-20'>
      <div className="grid grid-cols-2 bg-blue-900 h-96">
        <div className='flex flex-col justify-top'> 
          <h1 className='flex font-bold lg:text-6xl md:4xl sm:2xl text-white justify-center w-auto mt-10 ml-32'>Santiago Pagge</h1>
          <p className='flex font-bold lg:text-2xl md:4xl sm:2xl text-white justify-center w-auto mt-4 ml-32'>Full Stack Web Developer</p>
        <Tecnologias/>
        </div>
        <div className='flex justify-center items-center'>
          <Image src='/Santu.jpg' alt='santu' className='rounded-full lg:w-80 md:w-60 sm:w-60 border-4 border-slate-950 shadow-lg shadow-slate-900 mr-32' width={500} height={500}/>
        </div>
      </div>
      <SobreMi/>
      <div className='bg-blue-900'>
      <h1 className='flex justify-center font-bold text-3xl pt-4'>Proyectos:</h1>
      <div>
        <Proyectos/>
      </div>
    </div>
      <div className='flex p-4 justify-center'>
        <h1 className='font-bold text-3xl mt-4'>Contactame:</h1>
      </div>
        <div>
          <ContactForm/>
        </div>
    </div>
  )
}