 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { MapPin, GraduationCap } from "lucide-react";
 import AnimatedCounter from "@/components/ui/AnimatedCounter";
 
 const stats = [
   { value: 6, label: "Internships", suffix: "" },
   { value: 20, label: "Projects", suffix: "+" },
   { value: 20, label: "Certifications", suffix: "+" },
   { value: 9.17, label: "CGPA", suffix: "", isDecimal: true },
 ];
 
 const About = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
    <section id="about" className="section-padding bg-background" ref={ref}>
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             About Me
           </h2>
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 items-start">
           {/* Info cards */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="space-y-6"
           >
             {/* Education */}
             <div className="p-6 bg-card rounded-xl border border-muted-foreground/10">
               <div className="flex items-start gap-4">
                 <div className="p-3 bg-secondary rounded-lg">
                   <GraduationCap className="w-6 h-6 text-foreground" />
                 </div>
                 <div>
                   <h3 className="font-display text-lg font-semibold text-foreground mb-1">Education</h3>
                   <p className="text-foreground">BCA — Srinivas University</p>
                   <p className="text-muted-foreground text-sm">2023 – 2026</p>
                   <p className="text-foreground font-medium mt-2">CGPA: 9.17</p>
                 </div>
               </div>
             </div>
 
             {/* Location */}
             <div className="p-6 bg-card rounded-xl border border-muted-foreground/10">
               <div className="flex items-start gap-4">
                 <div className="p-3 bg-secondary rounded-lg">
                   <MapPin className="w-6 h-6 text-foreground" />
                 </div>
                 <div>
                   <h3 className="font-display text-lg font-semibold text-foreground mb-1">Location</h3>
                   <p className="text-muted-foreground">Bannerghatta, Bangalore – 560083</p>
                 </div>
               </div>
             </div>
 
             {/* Bio */}
             <div className="p-6 bg-card rounded-xl border border-muted-foreground/10">
               <p className="text-muted-foreground leading-relaxed">
                 I'm a passionate BCA student with a strong foundation in AI/ML and full-stack development. 
                 Across six internships spanning AI, data science, cybersecurity, and IT systems, I've applied 
                 theory to real-world challenges. From computer vision systems and LLM-powered chatbots to 
                 scalable web platforms, every project I build is focused on performance, clarity, and impact.
               </p>
             </div>
           </motion.div>
 
           {/* Stats grid */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="grid grid-cols-2 gap-6"
           >
             {stats.map((stat, index) => (
               <motion.div
                 key={stat.label}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
                 transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                 className="p-6 bg-card rounded-xl border border-muted-foreground/10 text-center hover:glow-sm transition-all duration-300"
               >
                 {stat.isDecimal ? (
                   <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
                     {stat.value}
                   </span>
                 ) : (
                   <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                 )}
                 <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
               </motion.div>
             ))}
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;