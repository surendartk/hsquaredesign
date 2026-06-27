import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappFloat.css";

function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/918015871882?text=Hello%20H%C2%B2%20Design,%20I'm%20interested%20in%20your%20construction%20services."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappFloat;
