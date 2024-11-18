import { EDUCATION } from "../constants";
import { motion } from "framer-motion"

const Education = () => {
  return (
    <section id="eduction">
      <motion.h2 
         initial={{opacity: 0, y: -20}}
         whileInView={{opacity: 1, y: 0}}
         transition={{duration: 1}}
      className="mb-4 text-center text-3xl font-bold">Education</motion.h2>
      {EDUCATION.map((education, index) => (
        <motion.div 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1, delay: 0.5 * index}}
          key={index} className="mb-6 p-10">
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="text-lg">{education.institution}</p>
          <p className="text-sm">{education.duration}</p>
          <p className="mt-2">{education.description}</p>
          </motion.div>
      ))}
      </section>
  )
}

export default Education