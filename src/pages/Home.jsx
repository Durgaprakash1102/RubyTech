
import { Link } from "react-router-dom";
import "../css/Home.css";

import heroImage from "../images/hero-banner.png";
import aboutImage from "../images/about.png";
import whyImage from "../images/why.png";

import sap1 from "../images/sap1.png";
import sap2 from "../images/sap2.png";
import sap3 from "../images/sap3.png";
import sap4 from "../images/sap4.png";
import sap5 from "../images/sap5.png";
import sap6 from "../images/sap6.png";

function Home() {

  // =====================================================
  // TECHNOLOGY CARDS
  // =====================================================

  const technologyCards = [
    {
      image: sap1,
      icon: "fa-solid fa-chart-line",
      alt: "SAP Consulting",
      title: "SAP Consulting",
    },
    {
      image: sap2,
      icon: "fa-solid fa-rocket",
      alt: "SAP Implementation",
      title: "SAP Implementation",
    },
    {
      image: sap3,
      icon: "fa-solid fa-users",
      alt: "SAP Staffing",
      title: "SAP Staffing",
    },
    {
      image: sap4,
      icon: "fa-solid fa-microchip",
      alt: "SAP Functional & Technical",
      title: "SAP Functional & Technical",
    },
    {
      image: sap5,
      icon: "fa-solid fa-shield-halved",
      alt: "SAP Support & AMS",
      title: "SAP Support & AMS",
    },
    {
      image: sap6,
      icon: "fa-solid fa-arrows-rotate",
      alt: "SAP Integration & Migration",
      title: "SAP Integration & Migration",
    },
  ];


  // =====================================================
  // SERVICES
  // =====================================================

  const services = [
    {
      icon: "fa-solid fa-chart-line",
      title: "SAP Consulting",
      description:
        "Strategic and hands-on SAP expertise to help you assess requirements, optimize business processes, define roadmaps, and make confident technology decisions.",
    },
    {
      icon: "fa-solid fa-rocket",
      title: "SAP Implementation",
      description:
        "End-to-end SAP implementation and rollout support aligned to your business objectives, with experienced consultants supporting planning, configuration, testing, deployment, and stabilization.",
    },
    {
      icon: "fa-solid fa-users",
      title: "SAP Staffing & Resource Augmentation",
      description:
        "Hire experienced SAP consultants to extend your team for short-term projects, long-term engagements, contract roles, or specialized skill requirements.",
    },
    {
      icon: "fa-solid fa-microchip",
      title: "SAP Functional & Technical Consultants",
      description:
        "Access SAP functional, technical, and techno-functional professionals across key modules and technologies to fill critical capability gaps and accelerate delivery.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "SAP Support & AMS",
      description:
        "Ongoing SAP application support, issue resolution, enhancements, performance optimization, and flexible resource coverage to keep your SAP environment running effectively.",
    },
    {
      icon: "fa-solid fa-arrows-rotate",
      title: "SAP Integration, Migration & Upgrades",
      description:
        "Support for SAP integrations, S/4HANA migrations, upgrades, cloud initiatives, data transitions, and modernization programs with the right expertise at every stage.",
    },
  ];


  // =====================================================
  // WHY CHOOSE US
  // =====================================================

  const whyChoose = [
    {
      icon: "fa-solid fa-user-tie",
      title: "Experienced SAP Consultants",
      description:
        "Skilled SAP professionals with practical consulting, implementation, support, and project delivery experience across industries.",
    },
    {
      icon: "fa-solid fa-sliders",
      title: "Flexible Staffing Models",
      description:
        "Choose contract, project-based, resource augmentation, or longer-term consulting support based on your business needs.",
    },
    {
      icon: "fa-solid fa-bullseye",
      title: "Consulting & Implementation Expertise",
      description:
        "Get both advisory and delivery capabilities from a partner that understands SAP programs from strategy through execution and support.",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Fast Resource Deployment",
      description:
        "Scale your SAP team quickly with consultants matched to your required skills, project scope, and engagement timeline.",
    },
    {
      icon: "fa-solid fa-circle-check",
      title: "End-to-End SAP Capabilities",
      description:
        "From consulting and implementation to staffing, migration, integration, optimization, and support, we provide expertise across the SAP lifecycle.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Client-Centric Partnership",
      description:
        "We focus on understanding your goals, team structure, technical requirements, and delivery priorities before recommending the right solution or consultant.",
    },
  ];


  // =====================================================
  // TRUST ITEMS
  // =====================================================

  const trustItems = [
    "Qualified SAP Consultants",
    "Flexible Engagement Models",
    "Consulting & Implementation Expertise",
    "Functional & Technical Coverage",
    "Transparent Communication",
    "Scalable SAP Teams",
    "Cost-Effective Staffing Solutions",
    "Long-Term Partnership",
  ];


  return (
    <div className="home-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="home-hero-background">
          <img
            src={heroImage}
            alt="Ruby Tech SAP Digital Transformation"
          />
        </div>

        <div className="home-hero-overlay"></div>

        <div className="home-content">

          <h1 className="home-title">
            Accelerating Digital Transformation with{" "}
            <br />
            <span>SAP Excellence</span>
          </h1>


          <div className="home-line">
            <span></span>
          </div>


          <p className="home-description">
            Helping businesses succeed with SAP through expert consulting,
            End-to-End SAP Implementation services, and flexible access to
            skilled SAP consultants for project-based, contract, and
            long-term staffing needs.
          </p>


          <div className="home-actions">

            <Link
              to="/contact"
              className="home-primary-btn"
            >

              <span className="button-icon">
                <i className="fa-solid fa-user-tie"></i>
              </span>

              <span className="button-text">
                Talk to an SAP Expert
              </span>

              <span className="button-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </span>

            </Link>


            <Link
              to="/services"
              className="home-secondary-btn"
            >

              <span className="button-icon">
                <i className="fa-solid fa-users"></i>
              </span>

              <span className="button-text">
                Hire SAP Consultants
              </span>

              <span className="button-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </span>

            </Link>

          </div>


          {/* Technology Cards */}

          <div className="home-card-area">

            <div className="home-card-track">

              {technologyCards.map((card, index) => (

                <div
                  className={`home-tech-card card-${index + 1}`}
                  key={index}
                >

                  <div className="tech-card-image">

                    <img
                      src={card.image}
                      alt={card.alt}
                    />

                  </div>


                  <div className="tech-card-overlay"></div>


                  <div className="tech-card-content">

                    <h4 className="tech-card-title">
                      {card.title}
                    </h4>

                  </div>


                  <div className="tech-card-bottom"></div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <section className="home-about-section">

        <div className="home-about-container">


          <div className="home-about-image">

            <div className="home-about-image-frame">

              <img
                src={aboutImage}
                alt="About Ruby Tech"
              />


              <div className="home-about-pattern">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

              </div>

            </div>

          </div>


          <div className="home-about-content">

            <div className="home-about-tag">

              <span></span>

              About Us

            </div>


            <h2>
              Transforming Businesses Through{" "}
              <span>Intelligent SAP Solutions</span>
            </h2>


            <p>
              Ruby Tech is an SAP consulting and staffing firm helping
              organizations execute SAP initiatives, solve complex business
              challenges, and build high-performing SAP teams.
            </p>


            <p>
              Whether you need strategic SAP guidance, end-to-end
              implementation support, specialized functional or technical
              expertise, or additional consultants to strengthen your
              internal team, we provide flexible engagement models tailored
              to your project goals, timeline, and budget.
            </p>


            <Link
              to="/about"
              className="home-about-btn"
            >

              <span>
                Know More
              </span>

              <i className="fa-solid fa-arrow-right"></i>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section className="home-services-section">

        <div className="home-services-container">


          <div className="home-services-header">

            <div className="home-services-tag">

              <span></span>

              Our Core Services

            </div>


            <h2>
              End-to-End <span>SAP Solutions</span>
            </h2>


            <p>
              Comprehensive services designed to meet your business needs
              at every stage
            </p>

          </div>


          <div className="home-services-grid">

            {services.map((service, index) => (

              <div
                key={index}
                className="home-service-card"
              >


                <div className="home-service-icon-wrap">

                  <div className="home-service-icon">

                    <i className={service.icon}></i>

                  </div>


                  <span className="home-service-number">

                    {String(index + 1).padStart(2, "0")}

                  </span>

                </div>


                <div className="home-service-content">

                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.description}
                  </p>


                  <div className="home-service-link">

                    <span>
                      Know More
                    </span>

                    <i className="fa-solid fa-arrow-right"></i>

                  </div>

                </div>


                <div className="home-service-shape"></div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US SECTION
      ===================================================== */}

      <section className="home-why-section">

        <div className="home-why-container">

          <div className="home-why-wrapper">


            <div className="home-why-left">

              <div className="home-why-left-content">


                <div className="home-why-tag">

                  <span className="why-line"></span>

                  Why Choose Us

                </div>


                <h2>

                  SAP Expertise with <br />

                  <span>
                    Flexible Talent Solutions
                  </span>

                </h2>


                <div className="home-why-left-image">

                  <img
                    src={whyImage}
                    alt="Why Choose Ruby Tech"
                  />

                  <div className="home-why-left-overlay"></div>

                </div>

              </div>

            </div>


            <div className="home-why-right">

              <div className="home-why-cards">

                {whyChoose.map((item, index) => (

                  <div
                    key={index}
                    className="home-why-card"
                  >


                    <div className="home-why-card-header">

                      <div className="home-why-card-icon">

                        <i className={item.icon}></i>

                      </div>


                      <h4 className="home-why-card-title">

                        {item.title}

                      </h4>

                    </div>


                    <div className="home-why-card-divider"></div>


                    <div className="home-why-card-body">

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY BUSINESSES TRUST US
          SIMPLE CLEAN DESIGN
      ===================================================== */}

      <section className="home-trust-section">

        <div className="home-trust-container">


          {/* Header */}

          <div className="home-trust-header">

            <div className="home-trust-tag">

              <span className="trust-line"></span>

              Why Businesses Trust Us

            </div>


            <h2>

              Built on <span>Trust</span>, Delivered with{" "}
              <span>Excellence</span>

            </h2>


            <p>
              Reliable SAP expertise and flexible solutions for your business.
            </p>

          </div>


          {/* Trust Cards */}

          <div className="home-trust-grid">

            {trustItems.map((item, index) => (

              <div
                key={index}
                className="home-trust-card"
              >


                {/* Number */}

                <span className="home-trust-card-number">

                  {String(index + 1).padStart(2, "0")}

                </span>


                {/* Icon */}

                <div className="home-trust-card-icon">

                  <i className="fa-solid fa-check"></i>

                </div>


                {/* Text */}

                <div className="home-trust-card-content">

                  <span>
                    {item}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


    </div>
  );
}

export default Home;
