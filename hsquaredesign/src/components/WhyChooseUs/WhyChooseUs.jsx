import "./WhyChooseUs.css";

function WhyChooseUs() {
  const stats = [
    {
      number: "15+",
      title: "Years Experience",
    },
    {
      number: "250+",
      title: "Projects Completed",
    },
    {
      number: "100%",
      title: "Client Satisfaction",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="why" id="why">
      <div className="container">
        <span className="section-title light">WHY CHOOSE US</span>

        <h2>Building Trust Through Quality & Commitment</h2>

        <div className="stats">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
