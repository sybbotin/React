import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
     
    <div>
    <motion.div id='div1'
    
    initial={{
     x:-1000,
     opacity:0
    }}
    animate={{
      x:0,
      opacity:1
    }}
    transition={{
      delay:1,
      duration:2

    }}
    >
      Добро пожаловать на пример описания страницы

    </motion.div>

    <motion.div id='div2'
    initial={{
      opacity:0,
    }}
    animate={{
      y:0,
      opacity:1
    }}
    transition={{
      delay:1,
      duration:2
    }}
    >
      <motion.img
      src='/img/fl_b.jpg'
      className='fl_b'
      width={350}

      initial={{
        opacity:1.5
      }}
      transition={{
        duration:5

      }}

      whileTap={{rotate:360}}
      >
      </motion.img>

    </motion.div>

    <motion.div id='div3'
    initial={{
      opacity:1,
      scale:0.5
    }}
    animate={{
      scale:1,
      opacity:1
    }}
    transition={{
      duration:2
    }}
    >
      <motion.img
      src='/img/flight.png'
      className='flight'
      width={150}

      initial={{
        opacity:0.8
      }}
      transition={{
        duration:5

      }}

      whileHover={{
      scale:2,
      transition:{
        duration:2
      }

      }}
      >
      </motion.img>

    </motion.div>

    <motion.div id='div4'
    initial={{
      opacity:0,
      scale:0.5
    }}
    animate={{
      scale:1,
      opacity:1
    }}
    transition={{
      duration:2
    }}
    >
      <motion.img drag='x'
      src='/img/flight.png'
      className='flight'
      width={150}

      initial={{
        opacity:0.8
      }}
      transition={{
        duration:3

      }}

      whileDrag={{
      scale:1.5,
      
      }}
      >
      </motion.img>

    </motion.div>
    </div>
  )
}

export default Description