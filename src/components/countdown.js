import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import CountdownReact from 'react-countdown';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };



const Countdown = () => {
  const { scrollYProgress } = useViewportScroll();
  const transsition = { duration: 1.4, ease: [0.2, 0.01, 0.02, 0] };
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
const renderer = ({ days,hours, minutes, seconds, completed }) => {
  
  return (
    <>
    <div className='countdown-container'>
    <div class='square'>
      <motion.div   style={{ scale: scale }}
                  initial={{ scale: 1.0 }}
                  animate={{
                    transition: { delay: 0.2, ...transsition },
                    y: 0,
                  }}>
    <h5>{days < 10 ? "0"+days : days}</h5>
    <h6>día</h6></motion.div>
    </div>
    <div class='square'>
    <h5>{hours < 10 ? "0"+hours : hours}</h5>
    <h6>horas</h6>
    </div>
    <div class='square'>
    <h5>{minutes < 10 ? "0"+minutes : minutes}</h5>
    <h6>minutos</h6>
    </div>
    <div class='square'>
    <h5>{seconds < 10 ? "0"+seconds : seconds}</h5>
    <h6>segundos</h6>
    </div>
    </div>
    </>
  );
};

  return (<>
  
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.1, ...transition },
      }}
      className='scroll-for-more'>
     
      <CountdownReact date={'2022-01-03T00:00:00'} renderer={renderer} />
      <h6 style={{color:"#e393c1",fontSize:"24px",
    padding: "0% 10%",textShadow: "1px 1px 2px white"}}>LA FIESTA MÁS LINDA DEL MUNDO LLEGA A PUNTA DEL ESTE</h6>
    </motion.div></>
  );
};

export default Countdown;
