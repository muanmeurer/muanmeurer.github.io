---
layout: post
order: 4
title: "MoonRanger: Thermal Analysis"
description: "Used Thermal Desktop and Python analysis to evaluate whether MoonRanger could stay within thermal and power limits across lunar mission phases."
skills:
  - Thermal analysis
  - Space systems
  - Thermal Desktop
  - Python simulation
  - Design documentation
  - Margin assessment
main-image: "/cover.png"
---

## Introduction

**A lunar rover has to survive sunlight, darkness, cold regolith, radiation to space, and strict power limits.** MoonRanger needed thermal analysis to protect batteries, avionics, motors, and sensors during transit, landing, surface operations, charging, and survival cases.

**Objective:** turn lunar thermal behavior into design and operations constraints.

## Methods

The work used **Thermal Desktop finite-difference models** to represent conduction, radiation, optical properties, contact conductance, heat dissipation, and environmental boundary conditions.

<div class="figure-row two">
  <figure class="figure-card compact thermal-diagram"><img src="/assets/images/portfolio/Screenshot 2026-05-02 181733.png" alt="MoonRanger hot and cold transit diagrams"><figcaption>Hot and cold transit cases showed how lander orientation, solar input, and deep-space radiation affect rover temperature.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-heatloads.png" alt="MoonRanger heat load diagram"><figcaption>Heat-load framing connected solar input, radiation, regolith interaction, avionics dissipation, insulation, and radiator behavior.</figcaption></figure>
</div>

Modeling work included:

- **1,600+ nodes** for transit cases.
- **1,900+ nodes** for surface operations.
- Transit, lunar orbit, landing, surface ops, shadowed cases, and charging.
- Python analysis linking terrain-driven power losses to battery and thermal margins.

<div class="figure-row single">
  <figure class="figure-card wide"><img src="/assets/images/portfolio/moonranger-cross_section.png" alt="MoonRanger thermal cross section"><figcaption>Cross-section view used to reason about conduction paths, electronics placement, and thermal coupling.</figcaption></figure>
</div>

## Results

The simulations identified which mission phases were thermally safe, which required operational limits, and which components had the tightest margins.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-avionics_allowable_heats.png" alt="MoonRanger avionics allowable heat table"><figcaption>Allowable heat and temperature limits turned model results into engineering constraints.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/moonranger-avionics-heatgraph.png" alt="MoonRanger avionics heat graph"><figcaption>Avionics thermal response plots connected simulation outputs to component limits.</figcaption></figure>
</div>

<div class="video-center">
  <video class="project-video half" controls muted playsinline poster="/assets/images/portfolio/moonranger-thermal_geometry.png">
    <source src="/assets/videos/moonranger-orbit.mp4" type="video/mp4">
  </video>
</div>

<div class="video-center">
  <video class="project-video half" controls muted playsinline poster="/assets/images/portfolio/moonranger-thermal_geometry.png">
    <source src="/assets/videos/moonranger-animation.mp4" type="video/mp4">
  </video>
</div>

## Discussion

The value of the analysis was not just predicting temperature. The useful part was translating thermal behavior into **design rules** that other engineers could act on.

**Main takeaway:** space hardware needs clear assumptions, documented margins, and simulation outputs that directly inform layout, packaging, insulation, and operations.
