import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

  const form = useRef();

  const [text, setText] = useState({
    name: '',
    email: '',
    message:''
  })

  const handleName = (e) => {
    setText({
      ...text,
      name: (e.target.value)
    })
  }

  const handleEmail = (e) => {
    setText({
      ...text,
      email: (e.target.value)
    })
  }

  const handleMessage = (e) => {
    setText({
      ...text,
      message: (e.target.value)
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setText({
      name: '',
      email: '',
      message: ''
    })
    alert('mail enviado')

    emailjs.sendForm(
      'service_cqx705q', 
      'template_tx6unzn', 
      form.current, 
      'Dh3TAvjXJ_5W7Ba9v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
    <div className='flex justify-center text-black mb-10'>
          <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
            <label className="text-white">Nombre:</label>
            <input className="p-1 mb-2 rounded-md" type='text' id='name' name='user_name' value={text.name} onChange={handleName}/>
            <label className="text-white">Email:</label>
            <input className="p-1 mb-2 rounded-md" type='email' id='email' name='user_email' value={text.email} onChange={handleEmail}/>
            <label className="text-white">Mensaje:</label>
            <textarea className="resize-none p-1 rounded-md" rows='4' cols='50' name='message' value={text.message} onChange={handleMessage}/>
            <div className="flex justify-center w-auto">
            <button className="text-white p-2 m-2 bg-blue-900 hover:bg-blue-950 font-bold rounded-lg" type='submit' value='Send'>Enviar</button>
            </div>
          </form>
        </div>
    )
} 