import logoImg from "../assets/images/logo_white.png";
import isoBadge from "../assets/images/2525e88e6e6e01232b97dc2fe69657e362f2a314.png";
import vMarkBg from "../assets/images/vsrp-v-mark.svg";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">
            {/* Large Subtle V Logo Background Watermark */}
            <img src={vMarkBg} alt="" className="footer-background-v" aria-hidden="true" />

            <div className="footer-container">
                {/* LEFT BRANDING AREA */}
                <div className="footer-brand">
                    {/* Logo */}
                    <div className="footer-logo">
                        <a href="#">
                            <img src={logoImg} alt="VSRP Engineered Rubber" className="footer-logo-img" />
                        </a>
                    </div>

                    {/* Description */}
                    <p className="footer-description">
                        For over 20 years, VSRP has delivered<br />
                        engineered rubber solutions built around the<br />
                        unique requirements of Australian businesses.
                    </p>

                    {/* Social Media Icons (Square Dotted Boxes) */}
                    <div className="footer-socials">
                        <a href="#" aria-label="Instagram" className="social-square-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.5" />
                            </svg>
                        </a>

                        <a href="#" aria-label="Facebook" className="social-square-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>

                        <a href="#" aria-label="LinkedIn" className="social-square-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                        </a>

                        <a href="#" aria-label="X" className="social-square-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>

                    {/* ISO Certification Badge */}
                    <div className="footer-iso">
                        <img src={isoBadge} alt="ISO 9001:2015 Accredited" className="iso-badge-img" />
                        <span className="iso-text">ISO9001:2015 Accredited</span>
                    </div>
                </div>

                {/* RIGHT NAVIGATION AREA (2x2 Grid) */}
                <div className="footer-links-area">
                    {/* ROW 1 - COL 1: COMPANY */}
                    <div className="footer-column">
                        <h3>COMPANY</h3>
                        <a href="#about">About</a>
                        <a href="#projects">Case Studies</a>
                        <a href="#insights">Blogs</a>
                        <a href="#contact">Contact</a>
                    </div>

                    {/* ROW 1 - COL 2: INDUSTRIES */}
                    <div className="footer-column">
                        <h3>INDUSTRIES</h3>
                        <a href="#industries">Agriculture & Irrigation</a>
                        <a href="#industries">Plumbing</a>
                        <a href="#industries">Civil Engineering and Construction</a>
                        <a href="#industries">Mining</a>
                        <a href="#industries">Defence</a>
                        <a href="#industries">Architectural Industry</a>
                        <a href="#industries">Road Transport</a>
                    </div>

                    {/* ROW 2 - COL 1: CONTACT */}
                    <div className="footer-column">
                        <h3>CONTACT</h3>
                        <p className="contact-phone">1800 787 777, +61 (2) 8834 9958</p>
                        <p className="contact-email">
                            <a href="mailto:enquiries@vsrp.com.au">enquiries@vsrp.com.au</a>
                        </p>
                    </div>

                    {/* ROW 2 - COL 2: LOCATION */}
                    <div className="footer-column">
                        <h3>LOCATION</h3>
                        <p className="location-address">
                            Unit 3, 10 Banksia Place,<br />
                            South Windsor NSW 2756
                        </p>
                    </div>
                </div>
            </div>

            {/* BOTTOM COPYRIGHT BAR */}
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <span>COPYRIGHT © 2026 VSRP</span>
                </div>

                <div className="footer-bottom-center">
                    <span>SITE BY ACODEZ</span>
                </div>

                <div className="footer-bottom-right">
                    <a href="#privacy">PRIVACY POLICY</a>
                    <span className="divider-line">|</span>
                    <span>ALL RIGHTS RESERVED</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
