import "./About.css";
import aboutImage from "../../assets/images/about/house.jpg";
import { FaCheck } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Construction" />
        </div>

        <div className="about-content">
          <span className="section-title">ABOUT US</span>

          <h2>
            Building Excellence
            <br />
            Since 2015
          </h2>

          <p>
            H² Design delivers premium residential, commercial, and industrial
            construction services with an unwavering commitment to quality,
            safety, and innovation.
          </p>

          <div className="about-list">
            <div>
              <FaCheck />
              <span>Premium Quality</span>
            </div>

            <div>
              <FaCheck />
              <span>Certified Professionals</span>
            </div>

            <div>
              <FaCheck />
              <span>On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
