import React from 'react'
import '../css/NavBar.css'
import {motion} from "framer-motion"

const NavBar = () => {
  return (
    <>
        <div className="container header sticky-top backdrop-blur text-[#7878a8] shadow-xl">
        <div className="peace">
            <a href="#home">
              Dev.Peace
               </a>
            </div>
                <motion.div className="flex gap-10"
                initial={{x: 500}}
                animate={{x: -20}}
                transition={{duration: 0.5, delay: 1.6}}
                >
                <a href="#about">About</a>
                <a href="#project">Projects</a>
                <a href="#contact">Contact</a>
                <button className='text-2xl'>Resume</button>
            </motion.div>
        </div>
    </>
  )
}

export default NavBar









// import React from 'react'
// import Facebook from "../assets/—Pngtree—facebook communication social media_8704815.png"
// import Insta from "../assets/—Pngtree—three-dimensional instagram icon_9015419.png"
// import "../css/NavBar.css"
// import { motion } from "framer-motion"


// const NavBar = () => {
//   return (
//     <div>
//       {/* sidebar */}
//       <div className="wrapper">
//         <motion.span 
//         initial={{opacity:0, scale:0.5}} 
//         animate={{opacity:1, scale:1}} 
//         transition={{duration:0.5}}
//         >
//           Peace Dev
//           </motion.span>
//         <div className="social">
//           <a href="/"><img src={Facebook} alt="" /></a>
//           <a href="/"><img src={Insta} alt="" /></a>
//           <a href="/"><img src={Facebook} alt="" /></a>
//           <a href="/"><img src={Insta} alt="" /></a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NavBar


