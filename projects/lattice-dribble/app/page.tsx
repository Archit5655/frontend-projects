"use client";
import { easeIn, motion } from "motion/react";
import { getConfiguredExperimentalFeatures } from "next/dist/server/config";

export default function Home() {
  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-0 left-0 w-full  h-[90vh] -z-[10] blur-gradient-bottom after:content-[''] after:fixed after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] after:opacity-40 after:mix-blend-overlay"
        style={{
          background:
            "radial-gradient(1920px 100% at 50%  100%, rgba(255,30,84,0.6) 0%, rgba(80,56,255,0.5) 50%, transparent 100%)",
            // "linear-gradient(180deg, rgba(255, 30, 84, 0.6) 0%, rgba(80, 56, 255, 0.5) 50%, transparent 100%)",
          maskImage:
            "radial-gradient(1920px 100% at 50% 100%, #000 0%, rgba(0, 0, 0, .5) 50%, transparent 100%)",
        }}
        
      />
      <div className=" flex flex-col items-center justify-center h-screen text-center"> 
        <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:100}} transition={{ duration:0.7,ease:"linear"}}   className="text-6xl ">Get Started Now get your one now </motion.h1>
      </div>


    </>


  );
}
