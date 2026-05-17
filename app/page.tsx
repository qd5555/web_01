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
        <a href="#hero" className="nav-logo">NT.</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-text fade" ref={addFade}>
          <div className="hero-eyebrow">Data Analyst · Ho Chi Minh City</div>
          <h1>
            Biến dữ liệu<br />
            thành <em>insight</em><br />
            có giá trị
          </h1>
          <p className="hero-sub">
            1 năm kinh nghiệm phân tích dữ liệu kinh doanh, xây dựng dashboard
            và báo cáo giúp team ra quyết định nhanh hơn.
          </p>
          <a href="#project" className="hero-cta">
            Xem Project
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
                <div className="stat-label">Kinh nghiệm</div>
                <div className="stat-val">1 năm</div>
              </div>
              <div className="stat-cell">
                <div className="stat-label">Dashboard</div>
                <div className="stat-val">10+</div>
              </div>
              <div className="stat-cell">
                <div className="stat-label">Báo cáo</div>
                <div className="stat-val">20+</div>
              </div>
              <div className="stat-cell">
                <div className="stat-label">Domain</div>
                <div className="stat-val" style={{ fontSize: "1.1rem", paddingTop: "4px" }}>
                  Sales & Finance
                </div>
              </div>
            </div>
            <div className="tag-row">
              {["Power BI", "SQL", "Excel"].map((t) => (
                <span key={t} className="tag active">{t}</span>
              ))}
              {["Python", "DAX", "ETL"].map((t) => (
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
          <h2 className="section-title">Về mình</h2>
          <p className="about-body">
            Tốt nghiệp ngành Hệ thống Thông tin tại Đại học [Tên trường]. Trong
            1 năm qua mình đã làm việc tại [Tên công ty], hỗ trợ team Sales &
            Finance xây dựng hệ thống báo cáo tự động bằng Power BI, giảm thời
            gian tổng hợp báo cáo từ 2 ngày xuống còn 2 giờ.
          </p>
          <div className="skills-grid">
            {[
              { title: "Visualization", items: ["Power BI", "DAX & Power Query", "Excel Advanced"] },
              { title: "Data", items: ["SQL (SQL Server)", "Python (Pandas)", "ETL Pipeline"] },
              { title: "Domain", items: ["Sales Analysis", "Financial Reporting"] },
              { title: "Soft skills", items: ["Data Storytelling", "Stakeholder Mgmt"] },
            ].map((box) => (
              <div key={box.title} className="skill-box">
                <div className="skill-box-title">{box.title}</div>
                <ul className="skill-list">
                  {box.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT ── */}
      <section id="project">
        <div className="project-header fade" ref={addFade}>
          <div>
            <div className="section-number" style={{ fontSize: "3.5rem", color: "rgba(200,75,47,0.15)" }}>02</div>
            <h2 className="section-title">Featured Project</h2>
          </div>
          <div className="project-meta">
            Power BI · SQL Server · DAX<br />
            Q1 2024 – Q4 2024
          </div>
        </div>

        <div className="project-card fade" ref={addFade}>
          <div className="project-card-header">
            <div>
              <div className="project-title">Sales Performance Dashboard</div>
              <p className="project-desc">
                Dashboard phân tích doanh thu theo kênh bán hàng, sản phẩm và
                khu vực. Giúp Ban Giám đốc theo dõi KPI theo thời gian thực và
                ra quyết định phân bổ ngân sách hàng quý.
              </p>
            </div>
            <div className="project-tags">
              {["Power BI", "SQL"].map((t) => (
                <span key={t} className="tag active">{t}</span>
              ))}
              <span className="tag">DAX</span>
            </div>
          </div>

          {/* ── BI IMAGE — thay bằng <iframe> khi có report thật ── */}
          <div className="bi-wrapper">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              alt="Sales Performance Dashboard preview"
            />
            <div className="bi-overlay" />
            <div className="bi-label">Live Report Preview</div>
            <a className="bi-fullscreen" href="#" target="_blank" rel="noreferrer">
              ↗ Full screen
            </a>
            <div className="bi-caption">
              <div className="bi-insight">
                <strong>Key Insight</strong>
                Top 3 sản phẩm chiếm 62% tổng doanh thu. Kênh online tăng
                trưởng 34% so với cùng kỳ năm trước.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="fade" ref={addFade}>
          <h2 className="contact-tagline">
            Sẵn sàng cho<br /><em>cơ hội mới</em>
          </h2>
        </div>
        <div className="fade" ref={addFade}>
          <div className="contact-links">
            <a href="mailto:your@email.com" className="contact-link">
              📧 your@email.com <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="contact-link">
              💼 linkedin.com/in/yourprofile <span>LinkedIn</span>
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" className="contact-link">
              🐙 github.com/yourprofile <span>GitHub</span>
            </a>
            <a href="#" className="contact-link contact-link-cta">
              📄 Tải CV của mình <span>PDF · 2025</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <span>© 2025 Nguyễn Thành · Data Analyst</span>
        <span>Built with Next.js · Ho Chi Minh City</span>
      </footer>
    </>
  );
}
