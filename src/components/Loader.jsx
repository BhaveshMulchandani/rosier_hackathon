import React from 'react'
import { motion } from "motion/react"

const Loader = () => {

     setTimeout(() => setShowLoader(false), 2000)
  return (
    <>
     <motion.div
      className="fixed inset-0 bg-[#f1f5e4] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src="/asset/rosier_logo.png"
        alt="Rosier Logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-32 h-32"
      />
    </motion.div>
    </>
  )
}

export default Loader