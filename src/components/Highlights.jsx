import React from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { rightImg, watchImg } from '../utils'
import { ScrollTrigger } from 'gsap/all'
import VideoCarousel from "./VideoCarousel.jsx"


gsap.registerPlugin(ScrollTrigger)

const Highlights = () => {

  useGSAP(() => {

    gsap.to("#title", {
      
      scrollTrigger: {
        trigger:"#title",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
        
      },
      opacity: 1, y: 0, ease: "ease.inOut", delay: 1
    })

    gsap.to(".link", {
      scrollTrigger: {
        trigger: ".link",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,

      },

      stagger: 0.5,
      opacity: 100,
      y: 0,
      delay: 1,
      ease: "ease.inOut",
      duration: 2
    })

  }, []
)


  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1>
        

        <div className="flex flex-wrap  items-end gap-5">
          <p className="link">Watch the film
            <img src={watchImg} alt="watch" className="ml-2" />
          </p>
          <p className="link">Watch the event
            <img src={rightImg} alt="rigth" className="ml-2" />
          </p>
        </div>
    
      </div>   
        
      <VideoCarousel />

      </div>

    </section>
  )
}

export default Highlights
