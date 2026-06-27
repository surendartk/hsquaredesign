import "./Process.css";
import {
  FaClipboardList,
  FaDraftingCompass,
  FaHardHat,
  FaKey,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
      number: "01",
      icon: <FaClipboardList />,
      title: "Planning",
      text: "Understanding client requirements and project feasibility.",
    },
    {
      number: "02",
      icon: <FaDraftingCompass />,
      title: "Design",
      text: "Creating detailed architectural and structural plans.",
    },
    {
      number: "03",
      icon: <FaHardHat />,
      title: "Construction",
      text: "Executing the project with quality materials and skilled professionals.",
    },
    {
      number: "04",
      icon: <FaKey />,
      title: "Delivery",
      text: "Final inspection, handover, and long-term client satisfaction.",
    },
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <span className="section-title">OUR PROCESS</span>

        <h2>From Vision to Reality</h2>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={index}>
              <span className="step-number">{step.number}</span>

              <div className="step-icon">{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
