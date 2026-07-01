---
layout: page
title: Surgical Workflow Modeling
description: Updated Soon
img:
importance: 1
category: current
horizontal: false
---

<style>
.post-header { display: none; }

/* ── Sections ── */
.swmod-section { margin-top: 2.5rem; }

.swmod-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  border-bottom: none !important;
}
.swmod-title-hr {
  border: none;
  border-top: 3px solid var(--global-theme-color);
  width: 2.5rem;
  margin: 0 0 1.4rem 0;
  opacity: 1;
}

/* ── Publication cards (vertical 2-col grid) ── */
.swmod-pub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.swmod-pub-card {
  border: 1px solid var(--global-divider-color);
  border-radius: 0.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.swmod-pub-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 7;
  overflow: hidden;
}
.swmod-pub-img-wrap iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.swmod-pub-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.swmod-pub-content {
  padding: 0.9rem 1rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.swmod-pub-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  display: block;
  margin-bottom: 0.3rem;
  text-decoration: none !important;
  color: var(--global-text-color) !important;
  flex: 1;
}
.swmod-pub-title:visited { color: var(--global-text-color) !important; }
.swmod-pub-title:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
.swmod-pub-venue {
  font-size: 0.78rem;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0.1rem;
}
.swmod-pub-links { display: flex; flex-wrap: wrap; gap: 1.2rem; margin-top: auto; padding-top: 0; }
.swmod-pub-btn {
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
.swmod-pub-btn i { font-size: 1.05rem; }
.swmod-pub-btn:hover {
  color: var(--global-theme-color) !important;
  text-decoration: none !important;
}
.swmod-pub-btn svg { display: none !important; }

@media (max-width: 600px) {
  .swmod-pub-grid { grid-template-columns: 1fr; }
}
</style>

<!-- Overview -->
<section class="swmod-section" style="margin-top: 0.5rem;">
  <h2 class="swmod-section-title">Surgical Workflow Modeling</h2>
  <hr class="swmod-title-hr">
  <p style="font-size: 0.95rem; line-height: 1.65;">Understanding the structure and semantics of surgical procedures is essential for building intelligent surgical assistants. We develop models that recognize surgical phases, instrument-tissue interactions, and procedural context — enabling systems that can anticipate the next steps, assess surgeon skill, and provide real-time guidance.</p>
</section>

<!-- Related Publications -->
<section class="swmod-section">
  <h2 class="swmod-section-title">Related Publications</h2>
  <hr class="swmod-title-hr">

  <div class="swmod-pub-grid">

    <div class="swmod-pub-card">
      <div class="swmod-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/trajpred.png' | relative_url }}" alt="">
      </div>
      <div class="swmod-pub-content">
        <a href="https://arxiv.org/pdf/2603.06999" target="_blank" class="swmod-pub-title">TrajPred: Trajectory-Conditioned Joint Embedding Prediction for Surgical Instrument-Tissue Interaction Recognition in Vision-Language Models</a>
        <p class="swmod-pub-venue">IROS 2026</p>
        <div class="swmod-pub-links">
          <a href="https://arxiv.org/pdf/2603.06999" target="_blank" class="swmod-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
        </div>
      </div>
    </div>

    <div class="swmod-pub-card">
      <div class="swmod-pub-img-wrap">
        <img src="{{ '/assets/img/publication_preview/causal2.png' | relative_url }}" alt="">
      </div>
      <div class="swmod-pub-content">
        <a href="https://openaccess.thecvf.com/content/WACV2026/papers/Cheng_SurgXBench_Explainable_Vision-Language_Model_Benchmark_for_Surgery_WACV_2026_paper.pdf" target="_blank" class="swmod-pub-title">SurgXBench: Explainable Vision-Language Model Benchmark for Surgery</a>
        <p class="swmod-pub-venue">WACV 2026</p>
        <div class="swmod-pub-links">
          <a href="https://openaccess.thecvf.com/content/WACV2026/papers/Cheng_SurgXBench_Explainable_Vision-Language_Model_Benchmark_for_Surgery_WACV_2026_paper.pdf" target="_blank" class="swmod-pub-btn"><i class="fa-regular fa-file"></i> Paper</a>
          <a href="https://marginlab.github.io/AI-for-healthcare/surgxbench/" target="_blank" class="swmod-pub-btn"><i class="fa-solid fa-globe"></i> Project</a>
          <a href="https://github.com/jiajun344/SurgXBench-Explainable-Vision-Language-Model-Benchmark-for-Surgery" target="_blank" class="swmod-pub-btn"><i class="fa-brands fa-github"></i> Code</a>
        </div>
      </div>
    </div>

  </div>
</section>
