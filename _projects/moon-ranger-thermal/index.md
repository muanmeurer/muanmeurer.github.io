---
layout: post
order: 4
title: "MoonRanger Thermal Analysis"
description: "I modeled MoonRanger thermal and power behavior to evaluate whether sensitive components could survive lunar transit, landing, surface operations, shadowed regions, and charging constraints."
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

Small lunar rovers face extreme thermal conditions: direct solar heating, deep-space radiation, cold regolith, long shadow periods, and limited heater power. MoonRanger needed to keep avionics, batteries, motors, sensors, and other temperature-sensitive components inside required storage and operating limits through transit and surface operations. The objective was to use thermal and power simulations to identify whether the rover could survive expected mission cases and where design or operational limits were needed.

## Methods

I worked on mechanical, thermal, and battery simulation tasks for the rover. The analysis used finite-difference Thermal Desktop models with more than 1,500 nodes to evaluate conduction, radiation, optical properties, internal heat dissipation, and surface interactions. Transit and surface-operation cases used different model configurations because the rover sees different heat sources before and after deployment. I also used Python simulations to estimate terrain-driven power losses and connect those losses to battery and mission-level energy margins.

<div class="figure-grid three">
  <img src="/assets/images/portfolio/moonranger-thermal_geometry.png" alt="MoonRanger thermal geometry model">
  <img src="/assets/images/portfolio/moonranger-cross_section.png" alt="MoonRanger thermal cross-section">
  <img src="/assets/images/portfolio/moonranger-heatloads.png" alt="MoonRanger thermal heat load diagram">
</div>
<p class="caption">The thermal model connected rover geometry, heat paths, external radiation, internal dissipation, and battery limits.</p>

## Results

The simulations showed which mission phases were thermally safe and which required operational constraints. Nominal operation kept most internal components near 25°C, with the central computer and IR projector closer to 35°C. Permanently shadowed and solar-occlusion cases were driven by battery state of charge and heater allocation rather than simple steady-state temperature alone. Terrain-driven losses of roughly 20% also affected the energy budget, making thermal assumptions and battery margins part of the same design problem.

![MoonRanger avionics heat graph](/assets/images/portfolio/moonranger-avionics-heatgraph.png)
<p class="caption">Thermal results were used to understand avionics temperature limits, heater behavior, battery constraints, and safe operating windows.</p>

## Discussion

The main lesson was that thermal analysis is only useful if it changes design behavior. The model had to be clear enough for teammates to understand what assumptions were driving the result, which components had margin, and which operating cases needed limits. This project demonstrates space-systems thinking, heat-transfer analysis, simulation, Python modeling, documentation, and the ability to translate model outputs into mechanical, electrical, and operational constraints.
