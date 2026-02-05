 import { useEffect, useState, useRef } from "react";
 import { motion, useInView } from "framer-motion";
 
 interface AnimatedCounterProps {
   end: number;
   duration?: number;
   suffix?: string;
   prefix?: string;
 }
 
 const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "" }: AnimatedCounterProps) => {
   const [count, setCount] = useState(0);
   const ref = useRef<HTMLSpanElement>(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   useEffect(() => {
     if (!isInView) return;
 
     let startTime: number;
     const animate = (currentTime: number) => {
       if (!startTime) startTime = currentTime;
       const progress = (currentTime - startTime) / (duration * 1000);
 
       if (progress < 1) {
         setCount(Math.floor(end * Math.min(progress, 1)));
         requestAnimationFrame(animate);
       } else {
         setCount(end);
       }
     };
 
     requestAnimationFrame(animate);
   }, [end, duration, isInView]);
 
   return (
     <motion.span
       ref={ref}
       initial={{ opacity: 0, y: 20 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 0.5 }}
       className="font-display text-4xl md:text-5xl font-bold text-foreground"
     >
       {prefix}{count}{suffix}
     </motion.span>
   );
 };
 
 export default AnimatedCounter;