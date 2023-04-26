export const ContactForm = () => {
    return (
    <div className=''>
          <form className=''>
            <p>Nombre:</p><input className='' type='text'/>
            <p>Email:</p><input className='' type='email'/>
            <p>Mensaje:</p><input className='' type='textarea'/>
            <button type='submit'>Enviar</button>
          </form>
        </div>
    )
} 