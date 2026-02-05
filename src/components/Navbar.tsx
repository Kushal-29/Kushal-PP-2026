 import { useState, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Menu, X, Zap, Download } from "lucide-react";
 
 const navLinks = [
   { label: "Home", href: "#home" },
   { label: "About", href: "#about" },
   { label: "Skills", href: "#skills" },
   { label: "Experience", href: "#experience" },
   { label: "Projects", href: "#projects" },
   { label: "Contact", href: "#contact" },
 ];
 
 const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     e.preventDefault();
     setIsOpen(false);
     const id = href.replace("#", "");
     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
   };
 
   return (
     <>
       <motion.header
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.6 }}
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-muted-foreground/10" : ""
         }`}
       >
         <div className="container-custom">
           <div className="flex items-center justify-between h-16 md:h-20">
             {/* Logo */}
             <a
               href="#home"
               onClick={(e) => scrollToSection(e, "#home")}
               className="flex items-center gap-2 group"
             >
               <Zap className="w-5 h-5 text-foreground group-hover:animate-pulse" />
               <span className="font-display text-lg font-bold text-foreground">
                 KUSHAL.K
               </span>
             </a>
 
             {/* Desktop navigation */}
             <nav className="hidden md:flex items-center gap-8">
               {navLinks.map((link) => (
                 <a
                   key={link.label}
                   href={link.href}
                   onClick={(e) => scrollToSection(e, link.href)}
                   className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                 >
                   {link.label}
                   <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                 </a>
               ))}
               <a
                 href="/Kushal_Resume.pdf"
                 download
                 className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors"
               >
                 <Download className="w-4 h-4" />
                 Resume
               </a>
             </nav>
 
             {/* Mobile menu button */}
             <button
               onClick={() => setIsOpen(!isOpen)}
               className="md:hidden p-2 text-foreground"
               aria-label="Toggle menu"
             >
               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
           </div>
         </div>
       </motion.header>
 
       {/* Mobile menu */}
       <AnimatePresence>
         {isOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.2 }}
             className="fixed inset-0 z-40 md:hidden"
           >
             <div className="absolute inset-0 bg-background" />
             <nav className="relative flex flex-col items-center justify-center h-full gap-8">
               {navLinks.map((link, index) => (
                 <motion.a
                   key={link.label}
                   href={link.href}
                   onClick={(e) => scrollToSection(e, link.href)}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   className="text-2xl font-display font-semibold text-foreground hover:text-muted-foreground transition-colors"
                 >
                   {link.label}
                 </motion.a>
               ))}
               <motion.a
                 href="/Kushal_Resume.pdf"
                 download
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: navLinks.length * 0.1 }}
                 className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg"
               >
                 <Download className="w-5 h-5" />
                 Download Resume
               </motion.a>
             </nav>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
 };
 
 export default Navbar;