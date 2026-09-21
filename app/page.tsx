"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Code2, Smartphone, ShoppingCart, Palette, Settings, ArrowRight, ChevronUp, ShieldCheck, Lightbulb, TrendingUp, Users } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiJavascript, SiHtml5,
  SiNodedotjs, SiPython,
  SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiGithub, SiDocker,
} from "react-icons/si";

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
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, started]);

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="/" className="logo">
            <img src="/logo.png" alt="AROKELIX" className="logo-img" />
          </a>
          <nav className="navlinks">
            <a href="/about">About AROKELIX</a>
            <a href="/solutions">Solutions</a>
            <a href="/lab">Lab</a>
            <a href="#services">Services</a>
            <a href="/work">Our Work</a>
            <a href="#process">Process</a>
            <a href="#technology">Technology</a>
            <a href="#ceo">About the CEO</a>
          </nav>
          <a href="/contact" className="navcta">Start a Project</a>
          <button
            className="navmobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="/about" onClick={() => setMenuOpen(false)}>About AROKELIX</a>
            <a href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="/lab" onClick={() => setMenuOpen(false)}>Lab</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="/work" onClick={() => setMenuOpen(false)}>Our Work</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a>
            <a href="#ceo" onClick={() => setMenuOpen(false)}>About the CEO</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Start a Project</a>
          </div>
        )}
      </header>

      <section className="hero">
        <div className="hero-photo-bg">
          <img src="/hero-photo.jpg" alt="AROKELIX technology professional at work" />
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
            <a href="#services" className="btn btn-gold">Our Services <ArrowRight size={16} /></a>
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
              <div className="info-card">
                <div className="info-card-icon"><Globe size={22} /></div>
                <div className="info-card-label">Web</div>
                <div className="info-card-title">Websites & Web Apps</div>
                <div className="info-card-arrow"><ArrowRight size={16} /></div>
              </div>
              <div className="info-card">
                <div className="info-card-icon"><Code2 size={22} /></div>
                <div className="info-card-label">Software</div>
                <div className="info-card-title">Custom Software</div>
                <div className="info-card-arrow"><ArrowRight size={16} /></div>
              </div>
              <div className="info-card">
                <div className="info-card-icon"><Smartphone size={22} /></div>
                <div className="info-card-label">Mobile</div>
                <div className="info-card-title">Mobile Apps</div>
                <div className="info-card-arrow"><ArrowRight size={16} /></div>
              </div>
              <div className="info-card">
                <div className="info-card-icon"><ShoppingCart size={22} /></div>
                <div className="info-card-label">Retail</div>
                <div className="info-card-title">E-commerce</div>
                <div className="info-card-arrow"><ArrowRight size={16} /></div>
              </div>
              <div className="info-card">
                <div className="info-card-icon"><Palette size={22} /></div>
                <div className="info-card-label">Creative</div>
                <div className="info-card-title">Branding & Creative</div>
                <div className="info-card-arrow"><ArrowRight size={16} /></div>
              </div>
              <div className="info-card">
                <div className="info-card-icon"><Settings size={22} /></div>
                <div className="info-card-label">Support</div>
                <div className="info-card-title">IT Consulting & Support</div>
                <div className="info-card-arrow"><ArrowRight size={16} /></div>
              </div>
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
                <div
                  className="work-visual"
                  style={{ backgroundImage: "url(/gmjr-screenshot.png)", backgroundSize: "cover", backgroundPosition: "top" }}
                ></div>
                <div className="work-meta">MINING — WEBSITE</div>
                <h3>GMJR Critical Minerals Mozambique</h3>
                <p>A corporate website for a Mozambican critical-minerals exploration and development company.</p>
                <a href="/work/gmjr" className="work-link">View case study →</a>
              </div>
              <div className="work-card">
                <div
                  className="work-visual"
                  style={{ backgroundImage: "url(/tenseiark-screenshot.png)", backgroundSize: "cover", backgroundPosition: "top" }}
                ></div>
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
              <img src="/aron-photo.jpg" alt="Aron Muiyionko, CEO & Founder of AROKELIX" className="ceo-photo" />
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

      <footer>
        <div className="wrap" style={{ marginBottom: "24px" }}>
          <img src="/logo.png" alt="AROKELIX" style={{ height: "96px", width: "auto", mixBlendMode: "multiply" }} />
        </div>
        <div className="wrap foot-row">
          <div>© {new Date().getFullYear()} AROKELIX. Digital Products. Technology. Creative Solutions.</div>
          <div className="foot-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Email</a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}