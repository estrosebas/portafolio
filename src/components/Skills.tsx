import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Container } from 'react-bootstrap';
import './Skills.css';

// Define skill type for TypeScript
type Skill = {
  name: string;
  icon: string;
};

const Skills = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Python', icon: 'python' },
    { name: 'Java', icon: 'java' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Docker', icon: 'docker' },
    { name: 'MongoDB', icon: 'mongodb' }
  ];

  // Animation variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Animation variants for each skill card
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="skills" aria-label="Technical Skills">
      <Container fluid className="p-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
          className="skills-content"
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
          >
            {skills.map((skill) => {
              // Handle special cases for icon names
              const iconPath = skill.icon === 'github' || skill.icon === 'git' 
                ? `${skill.icon}/${skill.icon}-original` 
                : `${skill.icon}/${skill.icon}-original`;
                
              return (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover="hover"
                  aria-label={skill.name}
                >
                  <div className="icon-wrapper">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}.svg`}
                      className="skill-icon"
                      alt={`${skill.name} icon`}
                      loading="lazy"
                      width="64"
                      height="64"
                    />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
};

export default Skills;