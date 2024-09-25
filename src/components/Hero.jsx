import React, { useState, useRef } from 'react'
import NavBar from './NavBar'
import "../css/Hero.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {motion, useScroll } from "framer-motion"
import Profile from "../assets/valeria-strogoteanu-J38L2UU1qlI-unsplash.jpg"
import Accordion from 'react-bootstrap/Accordion';


const Hero = () => {
    const [text] = useTypewriter({
        words: ['Fullstack Developer', "Virtual Assistant", "Freelancer"],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 40,
        delay: 2000
    });

    const ref = useRef(null);
    useScroll({
      target: "",
      offset: ["0 1", "1.33 1"]
    })
   

  return (
    <div className='' >
     <NavBar/>
        <section id='home' className='h-screen w-full flex' > 
         <div className="home-main container flex flex-col gap-4 w-8/12 justify-center" >
         <div className="home-content">
            <h1 className='firstN animate-pop-in font-normal text-7xl text-[#babae4]'>EVOGOR, PEACE</h1>
            <h1 className='lastN animate-pop-in font-normal text-7xl text-purple-400'>BASSEY</h1>
           <p className='animate-pop-in'>
            <span style={{fontWeight: "bold", fontWeight: '500', fontSize: "30px"}} className='text-[#babae4]'>{text}</span>
            <span style={{color: 'white'}}><Cursor/></span>
           </p>
          </div>
          <div className="" >
            <button className='herobtn animate-pop-in w-3/5 h-10 bg-purple-500 rounded text-xl'><a href="#contact">Lets Talk</a></button>
          </div>
         </div>
        </section>

        <section id='about' className=''>
        <motion.div className="about-content container h-80 w-8/12 m-auto flex gap-20 text-xl"
         initial={{opacity: 0.2, scale: 0}}
         whileInView={{opacity: 2, scale: 1}}
         transition={{duration: 0.7, delay: 0.5, easing: 'easeIn'}}
        >
         <div className="profileImg w-2/5 h-8">
           <img src={Profile} alt="" style={{width: "100%", height: "300px"}} />
        </div>
     <div className="profileInfo h-8 w-3/5 flex flex-col">
     <h1 className='about-info text-3xl font-bold text-[#babae4]'>Hello, I'm Peace Bassey </h1>
     <p className='para text-[#7878a8]'>I'm a passionate Full Stack Web Developer with a knack for turning complex problems into elegant solutions. I build websites with a focus on responsiveness, accessibility and pleasing aesthetics.</p>
    </div>
         </motion.div>
          <motion.div className="container py-2 bf-space-black" style={{ height: "400px", margin: "auto", marginTop: "1rem", }}
          initial={{opacity: 0.2, scale: 0}}
          whileInView={{opacity: 2, scale: 1}}
          transition={{duration: 0.7, delay: 0.5, easing: 'easeIn'}}
          >
         <Accordion style={{width: "1000px", margin: "auto", marginTop: "2rem"}}>
      <Accordion.Item eventKey="0" style={{ maxWidth: '1000px',}} className='bg-[#4B4B6E]'>
        <Accordion.Header style={{border: "none",}}>HISTORY</Accordion.Header>
        <Accordion.Body style={{color: "#02021a", fontSize: "20px", }} className=' text-purple-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='bg-[#4B4B6E]'>
        <Accordion.Header>EXPERIENCE</Accordion.Header>
        <Accordion.Body style={{color: "#02021a", fontSize: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='bg-[#4B4B6E]'>
        <Accordion.Header>SKILLS</Accordion.Header>
        <Accordion.Body style={{color: "#02021a", fontSize: "20px" }}>
          <div className="languages">
            <h1 className='text-2xl font-semibold pb-2'>Languages</h1>
            <div className="">
              <ul style={{ listStyle: "inherit", display: "flex", justifyContent: "space-between"}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>JQUERY</li>
                <li>MONGODB</li>
              </ul>
            </div>
            <div className="line mt-4 mb-10 bg-gray-950">
            </div>
          </div>

          <div className="libraries mt-4">
            <h1 className='text-2xl pb-2 font-semibold'>Libraries</h1>
            <div className="">
              <ul style={{ listStyle: "inherit", display: "flex",justifyContent: "space-between"}}>
                <li>REACT</li>
                <li>Next.js</li>
                <li>NODE.JS</li>
              </ul>
            </div>
            <div className="line mt-4 bg-gray-950"></div>
          </div>

          <div className="frameworks mt-4">
            <h1 className='text-2xl pb-2 font-semibold'>Frameworks</h1>
            <div className="">
              <ul style={{ listStyle: "inherit", display: "flex",justifyContent: "space-between"}}>
                <li>TAILWIND</li>
                <li>BOOTSTRAP</li>
                <li>REDUX</li>
              </ul>
            </div>
            <div className="line mt-4 bg-gray-950"></div>
          </div>

          <div className="tools mt-4">
            <h1 className='text-2xl pb-2 font-semibold'>Tools & Systems</h1>
            <div className="">
            <ul style={{ listStyle: "inherit", display: "flex",justifyContent: "space-between"}}>
              <li>GIT</li>
              <li>NPM</li>
              <li>VSCODE</li>
              <li>FIGMA</li>
            </ul>
            </div>
            <div className="line mt-4 bg-gray-950"></div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </motion.div>
        </section>

        <section id='project'>PROJECTS</section>
        <section id='contact' className='bg-[#15152c]'>
          CONTACT

          <h1>Let's Talk</h1>
          </section>
    </div>
  )
}

export default Hero;




