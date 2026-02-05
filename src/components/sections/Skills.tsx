 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 
 const skillCategories = [
   {
     title: "Programming",
     skills: ["Python", "JavaScript", "C++", "Java", "C", "PHP", "Dart"],
   },
   {
     title: "Web & Databases",
     skills: ["HTML", "CSS", "Node.js", "Express.js", "MySQL", "MongoDB"],
   },
   {
     title: "AI/ML & Tools",
     skills: ["Machine Learning", "OpenCV", "TensorFlow", "Flask", "Data Preprocessing"],
   },
   {
     title: "Frameworks & Platforms",
     skills: ["React", "TailwindCSS", "SQLite", "AWS", "Docker", "Git & GitHub", "REST APIs", "Gemini API", "Scikit-learn"],
   },
 ];
 
 const Skills = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
    <section id="skills" className="section-padding bg-card" ref={ref}>
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             Technical Skills
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             A comprehensive toolkit for building intelligent, scalable solutions
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-8">
           {skillCategories.map((category, categoryIndex) => (
             <motion.div
               key={category.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
               className="p-6 bg-card rounded-xl border border-muted-foreground/10"
             >
               <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                 {category.title}
               </h3>
               <div className="flex flex-wrap gap-2">
                 {category.skills.map((skill, skillIndex) => (
                   <motion.span
                     key={skill}
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
                     transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                     className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-lg border border-muted-foreground/10 hover:border-muted-foreground/30 hover:bg-muted transition-all duration-300 cursor-default"
                   >
                     {skill}
                   </motion.span>
                 ))}
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Skills;