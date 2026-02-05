 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef, useState } from "react";
 import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react";
 
 const contactInfo = [
   {
     icon: Mail,
     label: "Email",
     value: "kush29k@gmail.com",
     href: "mailto:kush29k@gmail.com",
   },
   {
     icon: Phone,
     label: "Phone",
     value: "+91 6362241460",
     href: "tel:+916362241460",
   },
   {
     icon: MapPin,
     label: "Location",
     value: "Bannerghatta, Bangalore – 560083",
     href: null,
   },
 ];
 
 const socialLinks = [
   {
     icon: Github,
     label: "GitHub",
     href: "https://github.com/Kushal-29",
   },
   {
     icon: Linkedin,
     label: "LinkedIn",
     href: "https://linkedin.com/in/kushal-k2908",
   },
   {
     icon: ExternalLink,
     label: "Google Dev",
     href: "https://g.dev/kush29k",
   },
 ];
 
 const Contact = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     setIsSubmitting(true);
     // Form will submit naturally to Formspree
   };
 
   return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             Get In Touch
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Ready to collaborate on your next project? Let's connect.
           </p>
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
           {/* Contact info */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="space-y-6"
           >
             {contactInfo.map((item) => (
               <div key={item.label} className="flex items-center gap-4">
                 <div className="p-3 bg-secondary rounded-lg">
                   <item.icon className="w-5 h-5 text-foreground" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">{item.label}</p>
                   {item.href ? (
                     <a
                       href={item.href}
                       className="text-foreground hover:underline"
                     >
                       {item.value}
                     </a>
                   ) : (
                     <p className="text-foreground">{item.value}</p>
                   )}
                 </div>
               </div>
             ))}
 
             {/* Social links */}
             <div className="pt-6 border-t border-muted-foreground/10">
               <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
               <div className="flex gap-4">
                 {socialLinks.map((social) => (
                   <a
                     key={social.label}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-secondary rounded-lg hover:bg-muted transition-colors group"
                     aria-label={social.label}
                   >
                     <social.icon className="w-5 h-5 text-foreground" />
                   </a>
                 ))}
               </div>
             </div>
           </motion.div>
 
           {/* Contact form */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.3 }}
           >
             <form
               action="https://formspree.io/f/mnjavnoz"
               method="POST"
               id="contactForm"
               onSubmit={handleSubmit}
               className="space-y-6"
             >
               <div>
                 <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                   Name
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   required
                   className="w-full px-4 py-3 bg-card border border-muted-foreground/10 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground/30 transition-colors"
                   placeholder="Your name"
                 />
               </div>
 
               <div>
                 <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                   Email
                 </label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   required
                   className="w-full px-4 py-3 bg-card border border-muted-foreground/10 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground/30 transition-colors"
                   placeholder="your@email.com"
                 />
               </div>
 
               <div>
                 <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                   Message
                 </label>
                 <textarea
                   id="message"
                   name="message"
                   required
                   rows={5}
                   className="w-full px-4 py-3 bg-card border border-muted-foreground/10 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground/30 transition-colors resize-none"
                   placeholder="Your message..."
                 />
               </div>
 
               <button
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {isSubmitting ? (
                   "Sending..."
                 ) : (
                   <>
                     Send Message
                     <Send className="w-4 h-4" />
                   </>
                 )}
               </button>
             </form>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Contact;