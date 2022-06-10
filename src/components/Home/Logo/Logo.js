import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-i.png'
import './Logo.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
      

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 6,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" ref={solidLogoRef} src={LogoS} alt="I"/>
    </div>
  )
}

export default Logo
