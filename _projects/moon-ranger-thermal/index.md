---
layout: post
order: 4
title: "Moon Ranger Thermal Analysis"
description: "Built thermal models and simulations to evaluate lunar rover survivability, component temperatures, and power-system viability under extreme lunar operating conditions."
skills:
  - Thermal analysis
  - Space systems
  - Thermal Desktop
  - Python simulation
  - Design documentation
  - Margin assessment
main-image: "/cover.svg"
---

## Introduction

Lunar rover hardware must survive extreme hot and cold cases with limited power, limited mass, and almost no convective cooling. Moon Ranger required thermal reasoning that connected environmental conditions, electronics reliability, battery performance, and mechanical design constraints. The objective was to evaluate whether the rover could maintain acceptable component temperatures and power-system margins during lunar operation.

## Methods

I worked on mechanical, thermal, and battery simulation tasks for the rover. The analysis used large Thermal Desktop models with more than 1,500 nodes to evaluate conduction, radiation, and internal heat dissipation across relevant operating cases. I also developed Python simulations to estimate terrain-driven power losses and connect thermal behavior to battery and mission-level energy constraints. The work required documenting assumptions, boundary conditions, and the design implications of the results.

![Moon Ranger thermal placeholder](/assets/images/portfolio/moon-ranger-placeholder.svg)

## Results

The models helped identify how component temperatures and energy margins changed across operating conditions. Terrain-driven power losses were estimated at roughly 20%, which made battery budgeting and thermal load assumptions more important to the system design. The thermal work also supported design trades involving layout, surface properties, insulation, heat paths, and operational limits.

## Discussion

The project showed that thermal analysis is only useful when it can influence design decisions. A model has to be clear enough for teammates to understand the assumptions, trust the margins, and act on the results. This project demonstrates heat-transfer analysis, space-systems thinking, simulation, documentation, and the ability to translate analytical results into mechanical and operational constraints.
