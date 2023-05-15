export const ContactForm = () => {
    return (
    <div className='flex justify-center text-black mb-10'>
          <form className='flex flex-col'>
            <label className="text-white">Nombre:</label>
            <input className="p-1 mb-2 rounded-md" type='text' id='name'/>
            <label className="text-white">Email:</label>
            <input className="p-1 mb-2 rounded-md" type='email' id='email'/>
            <label className="text-white">Mensaje:</label>
            <textarea className="resize-none p-1 rounded-md" rows='4' cols='50'/>
            <div className="flex justify-center w-auto">
            <button className="text-white p-2 m-2 bg-blue-900 hover:bg-blue-950 font-bold rounded-lg" type='submit'>Enviar</button>
            </div>
          </form>
        </div>
    )
} 