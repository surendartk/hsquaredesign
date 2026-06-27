import "./Services.css";
import { FaHome, FaBuilding, FaTools, FaClipboardList } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaHome />,
      title: "Residential Construction",
      text: "Elegant homes built with premium materials and exceptional craftsmanship.",
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Buildings",
      text: "Modern commercial spaces designed for durability and functionality.",
    },
    {
      icon: <FaTools />,
      title: "Interior Renovation",
      text: "Transforming interiors with contemporary designs and premium finishes.",
    },
    {
      icon: <FaClipboardList />,
      title: "Project Management",
      text: "End-to-end project planning, execution, and timely delivery.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <span className="section-title">OUR SERVICES</span>

        <h2>Comprehensive Construction Solutions</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
