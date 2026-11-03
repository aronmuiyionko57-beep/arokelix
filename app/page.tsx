"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Globe, Code2, ArrowRight, ChevronUp, ShieldCheck, Lightbulb, TrendingUp, Users } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiJavascript, SiHtml5,
  SiNodedotjs, SiPython,
  SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiGithub, SiDocker,
} from "react-icons/si";
import { services } from "./services/data";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
}

function Counter({ end, suffix = "", duration = 1200 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(end);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setCount(0);
        const startTime = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.round(progress * end));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="hero-photo-bg">
          <Image src="/hero-photo.jpg" alt="AROKELIX technology professional at work" fill priority style={{ objectFit: "cover", objectPosition: "85% 30%" }} />
        </div>
        <div className="wrap hero-content">
          <div className="hero-eyebrow">Welcome to AROKELIX</div>
          <h1 className="hero-photo-h1">
            Technology Solutions for a <span className="accent">Bigger Tomorrow</span>
          </h1>
          <p className="hero-photo-lede">
            We design and build modern websites, powerful brand identities and smart
            digital systems that help businesses grow — locally and globally.
          </p>
          <div className="hero-photo-actions">
            <a href="/services" className="btn btn-gold">Our Services <ArrowRight size={16} /></a>
            <a href="/work" className="btn btn-outline-light">View Our Work <ArrowRight size={16} /></a>
          </div>
          <div className="hero-proof-row">
            <div className="hero-proof-item">
              <div className="hero-proof-icon"><Globe size={18} /></div>
              <div><b>Global Reach</b><span>Local Roots</span></div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-icon"><Users size={18} /></div>
              <div><b>Real Projects</b><span>Delivered</span></div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-icon"><Code2 size={18} /></div>
              <div><b>Direct Access</b><span>Work With the Builder</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <Reveal>
          <div className="wrap stats-row">
            <div className="stat-item">
              <div className="stat-num"><Counter end={55} suffix="+" /></div>
              <div className="stat-label">Projects delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-num"><Counter end={18} suffix="+" /></div>
              <div className="stat-label">Industries served</div>
            </div>
            <div className="stat-item">
              <div className="stat-num"><Counter end={100} suffix="%" /></div>
              <div className="stat-label">Projects on time</div>
            </div>
            <div className="stat-item">
              <div className="stat-num"><Counter end={24} suffix="h" /></div>
              <div className="stat-label">Average response time</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="services" className="bg-alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <h2>What we build</h2>
              <p>Software and creative work, delivered as one connected engagement rather than separate vendors.</p>
            </div>
            <div className="card-grid">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.slug} href={`/services/${s.slug}`} className="info-card-link">
                    <div className="info-card">
                      <div className="info-card-icon"><Icon size={22} /></div>
                      <div className="info-card-label">{s.label}</div>
                      <div className="info-card-title">{s.title}</div>
                      <p style={{ color: "var(--text-2)", fontSize: "14px", margin: "0 0 16px" }}>{s.tagline}</p>
                      <div className="info-card-arrow"><ArrowRight size={16} /></div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div style={{ marginTop: "32px" }}>
              <a href="/services" className="work-link">View all services →</a>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="work">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <h2>Selected work</h2>
              <p>Real projects we&apos;ve delivered for real businesses.</p>
            </div>
          </div>
          <div className="wrap" style={{ padding: 0 }}>
            <div className="work-grid">
              <div className="work-card">
                <div className="work-visual" aria-hidden="true">
                  <Image src="/okoa-screenshot.png" alt="" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div className="work-meta">FURNITURE — E-COMMERCE</div>
                <h3>OKOA Furniture</h3>
                <p>An online furniture store with a 270+ piece catalogue, shop-by-room browsing and ordering through WhatsApp.</p>
                <a href="/work/okoa" className="work-link">View case study →</a>
              </div>
              <div className="work-card">
                <div className="work-visual" aria-hidden="true">
                  <Image src="/tenseiark-screenshot.png" alt="" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div className="work-meta">RETAIL — E-COMMERCE</div>
                <h3>Tensei Ark</h3>
                <p>A full electronics storefront with cart, wishlist, comparison and multi-currency support.</p>
                <a href="/work/tenseiark" className="work-link">View case study →</a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <h2>Why AROKELIX</h2>
              <p>Not just execution — a partner who understands the business problem behind the build request.</p>
            </div>
            <div className="card-grid">
              <div className="info-card">
                <div className="info-card-icon"><ShieldCheck size={22} /></div>
                <div className="info-card-label">Quality</div>
                <div className="info-card-title">Built to last, not to demo</div>
                <p style={{ color: "var(--text-2)", fontSize: "14px", margin: 0 }}>Clean architecture and real testing, so what ships doesn&apos;t fall apart six months in.</p>
              </div>
              <div className="info-card">
                <div className="info-card-icon"><Lightbulb size={22} /></div>
                <div className="info-card-label">Approach</div>
                <div className="info-card-title">Problems first, code second</div>
                <p style={{ color: "var(--text-2)", fontSize: "14px", margin: 0 }}>We start from what the business actually needs, and choose technology to fit.</p>
              </div>
              <div className="info-card">
                <div className="info-card-icon"><TrendingUp size={22} /></div>
                <div className="info-card-label">Outcome</div>
                <div className="info-card-title">Measured by results</div>
                <p style={{ color: "var(--text-2)", fontSize: "14px", margin: 0 }}>Every engagement is judged by what it changes for your business.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="process" className="process">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <h2>Our process</h2>
              <p>The same seven steps for every engagement, scaled to the size of the project.</p>
            </div>
            <div className="process-timeline">
              <div className="process-item">
                <div className="process-num">01</div>
                <div className="process-content"><h3>Discover</h3><p>Understand your objectives, constraints and requirements.</p></div>
              </div>
              <div className="process-item">
                <div className="process-num">02</div>
                <div className="process-content"><h3>Plan</h3><p>Define the solution, architecture and a realistic development plan.</p></div>
              </div>
              <div className="process-item">
                <div className="process-num">03</div>
                <div className="process-content"><h3>Design</h3><p>Design the experience and interface around how users actually work.</p></div>
              </div>
              <div className="process-item">
                <div className="process-num">04</div>
                <div className="process-content"><h3>Build</h3><p>Develop the solution in a modular, maintainable codebase.</p></div>
              </div>
              <div className="process-item">
                <div className="process-num">05</div>
                <div className="process-content"><h3>Test</h3><p>Verify functionality, performance, security and responsiveness.</p></div>
              </div>
              <div className="process-item">
                <div className="process-num">06</div>
                <div className="process-content"><h3>Deploy</h3><p>Launch to production with proper domain, hosting and monitoring.</p></div>
              </div>
              <div className="process-item">
                <div className="process-num">07</div>
                <div className="process-content"><h3>Support</h3><p>Ongoing maintenance and improvements once the project is live.</p></div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="technology" className="bg-alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <h2>Technology</h2>
              <p>The stack we actually use — chosen for security, performance and maintainability.</p>
            </div>
            <div className="tech-groups">
              <div className="tech-group">
                <h4>FRONTEND</h4>
                <ul>
                  <li><SiReact /> React</li>
                  <li><SiNextdotjs /> Next.js</li>
                  <li><SiJavascript /> JavaScript</li>
                  <li><SiHtml5 /> HTML / CSS</li>
                </ul>
              </div>
              <div className="tech-group">
                <h4>BACKEND</h4>
                <ul>
                  <li><SiNodedotjs /> Node.js</li>
                  <li><SiPython /> Python</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div className="tech-group">
                <h4>DATABASES</h4>
                <ul>
                  <li><SiPostgresql /> PostgreSQL</li>
                  <li><SiMysql /> MySQL</li>
                  <li><SiMongodb /> MongoDB</li>
                </ul>
              </div>
              <div className="tech-group">
                <h4>TOOLS</h4>
                <ul>
                  <li><SiGit /> Git</li>
                  <li><SiGithub /> GitHub</li>
                  <li><SiDocker /> Docker</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="ceo" className="bg-alt">
        <Reveal>
          <div className="wrap">
            <div className="section-head">
              <h2>Leadership</h2>
              <p></p>
            </div>
            <div className="ceo">
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/aron-photo.jpg" alt="Aron Muiyionko, CEO & Founder of AROKELIX" fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <h3>Aron Muiyionko</h3>
                <div className="role">CEO & Founder, AROKELIX</div>
                <p>Aron founded AROKELIX to give businesses access to the kind of engineering and design usually reserved for companies with in-house product teams.</p>
                <p>His approach is direct: understand the business problem completely before writing a line of code, and treat every project as something AROKELIX will stand behind long after launch.</p>
                <p>Under his leadership, AROKELIX is built to grow — from a founding team into a company with the systems and people to serve more businesses.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="cta">
        <div className="wrap">
          <h2>Have a project in mind?<br />Let&apos;s build it.</h2>
          <p>Tell us what you&apos;re trying to solve — we&apos;ll follow up with next steps within one business day.</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">Start a Project</a>
            <a href="mailto:aronmuiyionko57@gmail.com" className="btn btn-secondary">Email us directly</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </>
  );
}