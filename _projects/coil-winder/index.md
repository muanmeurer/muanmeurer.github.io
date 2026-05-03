---
layout: post
order: 2
title: "Coil Winder: Automated Inductance Sensor Fabrication"
description: "Designed a semi-automated coil winder for Westinghouse eVinci sensor R&D, producing repeatable 6–75 mm coils and meeting the &lt;3% inductance target in the strongest tested cases."
skills:
  - Mechatronics
  - Arduino control
  - Mechanism design
  - Stepper motors
  - Prototyping
  - Design iteration
main-image: "/cover.jpg"
---

## Introduction

**Westinghouse needed faster in-house coil prototyping for LVDT sensor development.** Manual winding made pitch, wire tension, diameter, and repeatability hard to control across a large geometry range.

**Project objective:** build a semi-automated winder that could fabricate custom coils without retooling the entire machine.

Key requirements:

- **6–75 mm** inner diameter range
- **18–32 AWG** wire range
- **1–600 turns**
- **1–6 cm** coil length
- Repeatable inductance results near the **<3% deviation target**

## Methods

I helped design the machine around a **lathe-style winding architecture**.

- A **NEMA 23 spindle** rotates an interchangeable mandrel.
- A **NEMA 17 ball-screw X-axis** moves the wire nozzle to control pitch and length.
- A lead clamp anchors the wire before automated winding begins.
- A passive spring-arm tensioner stabilizes wire laydown across gauges.
- Removable coiling stock makes finished coils easier to remove without damage.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-winder.jpg" alt="Automated coil winder prototype"><figcaption>Final prototype with spindle drive, linear rail, controls, lead clamp, and interchangeable winding hardware.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-winder-prototype2.png" alt="Coil winder prototype CAD concept"><figcaption>Prototype layout showing the lathe chuck, removable stock, X-rail, nozzle, tensioning arm, pulleys, and spindle hardware.</figcaption></figure>
</div>

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-criteria.png" alt="Coil winder customer needs and parameter range"><figcaption>Customer needs translated into measurable geometry, pitch, turn-count, and wire-gauge ranges.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-design-concepts.png" alt="Coil winding concept sketches"><figcaption>Concept work compared winding methods and pushed the design toward flexible geometry instead of fixed-geometry production.</figcaption></figure>
</div>

## Results

The prototype demonstrated semi-automated winding across the required geometry and wire-gauge range. Testing compared coils made with **18, 24, and 32 AWG** wire at minimum contact pitch and at **2 mm pitch**.

<div class="metric-grid">
  <div class="metric-card"><strong>6–75 mm</strong><span>coil inner diameter range</span></div>
  <div class="metric-card"><strong>18–32 AWG</strong><span>wire gauge range</span></div>
  <div class="metric-card"><strong>1–600</strong><span>programmable turns</span></div>
  <div class="metric-card"><strong>&lt;3%</strong><span>target met at 2 mm pitch</span></div>
</div>

<div class="figure-row two chart-pair">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coil-induction-precision-data.png" alt="Coil induction precision data"><figcaption>2 mm pitch produced the most consistent inductance deviation across gauges.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coil-induction-ratio-data.png" alt="Coil induction ratio data"><figcaption>Measured-to-predicted ratios showed which gauge, pitch, and diameter combinations deviated from theory.</figcaption></figure>
</div>

## Discussion

The project showed that coil repeatability is a **full mechatronic systems problem**. The final inductance depends on synchronized motion, stable tension, clean fixturing, reliable controls, and removal hardware that does not disturb the coil.

**Main takeaway:** Coil Boy met the core prototyping goal and identified the next improvement area: minimum-pitch winding at finer gauges.
