import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "AROKELIX Lab | Experiments & Emerging Technology",
  description: "New technology, AI experiments and internal tools AROKELIX is building and testing.",
};

export default function Lab() {
  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="wrap">
          <div className="hero-kicker">AROKELIX Lab</div>
          <h1 style={{ maxWidth: "650px" }}>Where we experiment before we ship.</h1>
          <p className="lede">
            A space for the new technology, AI experiments and internal tools
            we&apos;re building outside of client work.
          </p>
        </div>
      </section>

      <section className="banner-wrap">
        <div className="wrap">
          <div className="photo-banner">
            <Image
              src="/pages/lab.jpg"
              alt=""
              fill
              priority
              sizes="(max-width:1180px) 100vw, 1124px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: "560px" }}>
          <p style={{ fontSize: "17px", color: "var(--text-2)" }}>
            New experiments are added here as they&apos;re ready to show.
            Curious what we&apos;re working on right now? Reach out — we&apos;d
            love to tell you about it.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <a href="/contact" className="btn btn-primary">Get in touch</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}