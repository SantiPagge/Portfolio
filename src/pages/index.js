import Image from 'next/image'
import {projects} from '../../profile'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='pt-20'>
      <div className="grid grid-cols-2 bg-blue-900 h-96">
        <div className='flex flex-col justify-top'> 
          <h1 className='flex font-bold lg:text-6xl md:4xl sm:2xl text-white justify-center w-auto mt-10 ml-32'>Santiago Pagge</h1>
          <p className='flex font-bold lg:text-2xl md:4xl sm:2xl text-white justify-center w-auto mt-4 ml-32'>Full Stack Web Developer</p>
        <div className='flex justify-center mb-2 mt-4 ml-32'>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width={80} height={80}/></a>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width={80} height={80}/></a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width={80} height={80}/></a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className='inline-block align-middle mt-4 mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://upload.vectorlogo.zone/logos/nextjs/images/2d3864ef-00e0-4026-ab1d-30e4a98e2899.svg" alt="nextjs" width={80} height={80}/></a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width={80} height={80}/></a>
          <a href="https://redux.js.org" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width={80} height={80}/></a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width={80} height={80}/></a>
        </div>
        <div className='flex justify-center my-2 ml-32'>
          <a href="https://www.postgresql.org" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width={80} height={80}/></a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width={80} height={80}/></a>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width={80} height={80}/></a>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width={80} height={80}/></a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width={80} height={80}/></a>
          <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className='inline-block align-middle mx-2 hover:scale-125 transform transition-transform duration-500'><Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width={80} height={80}/></a>
        </div>
        </div>
        <div className='flex justify-center items-center'>
          <Image src='/Santu.jpg' alt='santu' className='rounded-full lg:w-80 md:w-60 sm:w-60 border-4 border-slate-950 shadow-lg shadow-slate-900 mr-32' width={500} height={500}/>
        </div>
      </div>
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
          <Link href='https://github.com/SantiPagge'><Image src='/github.png' alt='linkedin' width={30} height={30} className='hover:scale-125 transform transition-transform duration-500'/></Link>
          <Link href='https://www.linkedin.com/in/santiagopagge/'><Image src='/linkedin.png' alt='linkedin' width={30} height={30} className='mx-4 hover:scale-125 transform transition-transform duration-500'/></Link>
          <Link href='https://wa.me/542364347911'><Image src='/whatsapp.png' alt='linkedin' width={30} height={30} className='hover:scale-125 transform transition-transform duration-500'/></Link>
        </div>
      </div>
      <div className='bg-blue-900'>
      <h1 className='flex justify-center font-bold text-3xl pt-4'>Proyectos:</h1>
      <div className='flex p-10'>
      {projects.map(({ title, description, image, url }, index) => (
        <Link href={url} className='inline-block align-middle hover:scale-105 transform transition-transform duration-500'>
        <div className='m-4 w-auto border-4 border-black rounded-2xl overflow-hidden shadow-lg' key={index}>
            <div className=''>
                <div>
                    <img src={image} alt="proyecto" className='rounded-t-2xl border-b-4 border-black'/>
                </div>
                <div className='flex flex-col'>
                    <h4 className='flex justify-center p-2 text-2xl font-bold'>{title}</h4>
                    <p className='flex justify-center py-10'>{description}</p>
                </div>
            </div>
        </div>
        </Link>
      ))}
      </div>
    </div>
    </div>
  )
}