import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/Careers.css";

import careerBanner from "../images/career-banner.png";
import careerSideImage from "../images/career-side-image.png";

function Career() {
  const formRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ==========================================
  // EMAILJS CONFIGURATION
  // ==========================================

  const SERVICE_ID = "service_z1iitvn";
  const TEMPLATE_ID = "template_ub1ajl2";
  const PUBLIC_KEY = "HV_xjwUqO0du0sVeK";

  // ==========================================
  // HANDLE SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      console.log(
        "EmailJS Success:",
        response.status,
        response.text
      );

      setSubmitStatus("success");

      // Reset form
      formRef.current.reset();

      // Scroll to success message
      setTimeout(() => {
        const successElement = document.querySelector(
          ".career-form-status.success"
        );

        if (successElement) {
          successElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);

    } catch (error) {
      console.error("============================");
      console.error("EMAILJS CAREER ERROR");
      console.error("============================");
      console.error("Error:", error);
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);

      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 7000);

    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // BENEFITS
  // ==========================================

  const benefits = [
    {
      title: "Growth & Learning",
      icon: "fa-solid fa-graduation-cap",
      description:
        "Continuous learning opportunities, certifications, and career development programs.",
    },
    {
      title: "Collaborative Culture",
      icon: "fa-solid fa-people-group",
      description:
        "Work with experienced professionals in a supportive and collaborative environment.",
    },
    {
      title: "Innovative Projects",
      icon: "fa-solid fa-rocket",
      description:
        "Engage in cutting-edge enterprise solutions, cloud technologies, and digital transformation.",
    },
    {
      title: "Work-Life Balance",
      icon: "fa-solid fa-scale-balanced",
      description:
        "Flexible work arrangements that respect your time and personal commitments.",
    },
  ];

  return (
    <div className="career-page">

      {/* ==========================================
          HERO BANNER
      ========================================== */}

      <section className="career-hero">

        <div className="career-hero-bg">

          <img
            src={careerBanner}
            alt="Careers at Ruby Tech"
            className="career-hero-img"
          />

          <div className="career-hero-overlay"></div>

        </div>

        <div className="career-hero-container">

          <div className="career-hero-content">

            <div className="career-hero-tag">

              <i className="fa-solid fa-briefcase"></i>

              <span>Careers</span>

            </div>

            <h1>
              Join Our{" "}
              <span className="highlight-team">
                Team
              </span>
            </h1>

            <p className="career-hero-desc">
              At Ruby Tech LLC, we help organizations
              transform their businesses through enterprise
              solutions, cloud technologies, and digital
              transformation.
            </p>

          </div>

        </div>

      </section>


      {/* ==========================================
          WHY JOIN US
      ========================================== */}

      <section className="career-why">

        <div className="career-why-container">

          <div className="career-why-header">

            <span className="career-section-tag">

              <i className="fa-solid fa-star"></i>

              Why Ruby Tech

            </span>

            <h2>
              Why Work{" "}
              <span>With Us?</span>
            </h2>

            <p>
              We are always looking for talented and driven
              professionals who are ready to take on challenges,
              grow with purpose, and contribute to meaningful
              transformation initiatives.
            </p>

          </div>


          <div className="career-why-grid">

            {benefits.map((benefit, index) => (

              <div
                key={index}
                className="career-benefit-card"
                style={{
                  animationDelay: `${index * 0.06}s`,
                }}
              >

                <div className="career-benefit-icon">

                  <i className={benefit.icon}></i>

                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==========================================
          CAREER APPLICATION SECTION
      ========================================== */}

      <section className="career-form-section">

        <div className="career-form-wrapper">

          {/* ==========================================
              LEFT - APPLICATION FORM
          ========================================== */}

          <div className="career-form-side">

            <div className="career-form-header">

              <span className="career-section-tag">

                <i className="fa-solid fa-pen-to-square"></i>

                Apply Now

              </span>

              <h2>
                Join Our{" "}
                <span>Team</span>
              </h2>

              <p>
                Tell us about yourself, your experience,
                and the type of opportunity you are looking
                for.
              </p>

              <p className="career-form-required">

                <span className="required-star">
                  *
                </span>

                {" "}Required fields

              </p>

            </div>


            {/* ==========================================
                APPLICATION FORM
            ========================================== */}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="career-application-form"
            >

              {/* ==========================================
                  FULL NAME + EMAIL
              ========================================== */}

              <div className="career-form-row">

                <div className="career-form-group">

                  <label htmlFor="fullName">

                    Full Name{" "}

                    <span className="required-star">
                      *
                    </span>

                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />

                </div>


                <div className="career-form-group">

                  <label htmlFor="email">

                    Email Address{" "}

                    <span className="required-star">
                      *
                    </span>

                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />

                </div>

              </div>


              {/* ==========================================
                  PHONE + CURRENT POSITION
              ========================================== */}

              <div className="career-form-row">

                {/* PHONE */}

                <div className="career-form-group">

                  <label htmlFor="phone">

                    Phone Number{" "}

                    <span className="required-star">
                      *
                    </span>

                  </label>

                  <div className="career-phone-wrapper">

                    <select
                      className="career-country-code"
                      name="countryCode"
                      defaultValue="+1"
                      required
                    >

                      <option value="+1">
                        USA (+1)
                      </option>

                      <option value="+91">
                        India (+91)
                      </option>

                      <option value="+44">
                        UK (+44)
                      </option>

                      <option value="+61">
                        Australia (+61)
                      </option>

                      <option value="+971">
                        UAE (+971)
                      </option>

                      <option value="+65">
                        Singapore (+65)
                      </option>

                      <option value="+49">
                        Germany (+49)
                      </option>

                      <option value="+33">
                        France (+33)
                      </option>

                      <option value="+81">
                        Japan (+81)
                      </option>

                      <option value="+86">
                        China (+86)
                      </option>

                    </select>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                      minLength="7"
                    />

                  </div>

                </div>


                {/* CURRENT POSITION */}

                <div className="career-form-group">

                  <label htmlFor="currentPosition">

                    Current Position / Job Title{" "}

                    <span className="required-star">
                      *
                    </span>

                  </label>

                  <input
                    type="text"
                    id="currentPosition"
                    name="currentPosition"
                    placeholder="e.g. SAP Consultant"
                    required
                  />

                </div>

              </div>


              {/* ==========================================
                  COMPANY + EXPERIENCE
              ========================================== */}

              <div className="career-form-row">

                <div className="career-form-group">

                  <label htmlFor="currentCompany">

                    Current Company / Organization{" "}

                    <span className="required-star">
                      *
                    </span>

                  </label>

                  <input
                    type="text"
                    id="currentCompany"
                    name="currentCompany"
                    placeholder="Enter your current company"
                    required
                  />

                </div>


                <div className="career-form-group">

                  <label htmlFor="experience">

                    Years of Experience

                  </label>

                  <select
                    id="experience"
                    name="experience"
                    defaultValue=""
                  >

                    <option value="">
                      Select experience
                    </option>

                    <option value="0-1">
                      0 - 1 years
                    </option>

                    <option value="1-3">
                      1 - 3 years
                    </option>

                    <option value="3-5">
                      3 - 5 years
                    </option>

                    <option value="5-8">
                      5 - 8 years
                    </option>

                    <option value="8-12">
                      8 - 12 years
                    </option>

                    <option value="12+">
                      12+ years
                    </option>

                  </select>

                </div>

              </div>


              {/* ==========================================
                  EXPERTISE + PREFERRED ROLE
              ========================================== */}

              <div className="career-form-row">

                <div className="career-form-group">

                  <label htmlFor="expertise">

                    Area of Expertise{" "}

                    <span className="required-star">
                      *
                    </span>

                  </label>

                  <input
                    type="text"
                    id="expertise"
                    name="expertise"
                    placeholder="e.g. SAP FI, MM, SD, ABAP"
                    required
                  />

                </div>


                <div className="career-form-group">

                  <label htmlFor="preferredRole">

                    Preferred Role{" "}

                    <span className="required-star">
                      *
                    </span>

                  </label>

                  <input
                    type="text"
                    id="preferredRole"
                    name="preferredRole"
                    placeholder="e.g. SAP Consultant"
                    required
                  />

                </div>

              </div>


              {/* ==========================================
                  WORK PREFERENCE + AVAILABILITY
              ========================================== */}

              <div className="career-form-row">

                <div className="career-form-group">

                  <label htmlFor="workPreference">
                    Work Preference
                  </label>

                  <select
                    id="workPreference"
                    name="workPreference"
                    defaultValue=""
                  >

                    <option value="">
                      Select preference
                    </option>

                    <option value="Remote">
                      Remote
                    </option>

                    <option value="On-site">
                      On-site
                    </option>

                    <option value="Hybrid">
                      Hybrid
                    </option>

                    <option value="Flexible">
                      Flexible
                    </option>

                  </select>

                </div>


                <div className="career-form-group">

                  <label htmlFor="availability">

                    Availability / Notice Period

                  </label>

                  <select
                    id="availability"
                    name="availability"
                    defaultValue=""
                  >

                    <option value="">
                      Select availability
                    </option>

                    <option value="Immediate">
                      Immediate
                    </option>

                    <option value="1 Week">
                      1 week
                    </option>

                    <option value="2 Weeks">
                      2 weeks
                    </option>

                    <option value="1 Month">
                      1 month
                    </option>

                    <option value="2 Months">
                      2 months
                    </option>

                    <option value="3 Months">
                      3 months
                    </option>

                  </select>

                </div>

              </div>


              {/* ==========================================
                  ABOUT YOURSELF
              ========================================== */}

              <div className="career-form-row">

                <div className="career-form-group career-form-group-full">

                  <label htmlFor="aboutYourself">

                    Tell Us About Yourself{" "}

                    <span className="required-star">
                      *
                    </span>

                  </label>

                  <textarea
                    id="aboutYourself"
                    name="aboutYourself"
                    rows="5"
                    placeholder="Briefly describe your experience, skills, career interests, and what type of opportunity you are looking for."
                    required
                  ></textarea>

                </div>

              </div>


              {/* ==========================================
                  HR MESSAGE
              ========================================== */}

              <div className="career-hr-note">

                <div className="career-hr-note-icon">

                  <i className="fa-solid fa-user-check"></i>

                </div>

                <div className="career-hr-note-content">

                  <h4>
                    What Happens Next?
                  </h4>

                  <p>
                    If your profile matches our current
                    requirements, our HR team will contact
                    you with further details regarding the
                    next steps.
                  </p>

                </div>

              </div>


              {/* ==========================================
                  SUCCESS MESSAGE
              ========================================== */}

              {submitStatus === "success" && (

                <div className="career-form-status success">

                  <i className="fa-solid fa-circle-check"></i>

                  <span>
                    Thank you for your interest in Ruby Tech.
                    Your information has been submitted
                    successfully. If your profile matches our
                    current requirements, our HR team will
                    contact you with further details.
                  </span>

                </div>

              )}


              {/* ==========================================
                  ERROR MESSAGE
              ========================================== */}

              {submitStatus === "error" && (

                <div className="career-form-status error">

                  <i className="fa-solid fa-circle-exclamation"></i>

                  <span>
                    Something went wrong while submitting
                    your application. Please try again.
                  </span>

                </div>

              )}


              {/* ==========================================
                  SUBMIT BUTTON
              ========================================== */}

              <div className="career-form-row">

                <div className="career-form-group career-form-group-full">

                  <button
                    type="submit"
                    className="career-submit-btn"
                    disabled={isSubmitting}
                  >

                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>

                        Submitting...

                      </>
                    ) : (
                      <>
                        <span>
                          Submit Application
                        </span>

                        <i className="fa-solid fa-arrow-right"></i>
                      </>
                    )}

                  </button>

                </div>

              </div>

            </form>

          </div>


          {/* ==========================================
              RIGHT SIDE IMAGE
          ========================================== */}

          <div className="career-image-side">

            <div className="career-image-container">

              <img
                src={careerSideImage}
                alt="Ruby Tech Careers"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          CTA SECTION
      ========================================== */}

      <section className="career-cta-section">

        <div className="career-cta-bg">

          <div className="cta-shape c1"></div>

          <div className="cta-shape c2"></div>

          <div className="cta-shape c3"></div>

        </div>


        <div className="career-cta-container">

          <span className="cta-badge">

            <i className="fa-solid fa-envelope"></i>

            Get in Touch

          </span>

          <h2>
            Have questions about{" "}
            <span>joining</span> our team?
          </h2>

          <p>
            Reach out to our HR team and we'll be happy
            to discuss opportunities, company culture,
            and how you can grow with Ruby Tech.
          </p>

          <Link
            to="/contact"
            className="cta-btn"
          >

            <span>
              Contact HR
            </span>

            <i className="fa-solid fa-arrow-right"></i>

          </Link>

        </div>

      </section>

    </div>
  );
}

export default Career;