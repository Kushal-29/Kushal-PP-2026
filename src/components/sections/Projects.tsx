 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Github, Star, Flame } from "lucide-react";
 
 const projects = [
   {
     title: "Real-Time Face Recognition System",
     description: "Advanced computer vision system for real-time face detection and recognition using OpenCV",
     tech: ["Python", "OpenCV"],
     github: "https://github.com/Kushal-29/face-recognition-system",
     featured: true,
   },
   {
     title: "Phishing Website Detector",
     description: "ML-powered web application to detect and classify phishing websites with high accuracy",
     tech: ["Python", "Flask", "ML"],
     github: "https://github.com/Kushal-29/phishing-website-detector",
     hot: true,
   },
   {
     title: "Handwritten Digit Recognition",
     description: "Deep learning model using CNN to recognize handwritten digits from images",
     tech: ["Python", "TensorFlow", "CNN"],
     github: "https://github.com/Kushal-29/handwritten-digit-recognition",
   },
   {
     title: "AI Chatbot with Gemini API",
     description: "Intelligent conversational chatbot powered by Google's Gemini API",
     tech: ["Python", "Gemini API"],
     github: "https://github.com/Kushal-29/Chat-bot-using-geminiapi",
   },
   {
     title: "Email Spam Detector",
     description: "NLP-based machine learning model to classify emails as spam or legitimate",
     tech: ["Python", "NLP", "ML"],
     github: "https://github.com/Kushal-29/EMAILSPAM",
   },
   {
     title: "Stock Portfolio Manager",
     description: "React-based application for tracking and managing stock investments",
     tech: ["React", "JavaScript"],
     github: "https://github.com/Kushal-29/CodeAlpha_StockPortfolio",
   },
 ];
 
 const Projects = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             Featured Projects
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             A showcase of AI/ML and full-stack projects built with real-world impact in mind
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {projects.map((project, index) => (
             <motion.div
               key={project.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group relative p-6 bg-card rounded-xl border border-muted-foreground/10 hover:border-muted-foreground/30 transition-all duration-300 hover:glow-sm flex flex-col"
             >
               {/* Badge */}
               {(project.featured || project.hot) && (
                 <div className="absolute top-4 right-4">
                   {project.featured && (
                     <span className="inline-flex items-center gap-1 px-2 py-1 bg-foreground/10 text-foreground text-xs rounded-full">
                       <Star className="w-3 h-3" /> Featured
                     </span>
                   )}
                   {project.hot && (
                     <span className="inline-flex items-center gap-1 px-2 py-1 bg-foreground/10 text-foreground text-xs rounded-full">
                       <Flame className="w-3 h-3" /> Hot
                     </span>
                   )}
                 </div>
               )}
 
               <h3 className="font-display text-xl font-semibold text-foreground mb-3 pr-16">
                 {project.title}
               </h3>
 
               <p className="text-muted-foreground text-sm mb-4 flex-grow">
                 {project.description}
               </p>
 
               {/* Tech stack */}
               <div className="flex flex-wrap gap-2 mb-4">
                 {project.tech.map((tech) => (
                   <span
                     key={tech}
                     className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md border border-muted-foreground/10"
                   >
                     {tech}
                   </span>
                 ))}
               </div>
 
               {/* GitHub link */}
               <a
                 href={project.github}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-foreground text-sm font-medium hover:underline"
               >
                 <Github className="w-4 h-4" />
                 View on GitHub
               </a>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Projects;