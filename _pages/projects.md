---
layout: page
title: Projects
permalink: /projects/
description:
nav: true
nav_order: 3
display_categories: [current, past]
horizontal: false
_styles: >
  .post-header { display: none; }
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <div style="display:flex; align-items:baseline; justify-content:space-between;">
    <h2 class="category" style="margin-bottom:0;">{{ category | capitalize }} Projects</h2>
    {% if category == "current" %}
    <a href="javascript:void(0)" onclick="document.getElementById('all-publications').scrollIntoView({behavior:'smooth'})" style="font-size:0.85rem; color:var(--global-theme-color); text-decoration:none; white-space:nowrap; cursor:pointer; font-weight:700; margin-bottom:0.35rem;">View all publications →</a>
    {% endif %}
  </div>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% assign vertical_projects = sorted_projects | where_exp: "item", "item.horizontal != true" %}
  {% assign horizontal_projects = sorted_projects | where_exp: "item", "item.horizontal == true" %}
  {% if horizontal_projects.size > 0 %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in horizontal_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% if vertical_projects.size > 0 %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in vertical_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="row row-cols-1 row-cols-md-3">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
{% endif %}

<h2 class="category" id="all-publications">All Publications</h2>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

</div>
