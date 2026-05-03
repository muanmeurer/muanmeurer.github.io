---
layout: post
order: 1
title: "CMU Lunabotics Rover (NASA)"
description: "Led a first-year lunar robotics team from paper architecture into a working rover, test arena, and integration process."
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

**NASA Lunabotics turns lunar excavation into a real robotics problem:** move regolith, build berms, and operate reliably in a dusty test environment.

**Objective:** build both the **rover** and the **team process** needed to make it work.

- Define the architecture for **excavation, storage, deposition, mobility, sensing, and electronics**.
- Build a lunar-style arena for physical validation.
- Set clear interfaces before manufacturing.
- Keep mechanical, avionics, software, and systems work aligned.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/lunabotics-team.jpg" alt="CMU Moon Miners team photo"><figcaption>Multidisciplinary team growth made process and interface control as important as rover hardware.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/lunabotics-presentation-original.jpg" alt="Presenting Lunabotics system overview"><figcaption>Design reviews converted subsystem work into one shared system-level plan.</figcaption></figure>
</div>

## Methods

I served as **project lead** across mechanical, avionics, software, and systems.

- Turned competition rules and advisor feedback into **system requirements**.
- Used **SRR, PDR, and CDR** as hard design gates.
- Managed interfaces for **power, packaging, sensors, drivetrain, excavation, and software**.
- Used reviewer feedback to simplify risky decisions before fabrication.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/Lunabotics-CAD_breakdown.png" alt="Lunabotics CAD system breakdown"><figcaption>System CAD communicated subsystem boundaries and integration risks.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/lunabotics_ebox.jpg" alt="Lunabotics electronics box"><figcaption>Electronics housing forced mechanical decisions around compute, power, harnessing, cooling, and service access.</figcaption></figure>
</div>

## Results

The team moved from concept-level planning into **physical rover testing** and subsystem integration.

<div class="figure-row two video-pair">
  <figure class="figure-card video-card">
    <video class="project-video card-video" controls muted playsinline poster="/assets/images/portfolio/lunabotics-digging-poster.png">
      <source src="/assets/videos/lunabotics-digging.mp4" type="video/mp4">
    </video>
    <figcaption>Excavation testing showed how the bucket ladder interacted with the simulant, drivetrain, and deposition geometry.</figcaption>
  </figure>
  <figure class="figure-card video-card">
    <video class="project-video card-video" controls muted playsinline poster="/assets/images/portfolio/lunabotics-digging-poster.png">
      <source src="/assets/videos/lunabotics-proof-of-life.mp4" type="video/mp4">
    </video>
    <figcaption>Proof-of-life testing validated that the rover could move as an integrated physical system, not just as separate subsystems.</figcaption>
  </figure>
</div>

<div class="metric-grid three-metrics">
  <div class="metric-card"><strong>73</strong><span>students coordinated across subteams</span></div>
  <div class="metric-card"><strong>SRR → PDR → CDR</strong><span>review gates before build</span></div>
  <div class="metric-card"><strong>Full arena</strong><span>RIC testbed for regolith-style trials</span></div>
</div>

Reviewer feedback drove concrete changes:

- Simplified the **E-stop path** to reduce electrical risk.
- Separated sensitive compute and actuator power concerns.
- Treated mast height and sensor field of view as first-order requirements.
- Required path planning to account for heading and turning radius.

## Discussion

The rover **worked well enough to enter physical integration and testing**, which was the important milestone for a first-year team. The unique part of this project was that the team was not only designing a robot; we were also building the review structure, interface discipline, and test infrastructure that made the robot buildable.

What still needed work was **full autonomous excavation reliability**. The hardware proved the architecture was real, but the next step was tighter software integration, longer-duration arena testing, and faster iteration between mechanical fixes and autonomy behavior.
