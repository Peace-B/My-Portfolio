import React, { useState, useRef } from 'react'
import NavBar from './NavBar'
import "../css/Hero.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {motion, useScroll } from "framer-motion"
import Profile from "../assets/valeria-strogoteanu-J38L2UU1qlI-unsplash.jpg"
import Accordion from 'react-bootstrap/Accordion';
import ContactImg from "../assets/contact-us-4193637_1280.jpg"
import CallImg from "../assets/phone icon.png"
import MsgImg from "../assets/sms outline.png"
import { useForm } from 'react-hook-form';
import Multi from "../assets/956c4033-9a55-4215-b148-2d286c365d54.png"
import Space from "../assets/Screenshot (17).png"
import Advice from "../assets/Screenshot (16).png"
import Port from "../assets/Screenshot (18).png"
import Better from "../assets/Screenshot (15).png"
import DPH from "../assets/Screenshot (20).png"



const Hero = () => {
    const [text] = useTypewriter({
        words: ['Frontend Dev', "Backend Dev", "Fullstack Developer"],
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
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data); 
        reset(); 
    };
   
    const currentYear = new Date().getFullYear();


  return (
    <div className='' >
     <NavBar/>
        <section id='home' > 
        <main className='pt-0 pl-7 h-screen w-full md:pl-0 md:pr-32 flex xl:pt-[80px]'>
        <div className="home-main container w-full flex flex-col gap-4 md:w-[600px] xl:w-8/12 justify-center" >
         <div className="home-content">
            <h1 className=' animate-pop-in text-3xl font-normal md:text-7xl md:font-medium xl:font-normal xl:text-7xl text-[#babae4]'>EVOGOR, PEACE</h1>
            <h1 className='animate-pop-in text-3xl font-normal md:text-7xl md:font-medium xl:font-normal xl:text-7xl text-purple-500'>BASSEY</h1>
           <p className='animate-pop-in'>
            <span style={{fontWeight: "bold", fontWeight: '400', fontSize: "30px"}} className='text-[#babae4]'>{text}</span>
            <span style={{color: 'white'}}><Cursor/></span>
           </p>
          </div>
          <div className="" >
            <button className='herobtn animate-pop-in w-11/12 xl:w-3/5 py-1 md:py-4  bg-purple-600 rounded text-xl'><a href="#contact">Lets Talk</a></button>
          </div>
         </div>
        </main>
        </section>

        <section id='about' className='pt-20 xl:pt-44'>
        <motion.div className="about-content container w-11/12 gap-8 flex flex-col-reverse md:flex-row xl:h-80 xl:w-9/12 m-auto xl:flex-row xl:gap-20 text-xl"
         initial={{opacity: 0.2, scale: 0}}
         whileInView={{opacity: 2, scale: 1}}
         transition={{duration: 0.5, delay: 0.2, easing: 'easeIn'}} 
        >
         <div className="profileImg pb-4 w-full xl:w-2/5 xl:pb-0">
           <img src={Profile} alt="" className='xl:w-full h-full md:w-full' />
        </div>
     <div className="profileInfo xl:h-8 xl:w-3/5 flex flex-col">
     <h1 className='about-info mt-8 pb-4 text-4xl xl:text-3xl xl:mt-0 font-bold text-[#babae4] md:text-5xl xl:pb-0 '>Hello, I'm Peace Bassey 🙂</h1>
     <p className='para text-2xl text-[#7878a8] xl:text-1xl md:text-3xl'>I'm a passionate Full Stack Web Developer with a knack for turning complex problems into elegant solutions. I build websites with a focus on responsiveness, accessibility and pleasing aesthetics.</p>
    </div>
         </motion.div>
          <motion.div className="container py-2 bf-space-black" style={{ height: "auto", margin: "auto", marginTop: "1rem"}}
          initial={{opacity: 0.2, scale: 0}}
          whileInView={{opacity: 2, scale: 1}}
          transition={{duration: 0.5, delay: 0.2, easing: 'easeIn'}}
          >
         <Accordion className='w-[340px] pb-6 mt-[30px] m-auto xl:w-[1000px] md:w-[700px] md:py-10 xl:py-0 xl:pb-10'>
      <Accordion.Item eventKey="0" style={{ maxWidth: '1000px',}} className='bg-[#4B4B6E] md:py-2 xl:py-0'>
        <Accordion.Header style={{border: "none",}}>HISTORY</Accordion.Header>
        <Accordion.Body style={{color: "#02021a", fontSize: "16px", }} className='text-purple-500 md:text-[50px] '>
I began coding in 2023, shortly after completing my NYSC program. Initially, I started learning HTML and CSS on Udemy. However, I found the lack of a tutor, 
the inability to ask questions, and the absence of a community to interact with to be limiting. This led me to enroll in a physical class in 2024,
where I could gain more hands-on experience and connect with others.
I quickly discovered a passion for understanding the logic behind creating applications, 
as well as the importance of making them visually appealing to users. This is how I embarked on my journey into full-stack web development. Since then, I’ve been continuously exploring new technologies and concepts to improve my skills and stay up-to-date in the ever-evolving field of web development. 

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='bg-[#4B4B6E] md:py-2 xl:py-0'>
        <Accordion.Header>EXPERIENCE</Accordion.Header>
        <Accordion.Body style={{color: "#02021a", fontSize: "16px" }}>
        <h1>FRONT-END DEVELOPER INTERN </h1>
<p>Tech Studio Academy  </p>
<p>JULY 2024 - SEP 2024 </p>
<p>Worked on a product that creates an online presence for small-scale businesses. </p>
<ul className='pl-6' style={{listStyle: "initial",}}>
  <li> Design Translation: Converting design concepts and mockups into functional, responsive web interfaces that align with the brand’s identity and goals. </li>
  <li>Cross-functional collaboration: coordinating with designers to refine UI/UX elements and with back-end developers to integrate and optimize data and functionality. </li>
  <li>User Experience Focus: Implementing best practices for useability and accessibility to create an engaging and intuitive user experience. </li>
  <li>Performance Optimization: Ensuring fast load times and smooth performances across various devices and browsers to enhance user satisfaction. </li>
  <li>Feedback Integration: Iterating based on feedback from team members and stakeholders to continually improve and adapt the product to meet evolving business needs. </li>
</ul>


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='bg-[#4B4B6E] xl:py-0 md:py-2'>
        <Accordion.Header>SKILLS</Accordion.Header>
        <Accordion.Body style={{color: "#02021a", fontSize: "20px" }}>
          <div className="mb-3">Langages
          <ul className='flex gap-12 pl-6 text-[16px]' style={{listStyle: "initial",}}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>TYPESCRIPT</li>
            </ul>
          </div>

          <div className="mb-3">Librabries
            <ul className='flex gap-12 pl-6 text-[16px]' style={{listStyle: "initial",}}>
              <li>REACT</li>
              <li>REACT REDUX</li>
            </ul>
          </div>

          <div className="mb-3">Frameworks
            <ul className='flex gap-12 pl-6 text-[16px]' style={{listStyle: "initial",}}>
              <li>TAILWIND</li>
              <li>BOOTSTRAP</li>
            </ul>
          </div>

          <div className="">Tools & Systems
            <ul className='flex gap-12 pl-6 text-[16px]' style={{listStyle: "initial",}}>
              <li>GIT</li>
              <li>VSCODE</li>
              <li>NPM</li>
              <li>NPM</li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </motion.div>
        </section>

        <section id='project' className='text-[#babae4]'>
            <motion.div className="container w-11/12 grid grid-cols-1 xl:grid-cols-2 m-auto gap-8 pt-40"
            initial={{y: -100}}
            whileInView={{y: [60, 0,]}}
            transition={{delay: 0.4, duration: 0.8}}
            >
              <div className="shadow-2xl h-[500px]">
              <div className='h-[350px]'>
                <img src={Multi} alt="description" className="h-full w-full object-cover" />
             </div>
               <div className='h-[150px] pl-4'>
                <h1 className='pt-3 font-bold text-md text-purple-500'>MULTI STEP FORM</h1>
                <p className='pb-1 text-lg'>Project description</p>
                  <ul className='w-2/4 pl-5 text-[13px]' style={{listStyle: "initial", display: "flex", justifyContent: "space-between"}}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                <div className="flex items-center gap-6 pt-2">
                <a href="https://multi-step-form-seven-omega.vercel.app/" className='text-md underline'>Visit Site</a>
                <a href="https://github.com/Peace-B/multi-step-form" className='text-md underline'>Source Code</a>
                </div>
               </div>
              </div>

              <div className="shadow-2xl h-[500px]">
               <div className='h-[350px]'>
                <img src={Space} alt="" className='h-full w-full'/>
               </div>
               <div className='h-[150px] pl-4'>
                <h1 className='pt-3 font-bold text-md text-purple-500'>SPACE APP</h1>
                <p className='pb-1 text-lg'>Project description</p>
                  <ul className='w-2/6 pl-5 text-[13px]' style={{ listStyle: "initial", display: "flex",  justifyContent: "space-between"}}>
                    <li>REACT</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                <div className="flex items-center gap-6 pt-2">
                <a href="https://space-tourism-topaz-ten.vercel.app/" className='text-md underline'>Visit Site</a>
                <a href="https://github.com/Peace-B/Better-House-Task" className='text-md underline'>Source Code</a>
                </div>
               </div>
              </div>

              <div className="shadow-2xl h-[500px]">
               <div className='h-[350px]'>
                <img src={Advice} alt="" className='h-full w-full'/>
               </div>
               <div className='h-[150px] pl-4'>
                <h1 className='pt-3 font-bold text-md text-purple-500'>ADVICE GENERATOR</h1>
                <p className='pb-1 text-lg'>Project description</p>
                  <ul className='w-2/6 pl-5 text-[13px]' style={{ listStyle: "initial", display: "flex", justifyContent: "space-between"}}>
                  <li>REACT</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                <div className="flex items-center gap-6 pt-2">
                <a href="https://advice-generator-eight-wheat.vercel.app/" className='text-md underline'>Visit Site</a>
                <a href="https://github.com/Peace-B/Advice-generator" className='text-md underline'>Source Code</a>
                </div>
               </div>
              </div>
              <div className="shadow-2xl h-[500px]">
               <div className='h-[350px]'>
                <img src={Better} alt="" className='h-full w-full'/>
               </div>
               <div className='h-[150px] pl-4'>
                <h1 className='pt-3 font-bold text-md text-purple-500'>BETTER HOUSE</h1>
                <p className='pb-1 text-lg'>Project description</p>
                  <ul className='w-2/4 pl-5 text-[13px]' style={{ listStyle: "initial", display: "flex", justifyContent: "space-between"}}>
                    <li>REACT</li>
                    <li>NODE.JS</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                <div className="flex items-center gap-6 pt-2">
                <a href="https://better-house-task.vercel.app/" className='text-md underline'>Visit Site</a>
                <a href="https://github.com/Peace-B/Better-House-Task" className='text-md underline'>Source Code</a>
                </div>
               </div>
              </div>
              <div className="shadow-2xl h-[500px]">
               <div className='h-[350px]'>
                <img src={Port} alt="" className='h-full w-full'/>
               </div>
               <div className='h-[150px] pl-4'>
                <h1 className='pt-3 font-bold text-md text-purple-500'>PORTFOLIO</h1>
                <p className='pb-1 text-lg'>Project description</p>
                  <ul className='w-2/6 pl-5 text-[13px]' style={{ listStyle: "initial", display: "flex", justifyContent: "space-between"}}>
                  <li>REACT</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                <div className="flex items-center gap-6 pt-2">
                <a href="https://tsa-port-folio.vercel.app/" className='text-md underline'>Visit Site</a>
                <a href="https://github.com/Peace-B/TSA-PortFolio-" className='text-md underline'>Source Code</a>
                </div>
               </div>
              </div>
              <div className="shadow-2xl h-[500px]">
               <div className='h-[350px]'>
                <img src={DPH} alt="" className='h-full w-full'/>
               </div>
               <div className='h-[150px] pl-4'>
                <h1 className='pt-3 font-bold text-md text-purple-500'>DIGITAL PRESENCE HUB</h1>
                <p className='pb-1 text-md'>A site that creates online presence for small scale businesses.</p>
                  <ul className='w-2/4 pl-5 text-[13px]' style={{ listStyle: "initial", display: "flex", justifyContent: "space-between"}}>
                    <li>REACT</li>
                    <li>NODE.JS</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                <div className="flex items-center gap-6 pt-2">
                <a href="https://dph-frontend.vercel.app/" className='text-md underline'>Visit Site</a>
                <a href="https://github.com/braitcode/dph-frontend" className='text-md underline'>Source Code</a>
                </div>
               </div>
              </div>
            </motion.div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#07071b" fill-opacity="1" d="M0,64L40,58.7C80,53,160,43,240,53.3C320,64,400,96,480,122.7C560,149,640,171,720,176C800,181,880,171,960,144C1040,117,1120,75,1200,74.7C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
        </section>

        
        <section id='contact' className=' h-screen bg-[#4B4B6E] pt-32'>
          <div className="container flex flex-col gap-4 xl:flex-row xl:w-5/6 xl:m-auto xl:h-5/6">
           {/* form section*/}
           <div className='xl:w-3/5 h-full shadow-2xl'>
      <form onSubmit={handleSubmit(onSubmit)} className='shadow-2xl w-11/12 m-auto grid grid-cols-2 gap-8'>
        <div className="flex flex-col">
          <label>First Name</label>
          <input 
            type="text" 
            placeholder='first name' 
            className={`py-2 rounded bg-[#4B4B6E] border shadow-xl placeholder:pl-2 ${errors.firstName ? 'border-red-500' : ''}`} 
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && <span className='text-red-500 text-sm'>{errors.firstName.message}</span>}
        </div>

        <div className="flex flex-col">
          <label>Last Name</label>
          <input 
            type="text" 
            placeholder='last name' 
            className={`py-2 rounded bg-[#4B4B6E] border shadow-xl placeholder:pl-2 ${errors.lastName ? 'border-red-500' : ''}`} 
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && <span className='text-red-500 text-sm'>{errors.lastName.message}</span>}
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input 
            type="email" 
            placeholder='email' 
            className={`py-2 rounded bg-[#4B4B6E] border shadow-xl placeholder:pl-2 ${errors.email ? 'border-red-500' : ''}`} 
            {...register("email", { 
              required: "Email is required", 
              pattern: { 
                value: /^\S+@\S+$/i, 
                message: "Invalid email address" 
              } 
            })}
          />
          {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
        </div>

        <div className="flex flex-col">
          <label>Phone Number</label>
          <input 
            type="tel" 
            placeholder='phone number' 
            className={`py-2 rounded bg-[#4B4B6E] border shadow-xl placeholder:pl-2 ${errors.phone ? 'border-red-500' : ''}`} 
            {...register("phone", { 
              required: "Phone number is required", 
              pattern: { 
                value: /^[0-9]{10}$/, 
                message: "Invalid phone number"
              } 
            })}
          />
          {errors.phone && <span className='text-red-500 text-sm'>{errors.phone.message}</span>}
        </div>

        <div className="flex w-[354px] flex-col xl:w-[604px]">
          <label>Message</label>
          <textarea 
            placeholder='.....type anything' 
            rows='5' 
            className={`rounded-md bg-[#4B4B6E] border shadow-xl placeholder:pl-2 ${errors.message ? 'border-red-500' : ''}`} 
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <span className='text-red-500 text-sm'>{errors.message.message}</span>}
        </div>

        <div className="w-11/12 m-auto flex justify-center pt-2 col-span-2"> {/* Use col-span-2 to span the button across both columns */}
          <button type="submit" className='border py-2 px-5 rounded'>Submit</button>
        </div>
      </form>
    </div>

            <div className="w-full shadow-2xl flex xl:flex-col xl:w-2/5 gap-2">
           <div className="xl:w-11/12 m-auto shadow-2xl ">
           <img src={ContactImg} alt="" className="rounded-2xl hidden md:block"/>
           </div>
           <ul className="w-11/12 m-auto flex flex-col gap-4">
             <li className="shadow-2xl flex items-center gap-3 py-2">
             <div className="bg-[#0c0c1d] p-2 rounded-2xl">
              <img src={MsgImg} alt="" />
             </div>
              <div className="">
              <p>Email</p>
              <p>peacebizzy32@gmail.com</p>
              </div>
             </li>
             <li className="shadow-2xl flex items-center gap-3 py-2">
             <div className="bg-[#0c0c1d] py-2 px-3 rounded-2xl">
             <img src={CallImg} alt="" />
             </div>
              <div>
              <p>Phone</p>
              <p>09063948518</p>
              </div>
             </li>
           </ul>
           </div>
          </div>
          </section>

          <footer id="footer" className="flex justify-between items-center py-8">
          <p className='font-bold text-2xl text-gray-500'>&copy; Peace Bassey {currentYear}.</p>
      <ul className="flex gap-4 justify-center">
        <li>
          <a href="https://github.com/Peace-B" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill" style={{ fontSize: '3rem' }}></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/peace-bassey-dev/" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-fill" style={{ fontSize: '3rem' }}></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <i class="ri-twitter-x-fill" style={{ fontSize: '3rem' }}></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <i class="ri-instagram-fill" style={{ fontSize: '3rem' }}></i>
          </a>
        </li>
      </ul>
    </footer>
    </div>
  )
}

export default Hero;