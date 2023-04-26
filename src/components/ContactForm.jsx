export const ContactForm = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    setForm({
      name: '',
      enail: '',
      message: ''
    })
  }

    return (
    <div className='text-black'>
          <form className='' onSubmit={handleSubmit}>
            <p>Nombre:</p><input type='text' id='name' value={form.name}/>
            <p>Email:</p><input type='email' id='email' value={form.email}/>
            <p>Mensaje:</p><textarea rows='4' cols='50'></textarea>
            <button type='submit'>Enviar</button>
          </form>
        </div>
    )
} 