import Image from 'next/image'

export const SobreMi = () => {
    return (
        <div>
            <div className='flex justify-center pt-4'>
                <h1 className='font-bold text-3xl mt-4'>Sobre mí:</h1>
            </div>
            <div className='flex flex-col p-6 justify-center'>
                <p className='text-2xl pb-4'>Hola!, mi nombre es Santiago y vivo en Junín, Buenos Aires, Argentina. 
                Soy una persona apasionada por la tecnología 👨‍💻, el café ☕, los autos 🚗, viajar ✈ y la música 🎵. 
                Durante años trabajé en atención al público. Hoy me reinventé y me introduje en el mundo 
                IT, lo cual ha sido una experiencia increíblemente enriquecedora. 
                Me considero una persona tranquila y atenta, siempre dispuesto a enfrentar nuevos desafíos y aprender cosas nuevas. 
                Disfruto mucho de los desafíos que se me presentan en el día a día, ya que me permiten seguir creciendo 
                tanto personal como profesionalmente. 🚀</p>
            <div className='flex justify-center'>
            <a href='https://github.com/SantiPagge' target="_blank" rel="noopener noreferrer"><Image src='/github.png' alt='linkedin' width={30} height={30} className='hover:scale-125 transform transition-transform duration-500'/></a>
            <a href='https://www.linkedin.com/in/santiagopagge/' target="_blank" rel="noopener noreferrer"><Image src='/linkedin.png' alt='linkedin' width={30} height={30} className='mx-4 hover:scale-125 transform transition-transform duration-500'/></a>
            <a href='https://wa.me/542364347911' target="_blank" rel="noopener noreferrer"><Image src='/whatsapp.png' alt='linkedin' width={30} height={30} className='hover:scale-125 transform transition-transform duration-500'/></a>
            </div>
            <div className='flex justify-center pt-4'>
                <a href='https://drive.google.com/file/d/1Z8fFfUQWezDEMm3NUgoTcbrT4bbS5Zy5/view?usp=share_link' target="_blank" rel="noopener noreferrer"><button className='bg-blue-800 w-auto rounded-md p-2 font-bold'>Ver mi CV</button></a>
            </div>
            </div>
        </div>
    )
} 