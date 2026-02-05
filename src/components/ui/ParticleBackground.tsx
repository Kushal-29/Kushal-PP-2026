 import { useCallback, useEffect, useRef } from "react";
 
 interface Particle {
   x: number;
   y: number;
   vx: number;
   vy: number;
   size: number;
   opacity: number;
 }
 
 const ParticleBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const particlesRef = useRef<Particle[]>([]);
   const animationRef = useRef<number>();
   const mouseRef = useRef({ x: 0, y: 0 });
 
   const initParticles = useCallback((width: number, height: number) => {
     const particles: Particle[] = [];
     const particleCount = Math.floor((width * height) / 15000);
 
     for (let i = 0; i < particleCount; i++) {
       particles.push({
         x: Math.random() * width,
         y: Math.random() * height,
         vx: (Math.random() - 0.5) * 0.3,
         vy: (Math.random() - 0.5) * 0.3,
         size: Math.random() * 1.5 + 0.5,
         opacity: Math.random() * 0.5 + 0.1,
       });
     }
     return particles;
   }, []);
 
   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
 
     const ctx = canvas.getContext("2d");
     if (!ctx) return;
 
     const handleResize = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       particlesRef.current = initParticles(canvas.width, canvas.height);
     };
 
     const handleMouseMove = (e: MouseEvent) => {
       mouseRef.current = { x: e.clientX, y: e.clientY };
     };
 
     handleResize();
     window.addEventListener("resize", handleResize);
     window.addEventListener("mousemove", handleMouseMove);
 
     const animate = () => {
       ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
       ctx.fillRect(0, 0, canvas.width, canvas.height);
 
       particlesRef.current.forEach((particle) => {
         // Update position
         particle.x += particle.vx;
         particle.y += particle.vy;
 
         // Wrap around edges
         if (particle.x < 0) particle.x = canvas.width;
         if (particle.x > canvas.width) particle.x = 0;
         if (particle.y < 0) particle.y = canvas.height;
         if (particle.y > canvas.height) particle.y = 0;
 
         // Draw particle
         ctx.beginPath();
         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
         ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
         ctx.fill();
       });
 
       // Draw connections
       particlesRef.current.forEach((p1, i) => {
         particlesRef.current.slice(i + 1).forEach((p2) => {
           const dx = p1.x - p2.x;
           const dy = p1.y - p2.y;
           const distance = Math.sqrt(dx * dx + dy * dy);
 
           if (distance < 100) {
             ctx.beginPath();
             ctx.moveTo(p1.x, p1.y);
             ctx.lineTo(p2.x, p2.y);
             ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - distance / 100)})`;
             ctx.stroke();
           }
         });
       });
 
       animationRef.current = requestAnimationFrame(animate);
     };
 
     animate();
 
     return () => {
       window.removeEventListener("resize", handleResize);
       window.removeEventListener("mousemove", handleMouseMove);
       if (animationRef.current) {
         cancelAnimationFrame(animationRef.current);
       }
     };
   }, [initParticles]);
 
   return (
     <canvas
       ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
       style={{ background: "transparent" }}
     />
   );
 };
 
 export default ParticleBackground;