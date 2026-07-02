---
layout: page
title: About
permalink: /

announcements:
  enabled: true
  scrollable: true
  limit: 5
---

<style>
.post-header { display: none; }

/* ── Two-column grid: left col holds ALL content, right col holds photo ── */
.about-outer {
  display: grid;
  grid-template-columns: 1fr 260px;
  column-gap: 2.5rem;
  align-items: start;
}
.about-left { min-width: 0; }
.about-photo-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 6rem;
}
.about-photo-col img {
  width: 100%;
  border-radius: 0.5rem;
}

/* ── Name heading ── */
.about-name {
  font-size: 2.6rem;
  font-weight: 300;
  line-height: 1.15;
  margin-bottom: 0.3rem;
  margin-top: 0;
}
.about-name-bold { font-weight: 700; }
.about-subtitle {
  font-size: 1rem;
  color: #6c757d;
  margin-top: 0.2rem;
  margin-bottom: 0.6rem;
  line-height: 1.6;
}
.about-subtitle a { color: var(--global-theme-color); text-decoration: none; }
.about-subtitle a:hover { text-decoration: underline; }
.about-name-hr {
  border: none;
  border-top: 3px solid var(--global-theme-color);
  width: 2.5rem;
  margin: 0 0 1.2rem 0;
  opacity: 1;
}
.about-left p {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.9rem;
}

/* ── Social icons ── */
.about-social-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}
.about-social-links a {
  color: var(--global-theme-color);
  font-size: 1.35rem;
  text-decoration: none;
  line-height: 1;
}
.about-social-links a:hover { opacity: 0.75; }
.about-social-links .about-cv-text {
  font-size: 0.8rem;
  font-weight: 700;
  display: inline-block;
  color: var(--global-theme-color);
  position: relative;
  top: -3px;
}

/* ── Section titles ── */
.about-section { margin-top: 2.5rem; }
.about-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  border-bottom: none !important;
  color: var(--global-text-color);
}
.about-title-hr {
  border: none;
  border-top: 3px solid var(--global-theme-color);
  width: 2.5rem;
  margin: 0 0 1.1rem 0;
  opacity: 1;
}

/* ── Education timeline ── */
.about-timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 2px solid var(--global-divider-color);
  padding-left: 1.5rem;
}
.about-timeline li {
  position: relative;
  margin-bottom: 1rem;
  font-size: 0.93rem;
  line-height: 1.6;
}
.about-timeline li::before {
  content: '';
  position: absolute;
  left: -1.9rem;
  top: 0.45em;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--global-theme-color);
  border: 2px solid var(--global-bg-color);
  box-shadow: 0 0 0 2px var(--global-theme-color);
}
.about-timeline li:last-child { margin-bottom: 0; }
.edu-degree { font-weight: 600; }
.edu-year { color: #6c757d; font-size: 0.85rem; margin-left: 0.5rem; }

/* ── News dividers ── */
.about-section .news table tr {
  border-bottom: 1px solid var(--global-divider-color);
}
.about-section .news table tr:last-child {
  border-bottom: none;
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .about-outer { grid-template-columns: 1fr; }
  .about-photo-col { width: 180px; margin: 0 auto 1.5rem; order: -1; }
}
</style>

<div class="about-outer">
  <div class="about-left">
    <h1 class="about-name"><span class="about-name-bold">Shan</span> Lin</h1>
    <p class="about-subtitle">Assistant Professor in ECEE<br><a href="https://marginlab.github.io/" target="_blank">MARGIN Lab</a> @ ASU</p>
    <hr class="about-name-hr">
    <p>I'm an Assistant Professor in <a href="https://ecee.engineering.asu.edu/">ECEE</a> at Arizona State University (ASU), and Director of the <a href="https://marginlab.github.io/">Medical Automation, Robotics &amp; General Intelligence Lab (MARGIN Lab)</a>. Previously, I was a postdoc at the University of California San Diego with <a href="https://yip.eng.ucsd.edu/">Michael Yip</a>. I completed my Ph.D. at the University of Washington, supervised by <a href="https://people.ece.uw.edu/hannaford/">Blake Hannaford</a>, and earned my M.S. at Vanderbilt University, advised by <a href="https://www.vanderbilt.edu/vise/people/bob-webster/">Robert J. Webster III</a>.</p>
    <p>My research interests are in <strong>AI + robotics, surgical robotics, and medical devices</strong>, with the overarching goal of intelligent healthcare and autonomous surgery. My work covers robotic perception, motion planning, control, and manipulation. Outside of research, I love outdoor sports such as climbing and hiking.</p>

    <section class="about-section">
      <h2 class="about-section-title">Education</h2>
      <hr class="about-title-hr">
      <ul class="about-timeline">
        <li>
          <span class="edu-degree">Ph.D., Electrical Engineering</span><span class="edu-year">2017 – 2021</span><br>
          University of Washington, USA
        </li>
        <li>
          <span class="edu-degree">M.S., Electrical Engineering</span><span class="edu-year">2015 – 2017</span><br>
          Vanderbilt University, USA
        </li>
        <li>
          <span class="edu-degree">B.E., Electronic and Information Engineering</span><span class="edu-year">2011 – 2015</span><br>
          Xiamen University, China
        </li>
      </ul>
    </section>

  </div>

  <div class="about-photo-col">
    <img src="{{ 'assets/img/prof_pic.jpg' | relative_url }}" alt="Shan Lin">
    <div class="about-social-links">
      <a href="mailto:shan.lin.2@asu.edu" title="Email"><i class="fa-solid fa-envelope"></i></a>
      <a href="https://scholar.google.com/citations?hl=en&user=HWIoDGYAAAAJ" target="_blank" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>
      <a href="https://www.linkedin.com/in/shan-lin-6810b7140/" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      <a href="/assets/pdf/ShanLin_CV_062326.pdf" target="_blank" title="CV"><span class="about-cv-text">CV</span></a>
    </div>
  </div>

  {% if page.announcements and page.announcements.enabled %}
  <section class="about-section" style="grid-column: 1 / -1;">
    <h2 class="about-section-title"><a href="{{ '/news/' | relative_url }}" style="color: inherit; text-decoration: none;">Recent News <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.85rem; color: var(--global-theme-color); vertical-align: middle; margin-left: 0.2rem;"></i></a></h2>
    <hr class="about-title-hr">
    {% include news.liquid limit=true %}
  </section>
  {% endif %}
</div>
