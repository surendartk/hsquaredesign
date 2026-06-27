import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "John Anderson",
      role: "Residential Client",
      text: "Exceptional craftsmanship and attention to detail. The project was completed on schedule and exceeded our expectations.",
    },

    {
      name: "Michael Carter",
      role: "Commercial Client",
      text: "Professional team, transparent communication, and outstanding quality from start to finish.",
    },

    {
      name: "Sarah Wilson",
      role: "Villa Owner",
      text: "A reliable construction partner who truly understands luxury design and quality execution.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <span className="section-title">Testimonials</span>

        <h2 className="section-heading">What Our Clients Say</h2>

        <div className="testimonial-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">★★★★★</div>

              <p>{review.text}</p>

              <h4>{review.name}</h4>

              <span>{review.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
