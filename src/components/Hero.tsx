import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Github, Linkedin, Mail, Youtube, Twitch, Code2, Laptop2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {

  const iconAnimation = {
    initial: { 
      y: 0, 
      rotate: 0, 
      scale: 1 
    },
    hover: {
      y: -5,
      rotate: 15,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-decoration"></div>
      <Container>
        <div className="hero-container">
          <div className="hero-content">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-greeting"
            >
              Hi there, I'm
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-title"
            >
              Diego Sebastián<span className="text-primary">.</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-subtitle"
            >
              Building digital solutions with passion
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-description"
            >
              I'm a software developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on cybersecurity and automation tools while pursuing my 
              Systems Engineering degree.
            </motion.p>
            <ul className="social-links">
              <motion.li 
                variants={iconAnimation}
                whileHover="hover"
              >
                <a 
                  href="https://github.com/estrosebas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              </motion.li>
              <motion.li
                variants={iconAnimation}
                whileHover="hover"
              >
                <a 
                  href="mailto:estrosebas@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </motion.li>
              <motion.li
                variants={iconAnimation}
                whileHover="hover"
              >
                <a 
                  href="https://www.linkedin.com/in/diego-sebastian-gonzales-gomez-a9b0a1212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </motion.li>
              <motion.li
                variants={iconAnimation}
                whileHover="hover"
              >
                <a 
                  href="https://www.youtube.com/@estrosebas3765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </motion.li>
              <motion.li
                variants={iconAnimation}
                whileHover="hover"
              >
                <a 
                  href="https://www.twitch.tv/cristian_eloy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitch"
                >
                  <Twitch size={24} />
                </a>
              </motion.li>
            </ul>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Contact Me"
            >
              Let's work together!
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-image-container"
          >
            <div className="hero-image-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Programming"
              className="hero-image"
            />
            <motion.div
              animate={{
                rotate: [0, 5, 0],
                y: [0, -15, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hero-icon hero-icon-1"
            >
              <Code2 size={40} />
            </motion.div>
            <motion.div
              animate={{
                rotate: [0, -5, 0],
                y: [0, 15, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hero-icon hero-icon-2"
            >
              <Laptop2 size={40} />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;