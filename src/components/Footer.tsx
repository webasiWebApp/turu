// src/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div>
          <div className="footer__brand-name">Turu</div>
          <p className="footer__tagline">
            Building bridges between Sri Lanka and Japan — for students, workers, and entrepreneurs.
          </p>
        </div>
        <div>
          <div className="footer__col-title">Company</div>
          <ul className="footer__links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#divisions">Programs</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="footer__col-title">Services</div>
          <ul className="footer__links">
            <li><a href="#divisions">Language Academy</a></li>
            <li><a href="#divisions">Market Entry</a></li>
            <li><a href="#divisions">Trade Facilitation</a></li>
            <li><a href="#divisions">Workforce Bridge</a></li>
          </ul>
        </div>
        <div>
          <div className="footer__col-title">Connect</div>
          <ul className="footer__links">
            <li><a href="mailto:hello@turu.lk">hello@turu.lk</a></li>
            <li><a href="tel:+94112345678">+94 11 234 5678</a></li>
            <li><a href="#">Colombo, Sri Lanka</a></li>
            <li><a href="#">Tokyo, Japan</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copy">© {year} Turu. All rights reserved.</span>
        <div className="footer__socials">
          {/* Facebook */}
          <a href="#" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M8.5 2.3h1.5V0H8.2C6.5 0 5.5 1.1 5.5 2.8V4H4v2.3h1.5V14H8V6.3h1.8L10.2 4H8V3c0-.5.2-.7.5-.7z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="1" y="1" width="12" height="12" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="7" cy="7" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="10.5" cy="3.5" r="0.8" fill="currentColor"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="1" y="1" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M3.5 5.5V10.5M3.5 3.5V3.6M6 5.5V10.5M6 7C6 6 6.8 5.5 7.5 5.5C8.8 5.5 9.5 6 9.5 7.5V10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
