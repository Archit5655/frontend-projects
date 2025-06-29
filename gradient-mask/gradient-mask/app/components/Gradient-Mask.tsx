"use client";
import React from 'react'
import { motion } from 'motion/react';


const Gradient = () => {
  return (
    <>
    <motion.div className="w-full fixed -z-10 h-screen" style={{
        background:
        "radial-gradient(1200px 100% at 50% 100%, rgba(37, 129, 170, 0.4) 0%, rgba(50, 23, 214, 0.4) 50%, transparent 100%)",
        maskImage:"radial-gradient(1200px 100% at 50% 100%, #000 0%, rbga(0,0,0,.5) 50%, transparent 100%)",
    }}>
  
  </motion.div>
  <div className=' flex flex-col items-center justify-center h-screen text-center'>
    <h2 className=' text-white'> GET SHIT DONE...</h2> 

  </div>  
      </>
)}

export default Gradient