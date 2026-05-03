---
layout: post
order: 2
title: "CoilBoy: Automated Variable-Diameter Coil Winder"
description: "Built a semi-automated coil winder that made repeatable LVDT prototype coils across large diameter and wire-gauge ranges."
skills:
  - Mechatronics
  - Coupled control
  - Stepper motors
  - Rapid Prototyping
main-image: "/cover.jpg"
---

## Introduction

**Westinghouse needed faster in-house coil prototyping for eVinci LVDT sensor development.** Manual winding made pitch, wire tension, diameter, and repeatability hard to control.

**Objective:** build a semi-automated winder that could fabricate custom coils without retooling the whole machine.

<div class="figure-row single">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-criteria.png" alt="Coil winder customer needs and parameter range"><figcaption>Customer needs became measurable targets for geometry, pitch, turn count, and wire gauge.</figcaption></figure>
</div>

## Methods

I helped design the machine around a **lathe-style winding architecture**.

- **NEMA 23 spindle:** rotates an interchangeable mandrel.
- **NEMA 17 X-axis:** moves the wire nozzle along a ball screw.
- **Lead clamp:** anchors the wire before winding.
- **Passive tensioner:** stabilizes wire laydown across gauges.
- **Removable stock:** allows coil removal without damaging the winding.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-design-concepts.png" alt="Coil winding concept sketches"><figcaption>Concept selection prioritized flexible geometry instead of fixed-geometry production speed.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-winder-prototype2.png" alt="Coil winder prototype CAD concept"><figcaption>Prototype layout combined chuck rotation, axial traversal, wire tensioning, and removable tooling.</figcaption></figure>
</div>

## Results

The prototype demonstrated semi-automated winding across the required geometry and wire-gauge range.

<div class="metric-grid">
  <div class="metric-card"><strong>6–75 mm</strong><span>coil inner diameter range</span></div>
  <div class="metric-card"><strong>18–32 AWG</strong><span>wire gauge range</span></div>
  <div class="metric-card"><strong>1–600</strong><span>programmable turns</span></div>
  <div class="metric-card"><strong>&lt;3%</strong><span>target met at 2 mm pitch</span></div>
</div>

<div class="figure-row two chart-pair tight-charts coil-chart-pair">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coil-induction-precision-data.png" alt="Coil induction precision data"><figcaption>2 mm pitch produced the most consistent inductance deviation across gauges.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coil-induction-ratio-data.png" alt="Coil induction ratio data"><figcaption>Measured-to-predicted ratios showed where gauge, pitch, and diameter combinations deviated from theory.</figcaption></figure>
</div>

## Discussion

CoilBoy **worked for the core R&D use case**: it replaced slow hand winding with a controllable machine that could quickly create test coils over a large geometry range. The strongest result was the **2 mm pitch condition**, which met the repeatability target across gauges.

The unique part was the combination of **quick-swap mandrels, synchronized spindle/X-axis motion, passive tensioning, and removable coil stock** in one low-cost prototype. The main limitation was minimum-pitch winding for finer gauges, where wire placement became more sensitive to tension, guide alignment, and layer buildup.
