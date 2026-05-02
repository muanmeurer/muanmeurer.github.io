---
layout: post
order: 4
title: "MoonRanger Thermal Analysis"
description: "Bottom line: I supported MoonRanger thermal and battery simulation by using high-fidelity Thermal Desktop models and Python analysis to evaluate whether rover components could stay within temperature and power limits during lunar mission phases."
skills:
  - Thermal analysis
  - Space systems
  - Thermal Desktop
  - Python simulation
  - Design documentation
  - Margin assessment
main-image: "/cover.png"
---

<div class="bluf-card"><p><strong>Bottom line:</strong> I supported MoonRanger thermal and battery simulation by using high-fidelity Thermal Desktop models and Python analysis to evaluate whether rover components could stay within temperature and power limits during lunar mission phases.</p></div>

## Introduction

A lunar rover has to survive direct sunlight, darkness, cold regolith, radiation to deep space, and strict power limits. Temperature-sensitive components must remain within allowable ranges during transit, landing, surface operation, shadowed operation, charging, and survival cases. The objective was to evaluate how MoonRanger's thermal design affected electronics reliability, battery performance, and mission-level operating constraints.

## Methods

<div class="figure-row single">
  <figure class="figure-card wide"><img src="/assets/images/portfolio/Screenshot 2026-05-02 181733.png" alt="MoonRanger hot and cold transit diagrams"><figcaption>Hot-case and cold-case transit diagrams framed how lander orientation, solar input, and deep-space radiation affect rover temperatures before deployment.</figcaption></figure>
</div>

The analysis used Thermal Desktop finite-difference models to capture conduction, radiation, optical properties, contact conductance, internal heat dissipation, and environmental boundary conditions. The transit model contained more than 1,600 nodes, while the surface-operations model contained more than 1,900 nodes. I also worked with Python simulations to connect terrain-driven power losses to battery and thermal margins. The work required documenting assumptions clearly so that the thermal model could drive design decisions rather than just produce plots.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-thermal_geometry.png" alt="MoonRanger thermal geometry model"><figcaption>Thermal geometry model used as the project thumbnail. The model represents rover surfaces, components, and heat-transfer paths for mission simulations.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-cross_section.png" alt="MoonRanger thermal cross section"><figcaption>Cross-section view used to reason about conduction paths, internal electronics placement, and thermal coupling.</figcaption></figure>
</div>

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-heatloads.png" alt="MoonRanger heat load diagram"><figcaption>Heat-load framing connected solar input, radiation to space, lunar regolith interaction, avionics dissipation, insulation, and radiator behavior.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-avionics_allowable_heats.png" alt="MoonRanger avionics allowable heat table"><figcaption>Allowable heat and temperature constraints turned thermal results into engineering limits for the avionics and power system.</figcaption></figure>
</div>

## Results

The simulations identified which mission phases were thermally safe, which required operational limits, and which components had the tightest margins. The models showed that internal avionics temperature limits could drive orientation and operating constraints, while terrain-related power losses affected the energy budget. The work supported design trades involving insulation, surface coatings, radiator placement, component layout, and battery operation.

<div class="figure-row single">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/moonranger-avionics-heatgraph.png" alt="MoonRanger avionics heat graph"><figcaption>Avionics thermal response plots helped connect model outputs to component limits and mission operating decisions.</figcaption></figure>
</div>

## Discussion

The value of the analysis was not just predicting temperature. The useful part was translating thermal behavior into design constraints that other engineers could act on. A rover that survives the Moon needs good analysis, but it also needs clear assumptions, documented margins, and results that inform mechanical layout, electronics packaging, and operations. This project demonstrates thermal analysis, space-systems thinking, simulation, documentation, and design-for-reliability.
