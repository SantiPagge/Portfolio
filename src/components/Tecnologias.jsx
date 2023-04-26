import Image from 'next/image'

export const Tecnologias = () => {
    return (
        <div>
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
    )
} 