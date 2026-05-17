"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const fadeRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    fadeRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addFade = (el: HTMLElement | null) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <a href="#hero" className="nav-logo">Quang Dung Pham</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-text fade" ref={addFade}>
          <div className="hero-eyebrow">BI Executive · Ho Chi Minh City</div>
          <h1>
            Turning raw data<br />
            into <em>decisions</em><br />
            that matter
          </h1>
          <p className="hero-sub">
            Data analyst with experience in FMCG manufacturing — specializing in
            end-to-end ETL pipelines, automated reporting, and Power BI dashboards
            that reduce cost and manual errors.
          </p>
          <a href="#project" className="hero-cta">
            View Project
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 7h12M8 2l5 5-5 5" />
            </svg>
          </a>
        </div>

        <div className="hero-visual fade" ref={addFade}>
          <div className="deco-line" />
          <div className="hero-card">
            <div className="stat-grid">
              <div className="stat-cell">
                <div className="stat-label">Experience</div>
                <div className="stat-val">1+ yr</div>
              </div>
              <div className="stat-cell">
                <div className="stat-label">Reporting time</div>
                <div className="stat-val">−70%</div>
              </div>
              <div className="stat-cell">
                <div className="stat-label">Scale</div>
                <div className="stat-val" style={{ fontSize: "1.1rem", paddingTop: "4px" }}>6.2B cigarette/year</div>
              </div>
              <div className="stat-cell">
                <div className="stat-label">Domain</div>
                <div className="stat-val" style={{ fontSize: "1.1rem", paddingTop: "4px" }}>FMCG Domain</div>
              </div>
            </div>
            <div className="tag-row">
              {["Power BI", "SQL", "DAX"].map((t) => (
                <span key={t} className="tag active">{t}</span>
              ))}
              {["VBA", "Power Automate", "SAP"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="fade" ref={addFade}>
          <div className="section-number">01</div>
        </div>
        <div className="fade" ref={addFade}>
          <h2 className="section-title">About</h2>
          <p className="about-body">
            Bachelor of Engineering in Food Technology from International University — VNU HCMC.
            Currently working as IWS Coordinator at British American Tobacco Vietnam, building
            automated data pipelines and Power BI dashboards as the single source of truth for
            production KPIs across all manufacturing lines. Previously at Lucky Steel Buildings
            as QA Officer, developing VBA-powered ETL flows that cut documentation time by 40%.
          </p>
          <div className="skills-grid">
            {[
              {
                title: "Visualization",
                items: ["Power BI (DAX)", "Advanced Excel", "Power Query / VBA"],
              },
              {
                title: "Data & Databases",
                items: ["SQL Server", "SAP S/4HANA", "ETL Pipeline Design"],
              },
              {
                title: "Automation",
                items: ["Power Automate", "Office Scripts", "VBA Macros"],
              },
              {
                title: "Soft Skills",
                items: ["Lean / 5 Whys / 6W2H", "Data Storytelling", "Stakeholder Mgmt"],
              },
            ].map((box) => (
              <div key={box.title} className="skill-box">
                <div className="skill-box-title">{box.title}</div>
                <ul className="skill-list">
                  {box.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience">
        <div className="fade" ref={addFade}>
          <div className="section-number" style={{ fontSize: "3.5rem", color: "rgba(200,75,47,0.15)" }}>02</div>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="exp-list fade" ref={addFade}>

          {/* BAT */}
          <div className="exp-card">
            <div className="exp-meta">
              <div className="exp-company">British American Tobacco</div>
              <div className="exp-period">Jul 2025 – Present</div>
            </div>
            <div>
              <div className="exp-role">IWS Coordinator</div>
              <p className="exp-desc">
                Architected SQL Server / Excel ETL pipelines replacing manual workflows.
                Designed Power BI dashboards as the single source of truth for Daily Direction Setting
                across all production lines. Engineered automated SPC charts with hourly refresh via
                Power Automate. Built a manufacturing loss intelligence framework covering ~6.2B
                cigarettes annually — enabling systematic Pareto analysis for loss elimination.
              </p>
              <div className="exp-achievement">
                ↗ Reduced raw data standardization time by 70%, eliminating manual consolidation
                across quality operations.
              </div>
              <div className="exp-tools">
                {["SAP ERP", "Power BI", "SQL Server", "Power Automate", "Power Apps", "Advanced Excel"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Lucky Steel */}
          <div className="exp-card">
            <div className="exp-meta">
              <div className="exp-company">Lucky Steel Buildings</div>
              <div className="exp-period">Jan 2025 – May 2025</div>
            </div>
            <div>
              <div className="exp-role">QA Officer</div>
              <p className="exp-desc">
                Managed end-to-end project documentation across all phases. Coordinated with
                suppliers, PMs, QC/QS teams, and testing labs to resolve compliance gaps.
                Developed VBA ETL flows to process raw image and PDF documents automatically.
              </p>
              <div className="exp-achievement">
                ↗ Reduced QA documentation time by 40%. Generated ~50-page traceability
                reports in under 2 minutes via macros.
              </div>
              <div className="exp-tools">
                {["VBA", "Advanced Excel", "ETL"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PROJECT / BI ── */}
      <section id="project">
        <div className="project-header fade" ref={addFade}>
          <div>
            <div className="section-number" style={{ fontSize: "3.5rem", color: "rgba(200,75,47,0.15)" }}>03</div>
            <h2 className="section-title">Featured Project</h2>
          </div>
          <div className="project-meta">
            Power BI · SQL Server · DAX<br />
            BAT Vietnam · 2025
          </div>
        </div>

        <div className="project-card fade" ref={addFade}>
          <div className="project-card-header">
            <div>
              <div className="project-title">Quality KPI Dashboard — BAT Vietnam</div>
              <p className="project-desc">
                Single source of truth for Daily Direction Setting across all production lines.
                Consolidates quality KPIs from SQL Server with daily/weekly/monthly granularity,
                enabling line managers to identify anomalies and drive accountability discussions
                in real time — replacing a fully manual reporting process.
              </p>
            </div>
            <div className="project-tags">
              {["Power BI", "SQL Server", "DAX"].map((t) => (
                <span key={t} className="tag active">{t}</span>
              ))}
              <span className="tag">Power Automate</span>
            </div>
          </div>

          {/* BI IMAGE — thay bằng <iframe> khi có Power BI embed link thật */}
          <div className="bi-wrapper">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              alt="Quality KPI Dashboard preview"
            />
            <div className="bi-overlay" />
            <div className="bi-label">Report Preview</div>
            <a className="bi-fullscreen" href="#" target="_blank" rel="noreferrer">
              ↗ Full screen
            </a>
            <div className="bi-caption">
              <div className="bi-insight">
                <strong>Key Impact</strong>
                Reduced raw data standardization time by 70%. SPC charts refresh hourly via
                Power Automate — factory&apos;s first real-time statistical process control system.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="fade" ref={addFade}>
          <h2 className="contact-tagline">
            Open to<br /><em>new opportunities</em>
          </h2>
        </div>
        <div className="fade" ref={addFade}>
          <div className="contact-links">
            <a href="mailto:quangdung1803@gmail.com" className="contact-link">
              📧 quangdung1803@gmail.com
              <span>Email</span>
            </a>
            <a href="tel:+840929743466" className="contact-link">
              📞 0929.743.466
              <span>Phone</span>
            </a>
            <a
              href="https://www.linkedin.com/in/phamquangdung"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              💼 LinkedIn — Pham Quang Dung
              <span>LinkedIn</span>
            </a>
            <a href="#" className="contact-link contact-link-cta">
              📄 Download CV
              <span>PDF · 2025</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <span>© 2025 Pham Quang Dung · Business Intelligence Executive</span>
        <span>Thu Dau Mot, HCMC · Built with Next.js</span>
      </footer>
    </>
  );
}
