import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Code2, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <h2>About Me</h2>
          <div className="about-text">
            <p>
              I'm a passionate software developer and cybersecurity enthusiast, dedicated to creating efficient and secure solutions. 
              My journey in tech has led me to work on various personal projects and startups, always focusing on automation and optimization.
            </p>
            <p>
              When I'm not coding, you can find me playing video games (especially Heavy Rain and Beyond: Two Souls) or enjoying a strong cup of coffee.
            </p>
          </div>
          <motion.div 
            className="about-icons"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="icon-container"
            >
              <Code2 className="icon" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="icon-container"
            >
              <Terminal className="icon" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;