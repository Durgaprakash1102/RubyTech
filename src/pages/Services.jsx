import { Link } from "react-router-dom";
import "../css/Services.css";
// Import your banner image
import bannerImage from "../images/sap-banner.png"; // Replace with your actual image path

function Services() {
  const services = [
    {
      id: 1,
      title: "SAP Consulting",
      icon: "fa-solid fa-chart-line",
      description: "Strategic and hands-on SAP expertise to help you assess requirements, optimize business processes, define roadmaps, and make confident technology decisions.",
      features: [
        "Business process assessment and optimization",
        "Strategic roadmap definition and planning",
        "Technology evaluation and selection",
        "Change management and adoption strategy"
      ]
    },
    {
      id: 2,
      title: "SAP Implementation",
      icon: "fa-solid fa-rocket",
      description: "End-to-end SAP implementation and rollout support aligned to your business objectives, with experienced consultants supporting planning, configuration, testing, deployment, and stabilization.",
      features: [
        "Project planning and scope definition",
        "System configuration and customization",
        "Testing and quality assurance",
        "Deployment and go-live support"
      ]
    },
    {
      id: 3,
      title: "SAP Staffing & Resource Augmentation",
      icon: "fa-solid fa-users",
      description: "Hire experienced SAP consultants to extend your team for short-term projects, long-term engagements, contract roles, or specialized skill requirements.",
      features: [
        "Short-term project resource support",
        "Long-term team extension services",
        "Contract and permanent role placement",
        "On-demand consultant availability"
      ]
    },
    {
      id: 4,
      title: "SAP Functional & Technical Consultants",
      icon: "fa-solid fa-lightbulb",
      description: "Access SAP functional, technical, and techno-functional professionals across key modules and technologies to fill critical capability gaps and accelerate delivery.",
      features: [
        "Functional module expertise (FI, CO, SD, MM, PP)",
        "Technical development (ABAP, Fiori, UI5)",
        "Techno-functional consulting",
        "Cross-functional integration support"
      ]
    },
    {
      id: 5,
      title: "SAP Support & AMS",
      icon: "fa-solid fa-shield-halved",
      description: "Ongoing SAP application support, issue resolution, enhancements, performance optimization, and flexible resource coverage to keep your SAP environment running effectively.",
      features: [
        "24/7 application support services",
        "Issue resolution and troubleshooting",
        "Performance optimization and tuning",
        "Continuous improvement initiatives"
      ]
    },
    {
      id: 6,
      title: "SAP Integration, Migration & Upgrades",
      icon: "fa-solid fa-arrows-rotate",
      description: "Support for SAP integrations, S/4HANA migrations, upgrades, cloud initiatives, data transitions, and modernization programs with the right expertise at every stage.",
      features: [
        "System integration with third-party systems",
        "S/4HANA migration and conversion",
        "Cloud and hybrid solution deployment",
        "Upgrade strategy and execution"
      ]
    }
  ];

  return (
    <div className="services-page">

      {/* ===== FULL BANNER HERO ===== */}
      <section className="services-banner-full">
        <div className="services-banner-full-bg">
          <img src={bannerImage} alt="SAP Services" className="services-banner-full-img" />
          <div className="services-banner-full-overlay"></div>
        </div>
        <div className="services-banner-full-container">
          <div className="banner-full-content">
            <div className="banner-full-tag">
              <i className="fa-solid fa-bolt"></i>
              <span>Our Services</span>
            </div>
            <h1>
              SAP Solutions That <span>Drive Real Results</span>
            </h1>
            <p>
              End-to-End SAP expertise from consulting and implementation 
              to staffing, support, and modernization.
            </p>
            <div className="banner-full-actions">
              <Link to="/contact" className="banner-full-btn-primary">
                <span>Talk to an Expert</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/about" className="banner-full-btn-secondary">
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES CARDS ===== */}
      <section className="services-cards-section">
        <div className="services-cards-header">
          <span className="cards-badge">
            <i className="fa-solid fa-star"></i>
            What We Offer
          </span>
          <h2>Comprehensive <span>SAP Services</span></h2>
          <p>End-to-end solutions designed for every stage of your SAP journey.</p>
        </div>

        <div className="services-cards-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card-hover-active ${index % 2 === 0 ? 'card-even' : 'card-odd'}`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="service-card-hover-active-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-card-hover-active-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="service-card-hover-active-feature">
                    <i className="fa-solid fa-check"></i>
                    {feature}
                  </span>
                ))}
              </div>
              <Link to="/contact" className="service-card-hover-active-btn">
                <span>Know More</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="services-cta-section">
        <div className="services-cta-bg">
          <div className="cta-shape c1"></div>
          <div className="cta-shape c2"></div>
          <div className="cta-shape c3"></div>
        </div>
        <div className="services-cta-container">
          <span className="cta-badge">
            <i className="fa-solid fa-handshake"></i>
            Let's Talk
          </span>
          <h2>
            Ready to transform your <span>SAP</span> journey?
          </h2>
          <p>
            Get in touch with our SAP experts and let's discuss how we can 
            help your business thrive.
          </p>
          <Link to="/contact" className="cta-btn">
            <span>Contact Us Today</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Services;