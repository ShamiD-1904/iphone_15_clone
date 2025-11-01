import React, { useEffect } from 'react'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import {heroVideo, smallHeroVideo} from "../utils"

import { useState } from 'react'

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 750 ? smallHeroVideo : heroVideo)

  const handleVideoSrc = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    }
    else {
      setVideoSrc(heroVideo)
    }
  }


  useEffect(() => {
    window.addEventListener('resize', handleVideoSrc);

    return () => {
      window.removeEventListener('resize', handleVideoSrc)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 100, delay: 1.5, ease: "power2.in",
    }, [])


    gsap.to('#appleVideo', {
      delay: 2, ease: "back.in", opacity: 100
    }, [])


    gsap.to('#cta', {
      delay: 2.5, ease: "power4.out", opacity: 1, duration: 2, y: -50
    }, [])
  })


  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
      <p id='hero' className="hero-title">iPhone 15 Pro</p>
      <div id='appleVideo' className='md:w-10/12 w-9/12 opacity-0'>
        <video   autoPlay muted playsInline={true} key={videoSrc} >
          <source id='appleVideo' src={videoSrc} type='video/mp4'/>
        </video>
      </div>

      </div>

      <div id="cta"
      className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <a href='#highlights' className='btn' >Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
