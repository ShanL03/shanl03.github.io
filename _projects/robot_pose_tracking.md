---
layout: page
title: Robot Pose Tracking
description: Occlusion • Calibration • In-the-Wild
img: assets/img/qualitative_lab.png
importance: 1
category: past
---

<style>
.post-header { display: none; }

/* ── Sections ── */
.rtrack-section { margin-top: 2.5rem; }

.rtrack-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  border-bottom: none !important;
}
.rtrack-title-hr {
  border: none;
  border-top: 3px solid var(--global-theme-color);
  width: 2.5rem;
  margin: 0 0 1.4rem 0;
  opacity: 1;
}

/* ── Publication cards (vertical 2-col grid) ── */
.rtrack-pub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.rtrack-pub-card {
  border: 1px solid var(--global-divider-color);
  border-radius: 0.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.rtrack-pub-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 7;
  overflow: hidden;
}
.rtrack-pub-img-wrap iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.rtrack-pub-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.rtrack-pub-content {
  padding: 0.9rem 1rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.rtrack-pub-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  display: block;
  margin-bottom: 0.3rem;
  text-decoration: none !important;
  color: var(--global-text-color) !important;
  flex: 1;
}
.rtrack-pub-title:visited { color: var(--global-text-color) !important; }
.rtrack-pub-title:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
.rtrack-pub-venue {
  font-size: 0.78rem;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0.1rem;
}
.rtrack-pub-links { display: flex; flex-wrap: wrap; gap: 1.2rem; margin-top: auto; padding-top: 0; }
.rtrack-pub-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  color: var(--global-text-color) !important;
  text-decoration: none !important;
  border: none;
  padding: 0;
  background: none;
  white-space: nowrap;
}
.rtrack-pub-btn i { font-size: 1.05rem; }
.rtrack-pub-btn:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
.rtrack-pub-btn svg { display: none !important; }

@media (max-width: 600px) {
  .rtrack-pub-grid { grid-template-columns: 1fr; }
}
</style>

<!-- Overview -->
<section class="rtrack-section" style="margin-top: 0.5rem;">
  <h2 class="rtrack-section-title">Robot Pose Tracking</h2>
  <hr class="rtrack-title-hr">
  <p style="font-size: 0.95rem; line-height: 1.65;">Accurate robot pose estimation within its deployment environment is critical for the robot to complete tasks. In robotic surgery, this is even more challenging as many surgical robots have cable-driven arms and instruments with motors mounted externally, away from the patient, often on the robot base, to maintain compactness for minimally invasive procedures. Therefore, estimating robot pose directly from encoders mounted on the motors is prone to large errors, which must be mitigated to ensure robust and safe surgical operations.</p>
</section>

<!-- Related Publications -->
<section class="rtrack-section">
  <h2 class="rtrack-section-title">Related Publications</h2>
  <hr class="rtrack-title-hr">

  <div class="rtrack-pub-grid">

    <div class="rtrack-pub-card">
      <div class="rtrack-pub-img-wrap">
        <iframe src="https://www.youtube.com/embed/yrsvX1fJpLE" title="CtRNet-X" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="rtrack-pub-content">
        <a href="https://arxiv.org/abs/2409.10441" target="_blank" class="rtrack-pub-title">CtRNet-X: Camera-to-Robot Pose Estimation in Real-World Conditions Using a Single Camera</a>
        <p class="rtrack-pub-venue">ICRA 2025</p>
        <div class="rtrack-pub-links">
          <a href="https://arxiv.org/abs/2409.10441" target="_blank" class="rtrack-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="rtrack-pub-card">
      <div class="rtrack-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/fig_system_overview.png' | relative_url }}" alt="">
      </div>
      <div class="rtrack-pub-content">
        <a href="https://www.nature.com/articles/s44182-024-00016-x" target="_blank" class="rtrack-pub-title">Efficient Data-Driven Joint-Level Calibration of Cable-Driven Surgical Robots</a>
        <p class="rtrack-pub-venue">npj Robotics 2024</p>
        <div class="rtrack-pub-links">
          <a href="https://www.nature.com/articles/s44182-024-00016-x" target="_blank" class="rtrack-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="rtrack-pub-card">
      <div class="rtrack-pub-img-wrap">
        <iframe src="https://www.youtube.com/embed/lv21PRlQ1YA" title="Snake Robot Tracking" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="rtrack-pub-content">
        <a href="https://ieeexplore.ieee.org/abstract/document/10611438" target="_blank" class="rtrack-pub-title">Tracking Snake-Like Robots in the Wild Using Only a Single Camera</a>
        <p class="rtrack-pub-venue">ICRA 2024</p>
        <div class="rtrack-pub-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/10611438" target="_blank" class="rtrack-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

  </div>
</section>
