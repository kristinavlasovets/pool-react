import './index.scss'
import LogoOne from '../../../assets/images/logo-one.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

export const Logo = () => {

    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity:0,
            },
            {
                opacity: 1,
                delay: 3, 
                duration: 2,
            }
        )
    }, [])

  return (
    <div className='logo-container' ref={solidLogoRef}>
        <img className='solid-logo' src={LogoOne} alt='logo'/>
    </div>
  )
}
