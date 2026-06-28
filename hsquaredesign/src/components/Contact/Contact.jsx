import { useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🏗️ *New Project Enquiry*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📞 Phone: ${formData.phone}

📝 Project Details:
${formData.project}
`;

    const whatsappUrl = `https://wa.me/918015871882?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
    });
  };

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
                <p>+91 8015871882</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>salmanomar.nmh@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt />
              <div>
                <h4>Office</h4>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="project"
              placeholder="Tell us about your project"
              value={formData.project}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">SEND ON WHATSAPP</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
