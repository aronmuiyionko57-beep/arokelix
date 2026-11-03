import { SiWhatsapp } from "react-icons/si";
import { WHATSAPP_URL } from "../lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="float-wa"
      aria-label="Chat with AROKELIX on WhatsApp"
    >
      <SiWhatsapp size={26} />
      <span className="float-wa-label">Chat with us</span>
    </a>
  );
}