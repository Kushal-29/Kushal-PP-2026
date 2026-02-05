 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Award, Trophy } from "lucide-react";
 import trophyPhoto from "@/assets/trophy-photo.jpg";
 
 const awards = [
   {
     title: "Best Employee of the Year",
     organization: "VT & GALPK Pvt Ltd",
     icon: Trophy,
   },
   {
     title: "Best Digital System Analyst",
     organization: "VT & GALPK Pvt Ltd",
     icon: Award,
   },
 ];
 
 const Awards = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
    <section className="section-padding relative overflow-hidden bg-background" ref={ref}>
       {/* Spotlight effect */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-foreground/5 via-transparent to-transparent pointer-events-none" />
       
       <div className="container-custom relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             Awards & Recognition
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Recognized for excellence, consistency, and impactful contributions
           </p>
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Trophy image */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative group"
           >
             <div className="relative overflow-hidden rounded-2xl">
               {/* Spotlight glow */}
               <div className="absolute inset-0 bg-gradient-radial from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <img
                 src={trophyPhoto}
                 alt="Kushal K holding awards"
                 className="w-full h-auto object-cover rounded-2xl border border-muted-foreground/10 transition-transform duration-700 group-hover:scale-105"
               />
               
               {/* Overlay gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
             </div>
           </motion.div>
 
           {/* Awards cards and quote */}
           <div className="space-y-6">
             {awards.map((award, index) => (
               <motion.div
                 key={award.title}
                 initial={{ opacity: 0, x: 50 }}
                 animate={isInView ? { opacity: 1, x: 0 } : {}}
                 transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                 className="group relative p-6 bg-card rounded-xl border border-muted-foreground/10 hover:border-muted-foreground/20 transition-all duration-300 hover:glow-sm"
               >
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-secondary rounded-lg group-hover:bg-muted transition-colors">
                     <award.icon className="w-6 h-6 text-foreground" />
                   </div>
                   <div>
                     <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                       {award.title}
                     </h3>
                     <p className="text-muted-foreground">{award.organization}</p>
                   </div>
                 </div>
               </motion.div>
             ))}
 
             {/* Quote */}
             <motion.blockquote
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="relative p-6 bg-secondary/50 rounded-xl border-l-2 border-foreground/30"
             >
               <p className="text-muted-foreground italic leading-relaxed">
                 "This recognition reflects months of consistency, problem-solving, and ownership — not luck. 
                 Grateful for the opportunity, the mentors who pushed standards higher, and the team that values 
                 execution over excuses. This isn't a peak. It's proof I'm on the right track. On to bigger 
                 problems and higher impact."
               </p>
             </motion.blockquote>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Awards;