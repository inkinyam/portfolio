import './Contact.scss';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import emailjs from '@emailjs/browser';
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef();

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_xqkeame',
        refForm.current,
        '_JaCQQyUixzYhEE91'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
    <div className='container contact-page'> 
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
          />
        </h1>
        <p>Мне интересно ваше мнение и Ваши предложения. Расскажите, что думаете о проекте?</p>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required/>
              </li>

              <li className='half'>
                <input type='email' name='email' placeholder='E-mail' required/>
              </li>

              <li>
                <input placeholder='Subject' type='text' name='subject' required/>
              </li>
              <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>

              <li>
                <input type='submit' className='flat-button' value='SEND' />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className='info-map'>
        Серебренникова Наталья,
        <br />
        Россия, Московская область, Ивантеевка
        <br />
        <span>inkinyam@yandex.ru</span>
      </div>
      <div className="map-wrap">
          <MapContainer center={[55.976360, 37.940779]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[55.976360, 37.940779]}>
              <Popup>Inki здесь! ^_^</Popup>
            </Marker>
          </MapContainer>
      </div>
    </div>
    <Loader type='ball-triangle-path'/>
    </>    
  )
}

export default Contact;