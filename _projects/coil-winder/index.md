---
layout: post
order: 2
title: "CoilBoy: Automated Variable-Diameter Coil Winder"
description: "Built a semi-automated coil winder for Westinghouse eVinci sensor R&D, producing repeatable coils across a 6–75 mm diameter range."
skills:
  - Mechatronics
  - Coupled control
  - Stepper motors
  - Rapid Prototyping
main-image: "/cover.jpg"
---

## Introduction

**Westinghouse needed faster in-house coil prototyping for LVDT sensor development.** Manual winding made pitch, wire tension, diameter, and repeatability hard to control.

**Objective:** build a semi-automated winder that could fabricate custom coils without retooling the whole machine.

<div class="figure-row single">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-criteria.png" alt="Coil winder customer needs and parameter range"><figcaption>Customer needs were translated into measurable geometry, pitch, turn-count, and wire-gauge ranges.</figcaption></figure>
</div>

## Methods

I helped design the machine around a **lathe-style winding architecture**.

- **NEMA 23 spindle:** rotates an interchangeable mandrel.
- **NEMA 17 X-axis:** drives a ball-screw carriage and wire nozzle.
- **Lead clamp:** anchors the wire before winding.
- **Passive tensioner:** stabilizes wire laydown across gauges.
- **Removable stock:** lets coils come off without damage.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-design-concepts.png" alt="Coil winding concept sketches"><figcaption>Concept work compared winding methods and prioritized flexible geometry over fixed-geometry production.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-winder-prototype2.png" alt="Coil winder prototype CAD concept"><figcaption>Prototype layout showing chuck, removable stock, X-rail, nozzle, tensioning arm, pulleys, and spindle hardware.</figcaption></figure>
</div>

## Results

The prototype demonstrated semi-automated winding across the required geometry and wire-gauge range.

<div class="metric-grid">
  <div class="metric-card"><strong>6–75 mm</strong><span>coil inner diameter range</span></div>
  <div class="metric-card"><strong>18–32 AWG</strong><span>wire gauge range</span></div>
  <div class="metric-card"><strong>1–600</strong><span>programmable turns</span></div>
  <div class="metric-card"><strong>&lt;3%</strong><span>target met at 2 mm pitch</span></div>
</div>

<div class="figure-row two chart-pair tight-charts">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coil-induction-precision-data.png" alt="Coil induction precision data"><figcaption>2 mm pitch produced the most consistent inductance deviation across gauges.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coil-induction-ratio-data.png" alt="Coil induction ratio data"><figcaption>Measured-to-predicted ratios showed which gauge, pitch, and diameter combinations deviated from theory.</figcaption></figure>
</div>

## Discussion

Coil repeatability is a **full mechatronic systems problem**. The final inductance depends on synchronized motion, stable tension, clean fixturing, reliable controls, and removal hardware that does not disturb the coil.

**Main takeaway:** CoilBoy met the core prototyping goal and identified the next improvement area: minimum-pitch winding at finer gauges.
