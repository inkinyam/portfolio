import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faFigma, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import {Loader} from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(()=>{
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  })

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx = {15}
            />
          </h1>
          <p>Я молодой и вечно-обучающийся fronend-разработчик. На данный момент с головой погружена в изучение React и его возможности. Здесь можно посмотреть проекты, которые я на данный момент выполнила.</p>
          <p>Я очень увлекающийся человек и, если мне интересно, готова тратить все свое время на изучение чего-либо. </p>
          <p>Заинтересовать меня может что угодно.</p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
            </div>

            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
            </div>

            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
            </div>

            <div className='face4'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
            </div>

            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
            </div>

            <div className='face6'>
              <FontAwesomeIcon icon={faFigma} color='#1900ff'/>
            </div>
          </div>
        </div>

      </div>
      <Loader type='ball-triangle-path'/>
    </>
  )
}

export default About;

