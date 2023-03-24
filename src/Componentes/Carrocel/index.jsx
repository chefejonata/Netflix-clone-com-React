import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { motion } from 'framer-motion'

import './Carrocel.css'

 function Carrocel({titulo,galeria,seila}) {
    const caroucel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(caroucel.current?.scrollWidth - caroucel.current?.offsetWidth)
    },[])
  

  return (
    <div className='full'>
        <div className='texto'>
          <h2>{titulo}</h2>
        </div>
        <div className='app'>
                <motion.div ref={caroucel} className='carrocel' whileTap={{cursor: "grabbing"}}>
                    <motion.div className='inner' 
                        drag="x" 
                        dragConstraints={{right: 0, left: -width}}
                        >

                        {galeria.map(item => {
                        return(

                            <motion.div className={seila} key={item}>
                            <img src={item.urlImg} alt="imagem" />
                            </motion.div>

                        ) 
                        })}
                    </motion.div>
                </motion.div>
        </div>
    </div>
  )
}

export default Carrocel
