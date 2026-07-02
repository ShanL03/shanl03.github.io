---
layout: page
title: News
permalink: /news/
---

<style>
.post-header { display: none; }
.news-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  border-bottom: none !important;
  color: var(--global-text-color);
}
.news-title-hr {
  border: none;
  border-top: 3px solid var(--global-theme-color);
  width: 2.5rem;
  margin: 0 0 1.1rem 0;
  opacity: 1;
}
</style>

<h2 class="news-section-title">News</h2>
<hr class="news-title-hr">

{% include news.liquid %}
