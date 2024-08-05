import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={navBackground ? 'navbar scrolled' : 'navbar'}>
      <h1>My Navbar</h1>
    </nav>
  );
};

export default Navbar;