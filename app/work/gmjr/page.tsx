import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "GMJR Critical Minerals Mozambique — Case Study | AROKELIX",
  description: "How AROKELIX designed and built a corporate website for a Mozambican critical-minerals exploration and development company.",
};

export default function GmjrCaseStudy() {
  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="wrap">
          <div className="hero-kicker">Case Study — Mining</div>
          <h1 style={{ maxWidth: "650px" }}>GMJR Critical Minerals Mozambique</h1>
          <p className="lede">
            A complete corporate website built from the ground up for a Mozambican
            company focused on the exploration, development and commercialization
            of critical mineral assets across Mozambique and Southern Africa.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Image
            src="/gmjr-screenshot.png"
            alt="GMJR Critical Minerals Mozambique website screenshot"
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto", borderRadius: "8px", border: "1px solid var(--line)" }}
          />
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>What we built</h3>
            <p className="p-desc">
              AROKELIX designed and developed the entire website — from information
              architecture through to the final build. The site presents the
              company&apos;s mission, mineral portfolio and partnership approach
              in a way that meets the expectations of investors and industry
              partners evaluating the company for the first time.
            </p>
          </div>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>Design approach</h3>
            <p className="p-desc">
              A navy-and-gold visual identity, built for credibility in a
              serious, capital-intensive industry — clean typography, clear
              navigation between company information, mineral assets and
              services, and content structured around how the industry itself
              evaluates a company.
            </p>
          </div>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>Result</h3>
            <p className="p-desc">
              A live, professional web presence the company can point investors
              and partners to with confidence.
            </p>
          </div>
          <div style={{ marginTop: "32px" }}>
            <a href="https://gmjrminerals.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit the live site →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}