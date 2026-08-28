import { Link } from "react-router-dom";
import "../css/About.css";
// Import your banner image
import aboutBanner from "../images/about-banner.png"; // Replace with your actual image path
import aboutImage from "../images/rubylogo1.jpg"; // Replace with your actual image path

function About() {
  const values = [
    {
      title: "Innovation",
      icon: "fa-solid fa-lightbulb",
      description: "Embracing new ideas and technologies to deliver cutting-edge SAP solutions."
    },
    {
      title: "Integrity",
      icon: "fa-solid fa-shield",
      description: "Operating with honesty, transparency, and ethical practices in everything we do."
    },
    {
      title: "Excellence",
      icon: "fa-solid fa-medal",
      description: "Delivering high-quality SAP services that exceed client expectations."
    },
    {
      title: "Collaboration",
      icon: "fa-solid fa-handshake",
      description: "Working together with clients as trusted partners to achieve shared success."
    },
    {
      title: "Customer Success",
      icon: "fa-solid fa-star",
      description: "Putting our clients first and ensuring their SAP initiatives succeed."
    },
    {
      title: "Continuous Learning",
      icon: "fa-solid fa-book-open",
      description: "Staying ahead of the curve with ongoing learning and SAP expertise."
    }
  ];

  return (
    <div className="about-page">

      {/* ===== HERO BANNER ===== */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src={aboutBanner} alt="About Ruby Tech" className="about-hero-img" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="about-hero-container">
          <div className="about-hero-content">
            <div className="about-hero-tag">
              <i className="fa-solid fa-info-circle"></i>
              <span>About Us</span>
            </div>
            <h1>
              About <span>Ruby Tech</span> LLC
            </h1>
            <p>
              SAP consulting, implementation and staffing company helping businesses 
              deliver SAP initiatives and access the specialized talent they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="about-who">
        <div className="about-who-container">
          <div className="about-who-content">
            <span className="about-section-tag">✦ Who We Are</span>
            <h2>
              SAP Expertise That <span>Drives Your Success</span>
            </h2>
            <p>
              Ruby Tech is an SAP consulting, implementation and staffing company helping 
              businesses deliver SAP initiatives and access the specialized talent they need 
              to succeed.
            </p>
            <p>
              We combine SAP consulting expertise with flexible staffing solutions, giving 
              clients the option to engage us for advisory services, project delivery, or 
              individual SAP consultants who can work as an extension of their internal teams.
            </p>
            <p>
              Our focus is simple: provide the right SAP expertise at the right time. From 
              implementation and transformation projects to resource augmentation and ongoing 
              support, we help organizations move faster, reduce delivery risk, and build 
              stronger SAP capabilities.
            </p>
          </div>
          <div className="about-who-image-wrapper">
            <div className="about-who-image-frame">
              <div className="about-who-image">
                <img src={aboutImage} alt="Ruby Tech Team" />
              </div>
              <div className="about-image-overlay">
                <span className="about-image-text">✦ Ruby Tech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION - UNIQUE DESIGN ===== */}
      <section className="about-vm-unique">
        <div className="about-vm-unique-container">
          <div className="about-vm-unique-header">
            <span className="about-section-tag">✦ Our Purpose</span>
            <h2>Vision &amp; <span>Mission</span></h2>
            <p>Guiding our journey to deliver exceptional SAP solutions.</p>
          </div>

          <div className="about-vm-unique-grid">
            {/* Vision Card */}
            <div className="about-vm-unique-card vision-card">
              <div className="about-vm-unique-icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <div className="about-vm-unique-content">
                <span className="about-vm-unique-label">✦ Vision</span>
                <h3>To become a trusted global SAP consulting and talent partner</h3>
                <p>
                  Helping organizations achieve better business outcomes through expert 
                  SAP services and high-quality professionals.
                </p>
                <div className="about-vm-unique-marker"></div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="about-vm-unique-card mission-card">
              <div className="about-vm-unique-icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <div className="about-vm-unique-content">
                <span className="about-vm-unique-label">✦ Mission</span>
                <h3>To help organizations successfully deliver SAP programs</h3>
                <p>
                  By combining practical consulting, reliable implementation services, and 
                  access to skilled SAP consultants through flexible engagement models.
                </p>
                <div className="about-vm-unique-marker"></div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="about-vm-unique-bg">
            <div className="about-vm-unique-shape s1"></div>
            <div className="about-vm-unique-shape s2"></div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="about-values">
        <div className="about-values-header">
          <span className="about-section-tag">✦ Our Values</span>
          <h2>What We <span>Stand For</span></h2>
          <p>The core principles that guide everything we do.</p>
        </div>

        <div className="about-values-grid">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="about-value-card"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="about-value-icon">
                <i className={value.icon}></i>
              </div>
              <div className="about-value-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;