import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';
import Image from 'next/image'

export const SobreMi = () => {

    const { idioma, toggleIdioma } = useContext(LanguageContext);

    return (
        <div>
            <div className='flex justify-center pt-4'>
                <h1 className='font-bold text-3xl mt-4'>{idioma === 'español' ? 'Sobre mí:' : 'About me:'}</h1>
            </div>
            <div className='flex flex-col p-6 justify-center'>
                <p className='text-2xl pb-4'>{idioma === 'español'
            ? `Hola!, mi nombre es Santiago y vivo en Junín, Buenos Aires, Argentina. Soy una persona apasionada por la tecnología 👨‍💻, 
            el café ☕, los autos 🚗, viajar ✈ y la música 🎵. Durante años trabajé en atención al público. 
            Hoy me reinventé y me introduje en el mundo IT, lo cual ha sido una experiencia increíblemente enriquecedora. 
            Me considero una persona tranquila y atenta, siempre dispuesto a enfrentar nuevos desafíos y aprender cosas nuevas. 
            Disfruto mucho de los desafíos que se me presentan en el día a día, 
            ya que me permiten seguir creciendo tanto personal como profesionalmente. 🚀`
            : `Hello! My name is Santiago and I live in Junín, Buenos Aires, Argentina. I am passionate about technology 👨‍💻, 
            coffee ☕, cars 🚗, traveling ✈, and music 🎵. I have worked in customer service for many years. 
            Today, I reinvented myself and entered the IT world, which has been an incredibly enriching experience. 
            I consider myself a calm and attentive person, always ready to face new challenges and learn new things. 
            I greatly enjoy the challenges that arise in my day-to-day life as they allow me to continue growing both personally and professionally. 🚀`}</p>
            <div className='flex justify-center'>
            <a href='https://github.com/SantiPagge' target="_blank" rel="noopener noreferrer"><Image src='/github.png' alt='linkedin' width={30} height={30} className='hover:scale-125 transform transition-transform duration-500'/></a>
            <a href='https://www.linkedin.com/in/santiagopagge/' target="_blank" rel="noopener noreferrer"><Image src='/linkedin.png' alt='linkedin' width={30} height={30} className='mx-4 hover:scale-125 transform transition-transform duration-500'/></a>
            <a href='https://wa.me/542364347911' target="_blank" rel="noopener noreferrer"><Image src='/whatsapp.png' alt='linkedin' width={30} height={30} className='hover:scale-125 transform transition-transform duration-500'/></a>
            </div>
            <div className='flex justify-center pt-4'>
                <a href='https://drive.google.com/file/d/1_Cqqk_nr73rZ3jUIXuddP48KAhOEaAC_/view?usp=sharing' target="_blank" rel="noopener noreferrer"><button className='bg-blue-800 w-auto rounded-md p-2 font-bold hover:scale-125 transform transition-transform duration-500'>{idioma === 'español' ? 'Ver mi CV' : 'See my CV'}</button></a>
            </div>
            </div>
        </div>
    )
} 