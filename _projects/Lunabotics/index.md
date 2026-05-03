---
layout: post
order: 1
title: "CMU Lunabotics Rover (NASA)"
description: "Led CMU's Lunabotics rover from concept planning into tested hardware, subsystem interfaces, and review-driven integration."
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

**NASA Lunabotics challenges teams to build autonomous excavation robots for future lunar infrastructure.** The robot must move regolith, deposit material, and survive dusty, high-risk integration conditions.

**Objective:** turn CMU's first Lunabotics effort into a functioning rover program.

- Build a system architecture for **excavation, storage, deposition, mobility, sensing, and electronics**.
- Create a lunar-style test arena for physical validation.
- Define ownership and interfaces before manufacturing.
- Keep mechanical, avionics, software, and systems work aligned.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/lunabotics-team.jpg" alt="CMU Moon Miners team photo"><figcaption>Multidisciplinary team growth made process and interface control as important as rover hardware.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/lunabotics-presentation-original.jpg" alt="Presenting Lunabotics system overview"><figcaption>Design reviews converted subsystem work into one shared system-level plan.</figcaption></figure>
</div>

## Methods

I served as **project lead** across mechanical, avionics, software, and systems.

- Converted competition rules and advisor feedback into **system requirements**.
- Used **SRR, PDR, and CDR** as hard design gates.
- Managed interfaces for **power, packaging, sensors, drivetrain, excavation, and software**.
- Used reviewer feedback to simplify risky design choices before fabrication.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/Lunabotics-CAD_breakdown.png" alt="Lunabotics CAD system breakdown"><figcaption>System CAD used to communicate subsystem boundaries and integration risks.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/Lunabotics-Ebox.jpg" alt="Lunabotics electronics box"><figcaption>Electronics housing created mechanical constraints for compute, power, harnessing, and service access.</figcaption></figure>
</div>

## Results

The team moved from concept-level planning into **physical rover testing** and subsystem integration.

<div class="video-center">
  <video class="project-video half" controls muted playsinline poster="/assets/images/portfolio/lunabotics-rover.jpg">
    <source src="/assets/videos/lunabotics-digging.mp4" type="video/mp4">
  </video>
</div>

<div class="metric-grid three-metrics">
  <div class="metric-card"><strong>73</strong><span>students coordinated across subteams</span></div>
  <div class="metric-card"><strong>SRR → PDR → CDR</strong><span>review gates used before build</span></div>
  <div class="metric-card"><strong>Full arena</strong><span>RIC testbed for regolith-style trials</span></div>
</div>

Reviewer feedback drove concrete changes:

- Simplified the **E-stop path** to reduce electrical risk.
- Separated sensitive compute and actuator power concerns.
- Treated mast height and sensor field of view as first-order requirements.
- Required path planning to account for heading and turning radius.

## Discussion

The main result was **not just a rover**. It was a build process that reduced late integration risk.

A first-year team can lose months to unclear interfaces and designs that only work on-screen. This project pushed the team toward a professional workflow: define the requirement, review the interface, build the hardware, and test the result.
