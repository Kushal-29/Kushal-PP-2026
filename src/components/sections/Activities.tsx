 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Users, Code, Lightbulb, BookOpen } from "lucide-react";
 
 const activities = [
   {
     title: "Google Developer Community",
     description: "Active member contributing to developer events and learning initiatives",
     icon: Code,
   },
   {
     title: "NVIDIA Developer Community",
     description: "Engaged with GPU computing and AI acceleration technologies",
     icon: Lightbulb,
   },
   {
     title: "Active GitHub Contributor",
     description: "Regular open-source contributions and project collaborations",
     icon: Users,
   },
   {
     title: "Technical Workshops",
     description: "Hands-on learning sessions and knowledge sharing events",
     icon: BookOpen,
   },
 ];
 
 const Activities = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
    <section className="section-padding bg-background" ref={ref}>
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             Activities & Community
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Engaged with developer communities and continuous learning
           </p>
         </motion.div>
 
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {activities.map((activity, index) => (
             <motion.div
               key={activity.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group p-6 bg-card rounded-xl border border-muted-foreground/10 hover:border-muted-foreground/20 transition-all duration-300 hover:glow-sm text-center"
             >
               <div className="inline-flex p-4 bg-secondary rounded-xl mb-4 group-hover:bg-muted transition-colors">
                 <activity.icon className="w-6 h-6 text-foreground" />
               </div>
               <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                 {activity.title}
               </h3>
               <p className="text-muted-foreground text-sm">
                 {activity.description}
               </p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Activities;