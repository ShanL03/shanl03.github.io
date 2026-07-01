---
layout: page
title: Semantic Segmentation
description: Data Efficiency • Robust Features • Real-Time
img: assets/img/endo1_seg.png
importance: 2
category: past
---

<style>
.post-header { display: none; }

/* ── Sections ── */
.sseg-section { margin-top: 2.5rem; }

.sseg-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  border-bottom: none !important;
}
.sseg-title-hr {
  border: none;
  border-top: 3px solid var(--global-theme-color);
  width: 2.5rem;
  margin: 0 0 1.4rem 0;
  opacity: 1;
}

/* ── Feature cards ── */
.sseg-feature { padding: 0.5rem 0.5rem 1rem; text-align: center; }
.sseg-feature-icon {
  font-size: 3.2rem;
  color: var(--global-theme-color);
  margin: 0 auto 0.55rem;
  display: block;
}
.sseg-feature h5 {
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1.3;
}

/* ── Publication cards (vertical 2-col grid) ── */
.sseg-pub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.sseg-pub-card {
  border: 1px solid var(--global-divider-color);
  border-radius: 0.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.sseg-pub-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 7;
  overflow: hidden;
}
.sseg-pub-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.sseg-pub-content {
  padding: 0.9rem 1rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.sseg-pub-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  display: block;
  margin-bottom: 0.3rem;
  text-decoration: none !important;
  color: var(--global-text-color) !important;
  flex: 1;
}
.sseg-pub-title:visited { color: var(--global-text-color) !important; }
.sseg-pub-title:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
.sseg-pub-venue {
  font-size: 0.78rem;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0.1rem;
}
.sseg-pub-links { display: flex; flex-wrap: wrap; gap: 1.2rem; margin-top: auto; padding-top: 0; }
.sseg-pub-btn {
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
.sseg-pub-btn i { font-size: 1.05rem; }
.sseg-pub-btn:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
.sseg-pub-btn svg { display: none !important; }

@media (max-width: 600px) {
  .sseg-pub-grid { grid-template-columns: 1fr; }
}
</style>

<!-- Overview -->
<section class="sseg-section" style="margin-top: 0.5rem;">
  <h2 class="sseg-section-title">Semantic Segmentation</h2>
  <hr class="sseg-title-hr">
  <p style="font-size: 0.95rem; line-height: 1.65;">Being able to identify different semantic regions, such as various types of tissues, organs, and instruments, in surgical scenes is critical for the robot to understand the current progress of the surgery, assess potential risks, and plan the next steps. Surgical scenes present many challenges, including blood, smoke, motion blur, and varying lighting conditions.</p>
</section>

<!-- Related Publications -->
<section class="sseg-section">
  <h2 class="sseg-section-title">Related Publications</h2>
  <hr class="sseg-title-hr">

  <div class="sseg-pub-grid">

    <div class="sseg-pub-card">
      <div class="sseg-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/reduce_load_haonan_MIA2024.png' | relative_url }}" alt="">
      </div>
      <div class="sseg-pub-content">
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S1361841524001713" target="_blank" class="sseg-pub-title">Reducing Annotating Load: Active Learning with Synthetic Images in Surgical Instrument Segmentation</a>
        <p class="sseg-pub-venue">Medical Image Analysis 2024</p>
        <div class="sseg-pub-links">
          <a href="https://www.sciencedirect.com/science/article/abs/pii/S1361841524001713" target="_blank" class="sseg-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="sseg-pub-card">
      <div class="sseg-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/hemoset.png' | relative_url }}" alt="">
      </div>
      <div class="sseg-pub-content">
        <a href="https://ieeexplore.ieee.org/abstract/document/10585699" target="_blank" class="sseg-pub-title">HemoSet: The First Blood Segmentation Dataset for Automation of Hemostasis Management</a>
        <p class="sseg-pub-venue">ISMR 2024</p>
        <div class="sseg-pub-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/10585699" target="_blank" class="sseg-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="sseg-pub-card">
      <div class="sseg-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/MFFA.png' | relative_url }}" alt="">
      </div>
      <div class="sseg-pub-content">
        <a href="https://ieeexplore.ieee.org/abstract/document/9479703" target="_blank" class="sseg-pub-title">Multi-Frame Feature Aggregation for Real-Time Instrument Segmentation in Endoscopic Video</a>
        <p class="sseg-pub-venue">IEEE Robotics and Automation Letters 2021</p>
        <div class="sseg-pub-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/9479703" target="_blank" class="sseg-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="sseg-pub-card">
      <div class="sseg-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/LCGAN.png' | relative_url }}" alt="">
      </div>
      <div class="sseg-pub-content">
        <a href="https://ieeexplore.ieee.org/abstract/document/9341556" target="_blank" class="sseg-pub-title">LC-GAN: Image-to-Image Translation Based on Generative Adversarial Network for Endoscopic Images</a>
        <p class="sseg-pub-venue">IROS 2020</p>
        <div class="sseg-pub-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/9341556" target="_blank" class="sseg-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="sseg-pub-card">
      <div class="sseg-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/MAFA.jpg' | relative_url }}" alt="">
      </div>
      <div class="sseg-pub-content">
        <a href="https://ieeexplore.ieee.org/document/9140341" target="_blank" class="sseg-pub-title">Towards Better Surgical Instrument Segmentation in Endoscopic Vision: Multi-Angle Feature Aggregation and Contour Supervision</a>
        <p class="sseg-pub-venue">IEEE Robotics and Automation Letters 2020</p>
        <div class="sseg-pub-links">
          <a href="https://ieeexplore.ieee.org/document/9140341" target="_blank" class="sseg-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

  </div>
</section>
