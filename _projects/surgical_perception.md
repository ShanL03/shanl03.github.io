---
layout: page
title: Digital Twin
description: 3D Perception • Implicit Neural Representations • Registration
img: assets/img/surgical_perception_projectfigure.png
importance: 3
category: current
related_publications: false
---

<style>
.post-header { display: none; }

.dtwin-section { margin-top: 2.5rem; }
.dtwin-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  border-bottom: none !important;
}
.dtwin-title-hr {
  border: none;
  border-top: 3px solid var(--global-theme-color);
  width: 2.5rem;
  margin: 0 0 1.4rem 0;
  opacity: 1;
}
.dtwin-pub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.dtwin-pub-card {
  border: 1px solid var(--global-divider-color);
  border-radius: 0.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.dtwin-pub-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 7;
  overflow: hidden;
}
.dtwin-pub-img-wrap iframe, .dtwin-pub-img-wrap img {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.dtwin-pub-img-wrap img { object-fit: cover; }
.dtwin-pub-content {
  padding: 0.9rem 1rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.dtwin-pub-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  display: block;
  margin-bottom: 0.3rem;
  text-decoration: none !important;
  color: var(--global-text-color) !important;
  flex: 1;
}
.dtwin-pub-title:visited { color: var(--global-text-color) !important; }
.dtwin-pub-title:hover { color: var(--global-theme-color) !important; text-decoration: none !important; }
.dtwin-pub-venue { font-size: 0.78rem; color: #6c757d; margin-bottom: 0; margin-top: 0.1rem; }
.dtwin-pub-links { display: flex; flex-wrap: wrap; gap: 1.2rem; margin-top: auto; padding-top: 0; }
.dtwin-pub-btn {
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
.dtwin-pub-btn i { font-size: 1.05rem; }
.dtwin-pub-btn:hover { color: var(--global-theme-color) !important; text-decoration: none !important; }
.dtwin-pub-btn svg { display: none !important; }
@media (max-width: 600px) { .dtwin-pub-grid { grid-template-columns: 1fr; } }
</style>

<section class="dtwin-section" style="margin-top: 0.5rem;">
  <h2 class="dtwin-section-title">Digital Twin</h2>
  <hr class="dtwin-title-hr">
  <p style="font-size: 0.95rem; line-height: 1.65;">3D scene reconstruction and tracking play an important role in achieving autonomous surgery, providing crucial information for scene understanding, path planning, and navigation. This task is very challenging due to the need to handle unstructured, dynamic, and deformable surgical scenes with texture-less and moist tissues and instruments.</p>
</section>

<section class="dtwin-section">
  <h2 class="dtwin-section-title">Related Publications</h2>
  <hr class="dtwin-title-hr">

  <div class="dtwin-pub-grid">

    <div class="dtwin-pub-card">
      <div class="dtwin-pub-img-wrap">
        <iframe src="https://www.youtube.com/embed/fDvTUU80nu0" title="BASED" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="dtwin-pub-content">
        <a href="https://ieeexplore.ieee.org/abstract/document/10943716" target="_blank" class="dtwin-pub-title">BASED: Bundle-Adjusting Surgical Endoscopic Dynamic Video Reconstruction Using Neural Radiance Fields</a>
        <p class="dtwin-pub-venue">WACV 2025</p>
        <div class="dtwin-pub-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/10943716" target="_blank" class="dtwin-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="dtwin-pub-card">
      <div class="dtwin-pub-img-wrap">
        <iframe src="https://www.youtube.com/embed/ntj-xsHqx0w" title="SuPerPM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="dtwin-pub-content">
        <a href="https://ieeexplore.ieee.org/abstract/document/10802079" target="_blank" class="dtwin-pub-title">SuPerPM: A Surgical Perception Framework Based on Deep Point Matching Learned from Physical Constrained Simulation Data</a>
        <p class="dtwin-pub-venue">IROS 2024</p>
        <div class="dtwin-pub-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/10802079" target="_blank" class="dtwin-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="dtwin-pub-card">
      <div class="dtwin-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/baangp.png' | relative_url }}" alt="">
      </div>
      <div class="dtwin-pub-content">
        <a href="https://openaccess.thecvf.com/content/CVPR2024W/VISOD/html/Liu_BAA-NGP_Bundle-Adjusting_Accelerated_Neural_Graphics_Primitives_CVPRW_2024_paper.html" target="_blank" class="dtwin-pub-title">BAA-NGP: Bundle-Adjusting Accelerated Neural Graphics Primitives</a>
        <p class="dtwin-pub-venue">CVPR Workshop 2024</p>
        <div class="dtwin-pub-links">
          <a href="https://openaccess.thecvf.com/content/CVPR2024W/VISOD/html/Liu_BAA-NGP_Bundle-Adjusting_Accelerated_Neural_Graphics_Primitives_CVPRW_2024_paper.html" target="_blank" class="dtwin-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="dtwin-pub-card">
      <div class="dtwin-pub-img-wrap">
        <iframe src="https://www.youtube.com/embed/dYPfH_fYPpQ" title="ORRN" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="dtwin-pub-content">
        <a href="https://ieeexplore.ieee.org/abstract/document/10144816" target="_blank" class="dtwin-pub-title">ORRN: An ODE-Based Recursive Registration Network for Deformable Respiratory Motion Estimation with Lung 4DCT Images</a>
        <p class="dtwin-pub-venue">IEEE Transactions on Biomedical Engineering 2023</p>
        <div class="dtwin-pub-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/10144816" target="_blank" class="dtwin-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="dtwin-pub-card">
      <div class="dtwin-pub-img-wrap">
        <iframe src="https://www.youtube.com/embed/trekYbHtITI" title="Semantic-Super" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="dtwin-pub-content">
        <a href="https://ieeexplore.ieee.org/document/10160746" target="_blank" class="dtwin-pub-title">Semantic-Super: A Semantic-Aware Surgical Perception Framework for Endoscopic Tissue Identification, Reconstruction, and Tracking</a>
        <p class="dtwin-pub-venue">ICRA 2023</p>
        <div class="dtwin-pub-links">
          <a href="https://ieeexplore.ieee.org/document/10160746" target="_blank" class="dtwin-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

  </div>
</section>
