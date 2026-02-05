 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef, useState } from "react";
 import { Award, ChevronDown, ChevronUp } from "lucide-react";
 
 const certificationCategories = [
   {
     category: "AI & Machine Learning",
     certs: [
       "Machine Learning Fundamentals",
       "Deep Learning Specialization",
       "Computer Vision Basics",
       "Natural Language Processing",
     ],
   },
   {
     category: "Data Science",
     certs: [
       "Data Science with Python",
       "Data Analysis & Visualization",
       "Statistical Analysis",
     ],
   },
   {
     category: "Web Development",
     certs: [
       "Full Stack Web Development",
       "React Development",
       "JavaScript Advanced",
       "Node.js Development",
     ],
   },
   {
     category: "Backend & Databases",
     certs: [
       "SQL & Database Management",
       "MongoDB Fundamentals",
       "API Development",
     ],
   },
   {
     category: "Security",
     certs: [
       "Cybersecurity Fundamentals",
       "Network Security",
       "Ethical Hacking Basics",
     ],
   },
   {
     category: "Programming",
     certs: [
       "Python Programming",
       "Java Development",
       "C++ Programming",
     ],
   },
 ];
 
 const Certifications = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
 
   const toggleCategory = (category: string) => {
     setExpandedCategory(expandedCategory === category ? null : category);
   };
 
   return (
    <section id="certifications" className="section-padding bg-card" ref={ref}>
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             Certifications
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             20+ professional certifications across multiple domains
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
           {certificationCategories.map((cat, index) => (
             <motion.div
               key={cat.category}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="bg-card rounded-xl border border-muted-foreground/10 overflow-hidden"
             >
               <button
                 onClick={() => toggleCategory(cat.category)}
                 className="w-full p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
               >
                 <div className="flex items-center gap-3">
                   <Award className="w-5 h-5 text-foreground" />
                   <span className="font-display font-semibold text-foreground">
                     {cat.category}
                   </span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-sm text-muted-foreground">{cat.certs.length}</span>
                   {expandedCategory === cat.category ? (
                     <ChevronUp className="w-4 h-4 text-muted-foreground" />
                   ) : (
                     <ChevronDown className="w-4 h-4 text-muted-foreground" />
                   )}
                 </div>
               </button>
 
               <motion.div
                 initial={false}
                 animate={{
                   height: expandedCategory === cat.category ? "auto" : 0,
                   opacity: expandedCategory === cat.category ? 1 : 0,
                 }}
                 transition={{ duration: 0.3 }}
                 className="overflow-hidden"
               >
                 <div className="p-4 pt-0 space-y-2">
                   {cat.certs.map((cert) => (
                     <div
                       key={cert}
                       className="text-sm text-muted-foreground py-1 border-b border-muted-foreground/5 last:border-0"
                     >
                       {cert}
                     </div>
                   ))}
                 </div>
               </motion.div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Certifications;