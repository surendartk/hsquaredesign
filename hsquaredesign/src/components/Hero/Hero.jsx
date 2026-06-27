import "./Hero.css";
import heroImage from "../../assets/images/hero/house.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="container hero-content">
        <p className="hero-subtitle">PREMIUM CONSTRUCTION COMPANY</p>

        <h1>
          BUILDING
          <br />
          THE FUTURE
        </h1>

        <p className="hero-text">
          Premium Construction & Infrastructure Solutions
        </p>

        <a href="#projects" className="hero-btn">
          OUR PROJECTS
        </a>
      </div>
    </section>
  );
}

export default Hero;
