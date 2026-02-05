import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe } from "lucide-react";

const freelanceProjects = [
  {
    title: "Company Website & Digital Systems",
    client: "VT & GALPK Pvt Ltd",
    url: "https://vtgalpk.com",
    displayUrl: "vtgalpk.com",
  },
  {
    title: "Personal Portfolio Website",
    client: "B S Nagabhushan",
    url: "https://bsnagabhushan.netlify.app/",
    displayUrl: "bsnagabhushan.netlify.app",
  },
  {
    title: "Personal Portfolio Website",
    client: "Anjali A",
    url: "https://anjalia.netlify.app/",
    displayUrl: "anjalia.netlify.app",
  },
];

const Freelance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Freelance Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world projects delivered to satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {freelanceProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-xl border border-muted-foreground/10 hover:border-muted-foreground/30 transition-all duration-300 hover:glow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-muted transition-colors">
                  <Globe className="w-6 h-6 text-foreground" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
              </div>
              
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-glow transition-all line-clamp-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2 line-clamp-1">
                Client: {project.client}
              </p>
              <p className="text-muted-foreground/70 text-xs md:text-sm line-clamp-1">
                {project.displayUrl}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;