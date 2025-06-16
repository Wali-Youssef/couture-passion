import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo-couture.png';
import { FiFacebook, FiCalendar } from 'react-icons/fi';
import facebookIcon from '../assets/icons8-facebook-nouveau-500.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-top">
                <div className="header-side header-left">
                    <a
                        href="https://www.facebook.com/p/Couture-Passion-100054543605835/?locale=fr_FR"
                        target="_blank"
                        rel="noreferrer"
                    >
                      <img src={facebookIcon} alt="Facebook" className="icon" />

                    </a>
                </div>

                <div className="header-center">
                    <Link to="/">
                        <img src={logo} alt="Logo Couture Passion" className="logo-image" />
                    </Link>
                </div>

                <div className="header-side header-right">
                    <Link to="/calendrier">
                        <FiCalendar className="icon" />
                    </Link>
                </div>
            </div>

            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/galerie" onClick={() => setMenuOpen(false)}>Galerie</Link></li>
                    <li><Link to="/retouches" onClick={() => setMenuOpen(false)}>Retouches</Link></li>
                    <li><Link to="/apropos" onClick={() => setMenuOpen(false)}>À propos</Link></li>
                </ul>
                <div className="close" onClick={() => setMenuOpen(false)}>✖</div>
            </nav>

            <div className="burger" onClick={() => setMenuOpen(true)}>☰</div>
        </header>
    );
}

export default Header;
