import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';
import { validateName, validateEmail, validateMessage } from '../validations';
import { BeatLoader } from 'react-spinners';

const loaderColor = '#FFFFFF';
const loaderSize = 8;

export const ContactForm = () => {

  const { idioma, toggleIdioma } = useContext(LanguageContext);

  const form = useRef();

  const [showErrors, setShowErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [text, setText] = useState({
    name: '',
    email: '',
    message:''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleName = (e) => {
    const name = e.target.value;
    setText({
      ...text,
      name
    });

    setErrors({
      ...errors,
      name: validateName(name) ? '' : 'El nombre no puede contener números ni caracteres especiales.'
    });
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setText({
      ...text,
      email
    });

    setErrors({
      ...errors,
      email: validateEmail(email) ? '' : 'Ingrese un correo electrónico válido.'
    });
  };

  const handleMessage = (e) => {
    const message = e.target.value;
    setText({
      ...text,
      message
    });

    setErrors({
      ...errors,
      message: validateMessage(message) ? '' : 'El mensaje debe contener al menos 10 caracteres.'
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setShowErrors(true);

    if (validateName(text.name) && validateEmail(text.email) && validateMessage(text.message)) {
      setIsLoading(true);
      emailjs.sendForm(
        'service_cqx705q',
        'template_tx6unzn',
        form.current,
        'Dh3TAvjXJ_5W7Ba9v'
      )
        .then((result) => {
          console.log(result.text);
          setText({
            name: '',
            email: '',
            message: ''
          });
          setShowErrors(false);
          alert('¡Correo enviado!');
        })
        .catch((error) => {
          console.log(error.text);
        })
        .finally(() => {
          setIsLoading(false); // Desactivar el estado de carga
        });
    }
  };

  return (
    <div className='flex justify-center text-black mb-10'>
      <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
        <label className="text-white">{idioma === 'español' ? 'Nombre:' : 'Name:'}</label>
        <input className="p-1 mb-2 rounded-md" 
        type='text' 
        id='name' 
        name='user_name' 
        value={text.name} 
        onChange={handleName}
        />
        {showErrors && errors.name && <span className="text-red-500">{errors.name}</span>}
        <label className="text-white">Email:</label>
        <input className="p-1 mb-2 rounded-md" 
        type='email' 
        id='email' 
        name='user_email' 
        value={text.email} 
        onChange={handleEmail}
        />
        {showErrors && errors.email && <span className="text-red-500">{errors.email}</span>}
        <label className="text-white">{idioma === 'español' ? 'Mensaje:' : 'Message:'}</label>
        <textarea className="resize-none p-1 rounded-md w-80 sm:w-auto" 
        rows='4' 
        cols='50' 
        name='message' 
        value={text.message} 
        onChange={handleMessage}
        />
        {showErrors && errors.message && <span className="text-red-500">{errors.message}</span>}
          <div className="flex justify-center w-auto">
            <button className="text-white p-2 m-4 bg-blue-900 font-bold rounded-lg hover:scale-125 transform transition-transform duration-500" 
            type='submit' 
            value='Send'
            disabled={isLoading} // Desactivar el botón cuando está cargando
            >
              {isLoading ? (
                  <BeatLoader color={loaderColor} size={loaderSize} />
              ) : (
                idioma === 'español' ? 'Enviar' : 'Send'
              )}
            </button>
          </div>
      </form>
    </div>
  );
};