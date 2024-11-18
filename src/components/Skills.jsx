import { SKILLS } from "../constants"
import { motion } from "framer-motion"
const Skills = () => {
  const containerVariant = {
    hidden: {opacity : 0, y:20},
    visible: {opacity: 1, y: 0,
    transition: { duration: 1, staggerChildren: 0.5 },
    }
  }


  const itemVariants= {
    hidden: { x: -20, opacity: 0},
    visible: { x: 0, opacity: 1,
    transition: { duration: 0.5 },
    }
  }
  return (
    <div className="container mx-auto" id='skills'>
      <h2 className="mb-12 mt20 text-center text-4xl font-semibold">Skills</h2>
      <motion.div 
        initial='hidden'
        whileInView='visible'
        variants={containerVariant}
        viewport={{ once: true }}
        className="mx-2 flex flex-col rounded-3xl px-4 py2 lg:px-20 border border-stone-50/30">
        {SKILLS.map((skill, index) =>(
          <motion.div 
            variants={itemVariants}
            key={index} className={`py-6 flex items-center justify-between ${ index !== SKILLS.length - 1 ? 'border-b border-stone-50/30' : ''}`}>
            <div className="flex items-center">{skill.icon}
            <h3 className="px-6 text-lg lg:2xl:">{skill.name}</h3>
            </div>
          <div className="text-md font-semibold lg:text-xl">
            <span>{skill.experience}</span>
          </div>

          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills