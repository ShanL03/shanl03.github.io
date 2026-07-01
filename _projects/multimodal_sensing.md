---
layout: page
title: Multimodal Sensing
description: Force • Tactile • Thermal
img: assets/img/publication_preview/palpad.png
importance: 5
category: current
horizontal: false
---

<style>
.post-header { display: none; }

/* ── Sections ── */
.msens-section { margin-top: 2.5rem; }

.msens-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  border-bottom: none !important;
}
.msens-title-hr {
  border: none;
  border-top: 3px solid var(--global-theme-color);
  width: 2.5rem;
  margin: 0 0 1.4rem 0;
  opacity: 1;
}

/* ── Publication cards (vertical 2-col grid) ── */
.msens-pub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.msens-pub-card {
  border: 1px solid var(--global-divider-color);
  border-radius: 0.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.msens-pub-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 7;
  overflow: hidden;
}
.msens-pub-img-wrap iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.msens-pub-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.msens-pub-content {
  padding: 0.9rem 1rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.msens-pub-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  display: block;
  margin-bottom: 0.3rem;
  text-decoration: none !important;
  color: var(--global-text-color) !important;
  flex: 1;
}
.msens-pub-title:visited { color: var(--global-text-color) !important; }
.msens-pub-title:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
.msens-pub-venue {
  font-size: 0.78rem;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0.1rem;
}
.msens-pub-links { display: flex; flex-wrap: wrap; gap: 1.2rem; margin-top: auto; padding-top: 0; }
.msens-pub-btn {
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
.msens-pub-btn i { font-size: 1.05rem; }
.msens-pub-btn:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
.msens-pub-btn svg { display: none !important; }

@media (max-width: 600px) {
  .msens-pub-grid { grid-template-columns: 1fr; }
}
</style>

<!-- Overview -->
<section class="msens-section" style="margin-top: 0.5rem;">
  <h2 class="msens-section-title">Multimodal Sensing</h2>
  <hr class="msens-title-hr">
  <p style="font-size: 0.95rem; line-height: 1.65;">Effective surgical assistance requires robots to perceive beyond what cameras alone can provide. By integrating force, tactile, and thermal sensing, we aim to give robotic systems a richer understanding of tissue state and instrument-tissue interactions — enabling safer, more adaptive surgical interventions.</p>
</section>

<!-- Related Publications -->
<section class="msens-section">
  <h2 class="msens-section-title">Related Publications</h2>
  <hr class="msens-title-hr">

  <div class="msens-pub-grid">

    <div class="msens-pub-card">
      <div class="msens-pub-img-wrap">
        <iframe src="https://www.youtube.com/embed/_mmzDbw0OuI" title="PalpAid" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="msens-pub-content">
        <a href="https://arxiv.org/pdf/2512.19010" target="_blank" class="msens-pub-title">PalpAid: Multimodal Pneumatic Tactile Sensor for Tissue Palpation</a>
        <p class="msens-pub-venue">RoboSoft 2026</p>
        <div class="msens-pub-links">
          <a href="https://arxiv.org/pdf/2512.19010" target="_blank" class="msens-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
          <a href="https://github.com/raprakashvi/palpaid_robosoft" target="_blank" class="msens-pub-btn"><i class="fa-brands fa-github"></i> Code</a>
          <a href="https://raprakashvi.github.io/palpaid/" target="_blank" class="msens-pub-btn"><i class="fa-solid fa-globe"></i> Project</a>
        </div>
      </div>
    </div>

    <div class="msens-pub-card">
      <div class="msens-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/burn.png' | relative_url }}" alt="">
      </div>
      <div class="msens-pub-content">
        <a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10135/101350Y/Dont-get-burned--thermal-monitoring-of-vessel-sealing-using/10.1117/12.2256031.short" target="_blank" class="msens-pub-title">Don't Get Burned: Thermal Monitoring of Vessel Sealing Using a Miniature Infrared Camera</a>
        <p class="msens-pub-venue">SPIE Medical Imaging 2017</p>
        <div class="msens-pub-links">
          <a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10135/101350Y/Dont-get-burned--thermal-monitoring-of-vessel-sealing-using/10.1117/12.2256031.short" target="_blank" class="msens-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
          <a href="https://drive.google.com/file/d/1pRQX3Vp9N8pFSuGwSNzjiJKIBb-4BRID/view?usp=sharing" target="_blank" class="msens-pub-btn"><i class="fa-regular fa-file-pdf"></i> PDF</a>
        </div>
      </div>
    </div>

  </div>
</section>
