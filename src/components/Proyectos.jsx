import {projects} from '../../profile'
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export const Proyectos = () => {

    const { idioma, toggleIdioma } = useContext(LanguageContext);

    return (
        <div className='flex flex-col sm:flex-row p-10'>
        {projects.map(({ title, descripcion, description, image, url }, index) => (
            <a href={url} key={index} target="_blank" rel="noopener noreferrer" className='inline-block align-middle hover:scale-105 transform transition-transform duration-500'>
            <div className='m-4 w-auto border-4 border-black rounded-2xl overflow-hidden shadow-lg' key={index}>
                <div className=''>
                    <div>
                        <img src={image} alt="proyecto" className='rounded-t-2xl border-b-4 border-black'/>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='flex justify-center p-2 text-2xl font-bold'>{title}</h4>
                        {idioma === 'español' ? (
                                <p className='flex justify-center py-10 px-10'>{descripcion}</p>
                            ) : (
                                <p className='flex justify-center py-10 px-10'>{description}</p>
                            )}
                    </div>
                </div>
            </div>
            </a>
            ))}
        </div>
    )
} 