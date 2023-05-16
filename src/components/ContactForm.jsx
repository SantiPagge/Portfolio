import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
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
            <input className="p-1 mb-2 rounded-md" type='text' id='name' name='user_name'/>
            <label className="text-white">Email:</label>
            <input className="p-1 mb-2 rounded-md" type='email' id='email' name='user_email'/>
            <label className="text-white">Mensaje:</label>
            <textarea className="resize-none p-1 rounded-md" rows='4' cols='50' name='message'/>
            <div className="flex justify-center w-auto">
            <button className="text-white p-2 m-2 bg-blue-900 hover:bg-blue-950 font-bold rounded-lg" type='submit' value='Send'>Enviar</button>
            </div>
          </form>
        </div>
    )
} 