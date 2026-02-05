 import { Github, Linkedin, ExternalLink, Zap } from "lucide-react";
 
 const navLinks = [
   { label: "Home", href: "#home" },
   { label: "About", href: "#about" },
   { label: "Skills", href: "#skills" },
   { label: "Experience", href: "#experience" },
   { label: "Projects", href: "#projects" },
   { label: "Contact", href: "#contact" },
 ];
 
 const socialLinks = [
   { icon: Github, href: "https://github.com/Kushal-29", label: "GitHub" },
   { icon: Linkedin, href: "https://linkedin.com/in/kushal-k2908", label: "LinkedIn" },
   { icon: ExternalLink, href: "https://g.dev/kush29k", label: "Google Dev" },
 ];
 
 const Footer = () => {
   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     e.preventDefault();
     const id = href.replace("#", "");
     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
   };
 
   return (
    <footer className="py-12 border-t border-muted-foreground/10 bg-background">
       <div className="container-custom">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           {/* Brand */}
           <div className="flex items-center gap-2">
             <Zap className="w-5 h-5 text-foreground" />
             <span className="font-display text-xl font-bold text-foreground">
               KUSHAL.K
             </span>
           </div>
 
           {/* Navigation */}
           <nav className="flex flex-wrap justify-center gap-6">
             {navLinks.map((link) => (
               <a
                 key={link.label}
                 href={link.href}
                 onClick={(e) => scrollToSection(e, link.href)}
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors"
               >
                 {link.label}
               </a>
             ))}
           </nav>
 
           {/* Social links */}
           <div className="flex gap-4">
             {socialLinks.map((social) => (
               <a
                 key={social.label}
                 href={social.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-colors"
                 aria-label={social.label}
               >
                 <social.icon className="w-5 h-5" />
               </a>
             ))}
           </div>
         </div>
 
         {/* Copyright */}
         <div className="mt-8 pt-8 border-t border-muted-foreground/5 text-center">
           <p className="text-sm text-muted-foreground">
             © {new Date().getFullYear()} Kushal K. All rights reserved.
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;