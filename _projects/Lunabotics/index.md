---
layout: post
order: 1
title: "NASA Lunabotics Rover"
description: "Project Lead for CMU's first NASA lunar robotics team, turning a rover concept into tested hardware, interfaces, and a review-driven design process in conjunction with NASA."
skills:
  - Systems engineering
  - Mechanical design
  - Design reviews
  - Integration planning
  - Test planning
  - Leadership
main-image: "/cover.jpg"
---

## Introduction

**NASA Lunabotics asks student teams to build autonomous excavation robots for future lunar infrastructure.** The rover has to move regolith, deposit material, and operate in a dusty, constrained environment where small interface problems can stop the whole system.
<p>
**My objective:** help turn CMU's first Lunabotics effort into a real engineering program, not just a CAD model.

- Build a rover architecture for **excavation, storage, deposition, mobility, sensing, and electronics**.
- Create a test arena and integration process.
- Define subsystem ownership before manufacturing.
- Keep mechanical, avionics, software, and systems work aligned.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/lunabotics-team.jpg" alt="CMU Moon Miners team photo"><figcaption>The team scaled into a large multidisciplinary effort, making process and interfaces as important as the rover hardware.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/lunabotics-presentation-original.jpg" alt="Presenting Lunabotics system overview"><figcaption>Design reviews helped convert subsystem work into a shared system-level plan before manufacturing.</figcaption></figure>
</div>

## Methods

I served as **project lead** and worked across mechanical, avionics, software, and systems. The main method was to force early structure onto a messy build.

- Converted competition rules and advisor feedback into **system requirements**.
- Used **SRR, PDR, and CDR** as hard design gates.
- Built and maintained interface expectations for power, packaging, sensors, drivetrain, excavation, and software.
- Used reviewer feedback to simplify risky design choices before fabrication.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/Lunabotics-CAD_breakdown.png" alt="Lunabotics CAD system breakdown"><figcaption>System CAD</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/Lunabotics-ebox.jpg" alt="Lunabotics electronics box"><figcaption>Electronics housing to keep compute & power systems safe.</figcaption></figure>
</div>

## Results

The project produced a functioning rover architecture, a lunar-style test arena, and a team process for design reviews, integration, and verification. The rover moved from concept-level planning into physical testing and subsystem integration.

<video class="project-video half" controls muted playsinline poster="/assets/images/portfolio/lunabotics-rover.jpg">
  <source src="/assets/videos/lunabotics-proof-of-life.mp4" type="video/mp4">
</video>

<div class="metric-grid three-metrics">
  <div class="metric-card"><strong>73</strong><span>students coordinated across subteams</span></div>
  <div class="metric-card"><strong>SRR → PDR → CDR</strong><span>review gates used before build</span></div>
  <div class="metric-card"><strong>Full arena</strong><span>RIC testbed for regolith-style trials</span></div>
</div>

Reviewer feedback produced practical changes:

- Simplified the **E-stop path** to reduce electrical risk.
- Split sensitive compute and actuator power concerns more clearly.
- Treated mast height and sensor field of view as first-order requirements.
- Required path planning to account for heading and turning radius, not just point-to-point travel.

## Discussion

The main outcome was **not just a rover**. It was a build process that reduced late integration risk. <p>

A first-year team can lose months to unclear interfaces, unowned requirements, and designs that only work on-screen. This project pushed the team toward a more professional workflow: define the requirement, review the interface, build the hardware, and test the result.
