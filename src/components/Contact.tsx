import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import './Contact.css';
import { Youtube, Twitch, MessageCircle } from 'lucide-react';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="contact">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="contact-container"
        >
          <h2>Get In Touch</h2>
          <p>
            Whether you have a question about my projects, want to collaborate, or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <motion.div 
            className="contact-content"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="mailto:estrosebas@gmail.com"
              className="contact-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello
            </motion.a>
            <div className="contact-socials">
              <motion.a 
                href="https://www.youtube.com/@estrosebas3765" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="YouTube"
              >
                <Youtube size={28} />
              </motion.a>
              <motion.a 
                href="https://www.twitch.tv/cristian_eloy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitch"
              >
                <Twitch size={28} />
              </motion.a>
              <motion.a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Discord"
              >
                <MessageCircle size={28} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;