 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Briefcase, MapPin, Calendar } from "lucide-react";
 
 const experiences = [
   {
     title: "Digital Systems Analyst",
     company: "VT & GALPK Pvt Ltd",
     type: "Freelance",
     period: "Jul 2025 – Present",
     location: "HSR 2nd Sector, Bengaluru (On-site)",
     responsibilities: [
       "Digital systems for GST, PF, ESI, Income Tax",
       "Data validation & structured record management",
       "System workflows & online submissions",
       "Error detection and resolution",
       "IT operations optimization",
     ],
   },
   {
     title: "Data Science & Analytics Intern",
     company: "Future Interns",
     type: "Remote",
     period: "Dec 2025 – Jan 2026",
     location: "Remote",
     responsibilities: [
       "Data preprocessing & analysis",
       "Real-world datasets",
       "Visualization & insights",
     ],
   },
   {
     title: "Artificial Intelligence Intern",
     company: "CodeAlpha",
     type: "Remote",
     period: "Dec 2025 – Jan 2026",
     location: "Remote",
     responsibilities: [
       "Core AI concepts",
       "Guided problem-solving",
       "Hands-on AI tasks",
     ],
   },
   {
     title: "Data Science & Machine Learning Intern",
     company: "upSkill Campus",
     type: "Remote",
     period: "Dec 2025 – Jan 2026",
     location: "Remote",
     responsibilities: [
       "Applied ML workflows",
       "Industry-style projects",
     ],
   },
   {
     title: "Machine Learning & AI Intern",
     company: "Tamizhan Skills",
     type: "Remote",
     period: "Dec 2025",
     location: "Remote",
     responsibilities: [
       "ML foundations",
       "Model building & evaluation",
       "Python problem solving",
     ],
   },
   {
     title: "Cyber Security Intern",
     company: "Tamizhan Skills",
     type: "On-site",
     period: "May 2024 – July 2024",
     location: "On-site",
     responsibilities: [
       "Vulnerability testing",
       "Network audits",
       "Security documentation",
     ],
   },
 ];
 
 const Experience = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
    <section id="experience" className="section-padding bg-background" ref={ref}>
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             Professional Experience
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             6 internships across AI, data science, cybersecurity, and IT operations
           </p>
         </motion.div>
 
         {/* Timeline */}
         <div className="relative">
           {/* Timeline line */}
           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-muted-foreground/20 transform md:-translate-x-1/2" />
 
           {experiences.map((exp, index) => (
             <motion.div
               key={`${exp.title}-${exp.company}`}
               initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                 index % 2 === 0 ? "md:flex-row-reverse" : ""
               }`}
             >
               {/* Timeline dot */}
               <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-foreground rounded-full transform -translate-x-1/2 mt-6 z-10" />
 
               {/* Content */}
               <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                 <div className={`p-6 bg-card rounded-xl border border-muted-foreground/10 hover:border-muted-foreground/20 transition-all duration-300 hover:glow-sm ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-xl`}>
                   <div className={`flex items-center gap-2 mb-2 text-muted-foreground text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                     <Calendar className="w-4 h-4" />
                     <span>{exp.period}</span>
                   </div>
                   
                   <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                     {exp.title}
                   </h3>
                   
                   <div className={`flex items-center gap-2 text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                     <Briefcase className="w-4 h-4" />
                     <span>{exp.company}</span>
                     <span className="text-muted-foreground/50">•</span>
                     <MapPin className="w-4 h-4" />
                     <span>{exp.location}</span>
                   </div>
 
                   <ul className={`space-y-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                     {exp.responsibilities.map((resp, i) => (
                       <li key={i} className="text-muted-foreground text-sm">
                         {resp}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
 
               {/* Spacer for alternating layout */}
               <div className="hidden md:block flex-1" />
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Experience;