import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, githubUrl, liveUrl }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image-container">
        <img 
          src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} 
          alt={title}
          className="project-image"
        />
        <div className="project-overlay">
          <div className="project-links">
            {githubUrl && (
              <motion.a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="project-link"
              >
                <Github size={24} />
              </motion.a>
            )}
            {liveUrl && liveUrl !== "#" && (
              <motion.a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="project-link"
              >
                <ExternalLink size={24} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Automation Tools",
      description: "Custom bots and automation tools for process optimization",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/estrosebas",
      liveUrl: "#"
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/estrosebas",
      liveUrl: "#"
    },
    {
      title: "Project 3",
      description: "Description for Project 3",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/estrosebas",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="projects-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;