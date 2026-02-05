 import { motion } from "framer-motion";
 import { ArrowRight, Download, Mail } from "lucide-react";
 import profilePhoto from "@/assets/profile-photo.jpg";
 
 const Hero = () => {
   const scrollToSection = (id: string) => {
     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
   };
 
   return (
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Grid background */}
       <div className="absolute inset-0 bg-grid opacity-50" />
       
       {/* Radial gradient overlay */}
       <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
       
       <div className="container-custom relative z-10">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
           {/* Text content */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="flex-1 text-center lg:text-left"
           >
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-block px-4 py-1.5 mb-6 border border-muted-foreground/20 rounded-full"
             >
               <span className="text-sm text-muted-foreground font-medium tracking-wide">
                 Available for opportunities
               </span>
             </motion.div>
 
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4"
             >
               KUSHAL K
             </motion.h1>
 
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="font-display text-lg md:text-xl text-muted-foreground mb-6 tracking-wide"
             >
               BCA Student • AI/ML Developer • Full-Stack Builder
             </motion.p>
 
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="text-muted-foreground/80 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10"
             >
               Engineering intelligent systems at the intersection of AI, data, and full-stack development. 
               I specialize in transforming complex problems into scalable, production-ready solutions using 
               Python, machine learning, and modern web technologies. Focused on impact, performance, and real-world execution.
             </motion.p>
 
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="flex flex-wrap gap-4 justify-center lg:justify-start"
             >
               <button
                 onClick={() => scrollToSection("projects")}
                 className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all duration-300"
               >
                 View Projects
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
 
               <a
                 href="/Kushal_Resume.pdf"
                 download
                 className="group inline-flex items-center gap-2 px-6 py-3 border border-muted-foreground/30 text-foreground font-medium rounded-lg hover:bg-muted/50 hover:border-muted-foreground/50 transition-all duration-300"
               >
                 <Download className="w-4 h-4" />
                 Download Resume
               </a>
 
               <button
                 onClick={() => scrollToSection("contact")}
                 className="group inline-flex items-center gap-2 px-6 py-3 border border-muted-foreground/30 text-foreground font-medium rounded-lg hover:bg-muted/50 hover:border-muted-foreground/50 transition-all duration-300"
               >
                 <Mail className="w-4 h-4" />
                 Contact Me
               </button>
             </motion.div>
           </motion.div>
 
           {/* Profile image */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="relative flex-shrink-0"
           >
             <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
               {/* Glow effect */}
               <div className="absolute inset-0 rounded-full bg-foreground/10 blur-3xl" />
               
               {/* Image container */}
               <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-muted-foreground/20 glow-md">
                 <img
                   src={profilePhoto}
                   alt="Kushal K"
                   className="w-full h-full object-cover object-top"
                 />
               </div>
               
               {/* Decorative rings */}
               <div className="absolute inset-0 rounded-full border border-muted-foreground/10 animate-pulse-glow" style={{ transform: "scale(1.1)" }} />
               <div className="absolute inset-0 rounded-full border border-muted-foreground/5" style={{ transform: "scale(1.2)" }} />
             </div>
           </motion.div>
         </div>
       </div>
 
       {/* Scroll indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.2 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2"
       >
         <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
         >
           <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
         </motion.div>
       </motion.div>
     </section>
   );
 };
 
 export default Hero;