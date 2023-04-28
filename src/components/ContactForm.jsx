export const ContactForm = () => {
    return (
    <div className='text-black'>
          <form className=''>
            <label>Nombre:</label>
            <input type='text' id='name'/>
            <label>Email:</label>
            <input type='email' id='email'/>
            <label>Mensaje:</label>
            <textarea rows='4' cols='50' className="resize-none"/>
            <button type='submit'>Enviar</button>
          </form>
        </div>
    )
} 