import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-title">
          <span className="section-title">CONTACT US</span>

          <h2 className="section-heading">
            Let's Build Something Great Together
          </h2>

          <p className="section-text">
            Whether you're planning a residential, commercial, or industrial
            project, our team is ready to bring your vision to life.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-box">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <p>+91 xxxxxxxxxx</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>info@hsquaredesign.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt />
              <div>
                <h4>Office</h4>
                <p>Chennai, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Phone Number" />

            <textarea
              rows="6"
              placeholder="Tell us about your project"
            ></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
