import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="footer-main">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Image src="/logo.png" alt="AROKELIX" width={180} height={57} style={{ height: "56px", width: "auto", mixBlendMode: "multiply" }} />
            <p className="footer-brand-tagline">Digital Products · Technology · Creative Solutions.</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services/websites-web-applications">Websites</a></li>
              <li><a href="/services/custom-software">Software</a></li>
              <li><a href="/services/e-commerce">E-commerce</a></li>
              <li><a href="/services/branding-creative">Branding</a></li>
              <li><a href="/services/digital-marketing">Digital Marketing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:aronmuiyionko57@gmail.com">aronmuiyionko57@gmail.com</a></li>
              <li><a href="tel:+254706519789">+254 706 519 789</a></li>
              <li>Remote — worldwide</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} AROKELIX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}