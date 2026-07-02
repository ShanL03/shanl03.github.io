---
layout: page
title: Robotic Manipulation
description: Soft Object • Real-to-Sim • Sim-to-Real
img: assets/img/manipulation_cover.png
importance: 4
category: current
horizontal: false
---

<style>
.post-header { display: none; }

/* ── Sections ── */
.rmanip-section { margin-top: 2.5rem; }

.rmanip-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  border-bottom: none !important;
}
.rmanip-title-hr {
  border: none;
  border-top: 3px solid var(--global-theme-color);
  width: 2.5rem;
  margin: 0 0 1.4rem 0;
  opacity: 1;
}

/* ── Feature cards ── */
.rmanip-feature { padding: 0.5rem 0.5rem 1rem; text-align: center; }
.rmanip-feature-icon {
  width: 110px;
  height: 110px;
  object-fit: contain;
  margin: 0 auto 0.55rem;
  display: block;
}
.rmanip-feature h5 {
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  line-height: 1.3;
}
.rmanip-feature p {
  font-size: 0.8rem;
  color: #6c757d;
  margin-bottom: 0;
  line-height: 1.5;
}

/* ── Publication cards (vertical 2-col grid) ── */
.rmanip-pub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.rmanip-pub-card {
  border: 1px solid var(--global-divider-color);
  border-radius: 0.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.rmanip-pub-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 7;
  overflow: hidden;
}
.rmanip-pub-img-wrap iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.rmanip-pub-content {
  padding: 0.9rem 1rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.rmanip-pub-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  display: block;
  margin-bottom: 0.3rem;
  text-decoration: none !important;
  color: var(--global-text-color) !important;
  flex: 1;
}
.rmanip-pub-title:visited { color: var(--global-text-color) !important; }
.rmanip-pub-title:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
.rmanip-pub-venue {
  font-size: 0.78rem;
  color: #6c757d;
  margin-bottom: 0rem;
  margin-top: 0.1rem;
}
.rmanip-pub-links { display: flex; flex-wrap: wrap; gap: 1.2rem; margin-top: auto; padding-top: 0rem; }
.rmanip-pub-btn {
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
.rmanip-pub-btn i { font-size: 1.05rem; }
.rmanip-pub-btn:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
/* suppress auto-injected link icons from theme */
.rmanip-pub-btn svg { display: none !important; }
@media (max-width: 600px) {
  .rmanip-pub-grid { grid-template-columns: 1fr; }
}
</style>

<!-- Overview -->
<section class="rmanip-section" style="margin-top: 0.5rem;">
  <h2 class="rmanip-section-title">Robotic Manipulation</h2>
  <hr class="rmanip-title-hr">
  <p style="font-size: 0.95rem; line-height: 1.65;">Will robots one day cooperate seamlessly with humans, or even perform complex tasks autonomously? My goal is to understand what still prevents robots from achieving this. Is it limited perception, the gap between simulation and the real world, or insufficient memory and reasoning?</p>
  <div class="row mt-4 justify-content-center" style="padding: 0 3rem;">
    <div class="col-6 col-md-3">
      <div class="rmanip-feature">
        <img src="{{ '/assets/img/world_model.png' | relative_url }}" class="rmanip-feature-icon" alt="">
        <h5>World Models</h5>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="rmanip-feature">
        <img src="{{ '/assets/img/robot_learning.png' | relative_url }}" class="rmanip-feature-icon" alt="">
        <h5>Robot Learning</h5>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="rmanip-feature">
        <img src="{{ '/assets/img/vision_n_physics.png' | relative_url }}" class="rmanip-feature-icon" alt="">
        <h5>Vision &amp; Physics</h5>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="rmanip-feature">
        <img src="{{ '/assets/img/surgical_autonomy.png' | relative_url }}" class="rmanip-feature-icon" alt="">
        <h5>Surgical Autonomy</h5>
      </div>
    </div>
  </div>
</section>

<!-- Related Publications -->
<section class="rmanip-section">
  <h2 class="rmanip-section-title">Related Publications</h2>
  <hr class="rmanip-title-hr">

  <div class="rmanip-pub-grid">

    <div class="rmanip-pub-card">
      <div class="rmanip-pub-img-wrap">
        <iframe src="https://www.youtube.com/embed/UGn-kZzQsEg" title="TwinTrack" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="rmanip-pub-content">
        <a href="https://arxiv.org/pdf/2505.22882" target="_blank" class="rmanip-pub-title">TwinTrack: Bridging Vision and Contact Physics for Real-Time Tracking of Unknown Dynamic Objects in Contact-Rich Scenes</a>
        <p class="rmanip-pub-venue">ICRA 2026</p>
        <div class="rmanip-pub-links">
          <a href="https://arxiv.org/pdf/2505.22882" target="_blank" class="rmanip-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
          <a href="https://irislab.tech/TwinTrack-webpage/" target="_blank" class="rmanip-pub-btn"><i class="fa-solid fa-globe"></i> Project</a>
        </div>
      </div>
    </div>

    <div class="rmanip-pub-card">
      <div class="rmanip-pub-img-wrap">
        <iframe src="https://www.youtube.com/embed/lRZt0kcs3lc" title="Real-to-Sim" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="rmanip-pub-content">
        <a href="https://arxiv.org/pdf/2309.11656" target="_blank" class="rmanip-pub-title">Real-to-Sim Deformable Object Manipulation: Optimizing Physics Models with Residual Mappings for Robotic Surgery</a>
        <p class="rmanip-pub-venue">ICRA 2024</p>
        <div class="rmanip-pub-links">
          <a href="https://arxiv.org/pdf/2309.11656" target="_blank" class="rmanip-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

  </div>

</section>
