import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  const services = [
    "SAP Consulting",
    "SAP Implementation",
    "SAP Staffing & Resource Augmentation",
    "SAP Functional & Technical Consultants",
    "SAP Support & AMS",
    "SAP Integration, Migration & Upgrades"
  ];

  return (
    <footer className="ruby-footer">

      {/* ===== TOP SECTION - RED ===== */}
      <div className="footer-top">
        <div className="footer-top-inner">
          
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-brand-label">RUBY TECH LLC</span>
            <h2>
              Technology that
              <span>moves business forward.</span>
            </h2>
            <p>
              Strategic SAP expertise and technology solutions
              to drive your business forward.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <span className="footer-links-label">QUICK LINKS</span>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Services */}
          <div className="footer-services">
            <span className="footer-services-label">SERVICES</span>
            {services.slice(0, 5).map((service, index) => (
              <Link key={index} to="/services" className="footer-service-link">
                {service}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <span className="footer-contact-label">CONTACT</span>
            <a href="mailto:admin@rubytechusa.com">admin@rubytechusa.com</a>
            <a href="tel:774-994-5683">774-994-5683</a>
            <address>
           4322 Annandale Ln,<br /> Rosharon, <br /> TX 77583
            </address>
          </div>

        </div>
      </div>

      {/* ===== MIDDLE SECTION - LIGHT RED ===== */}
      <div className="footer-middle">
        <div className="footer-middle-inner">
          
          {/* Left Side - Button with Animated Icon */}
          <div className="footer-middle-left">
  <a href="tel:+17749945683" className="footer-middle-btn">
    <span className="footer-btn-icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 1 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.5 2v4M18.5 2v4M10.5 2v4" opacity="0.5" />
      </svg>
    </span>

    <span>Let's Talk</span>

    <span className="footer-middle-arrow">↗</span>
  </a>
</div>

          {/* Right Side - Content Second */}
          <div className="footer-middle-right">
            <span className="footer-middle-tag">✦ LET'S TALK</span>
            <h3>
              Ready to transform your <span>SAP</span> journey?
            </h3>
            <p>
              Get expert guidance and build technology that drives real business growth.
            </p>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM - RED (Copyright Third) ===== */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© 2026 Ruby Tech LLC. All rights reserved.</span>
          <span className="footer-bottom-tag">Built with purpose.</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;