import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

// Custom hook to detect mobile screens
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobile) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('.navbar')
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen, isMobile]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const NavLink = ({ to, number, children }: { to: string; number: string; children: React.ReactNode }) => (
    <Link 
      to={to} 
      smooth={true} 
      duration={500} 
      spy={true} 
      offset={-80} 
      className="navbar-link"
      onClick={closeMobileMenu}
    >
      <span className="navbar-link-number">{number}</span>
      {children}
    </Link>
  );

  return (
    <>
      <nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
      >
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            Diego Sebastián Gonzales Gomez
          </a>
          
          <div className="navbar-links">
            <NavLink to="about" number="01.">About</NavLink>
            <NavLink to="skills" number="02.">Skills</NavLink>
            <NavLink to="projects" number="03.">Projects</NavLink>
            <NavLink to="contact" number="04.">Contact</NavLink>
          </div>
          
          {isMobile && (
            <button 
              className="navbar-mobile-menu" 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay and Menu - Only render on mobile */}
      {isMobile && (
        <>
          <div 
            className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          <div 
            ref={mobileMenuRef}
            className={`navbar-mobile-links ${isMobileMenuOpen ? 'active' : ''}`}
          >
            <ul>
              <li>
                <NavLink to="about" number="01.">About</NavLink>
              </li>
              <li>
                <NavLink to="skills" number="02.">Skills</NavLink>
              </li>
              <li>
                <NavLink to="projects" number="03.">Projects</NavLink>
              </li>
              <li>
                <NavLink to="contact" number="04.">Contact</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;