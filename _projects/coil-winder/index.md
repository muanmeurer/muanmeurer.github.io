---
layout: post
order: 2
title: "CoilBoy: Programmable Coil Winder"
description: "Mechanical Engineer - Designed and built a programmable coil winder for Westinghouse."
skills:
  - Mechatronics
  - Motion synchronization
  - Stepper motor control
  - Design validation
main-image: "/cover.jpg"
---

## Introduction

**Westinghouse needed a faster way to prototype coils for eVinci LVDT sensor development.** Hand winding was flexible, but pitch, tension, diameter, and repeatability depended too heavily on the operator.
<br>
**So:** we built a semi-automated winder that could efficiently change diameter, pitch, turn count, and wire gauge without rebuilding the machine around every coil.

## Methods

I designed and integrated a **lathe-style winding architecture** that coupled spindle rotation to the nozzle’s linear travel.

- **NEMA 23 spindle:** rotated an interchangeable mandrel and set winding speed.
- **NEMA 17 X-axis:** translated the wire nozzle along a ball screw to control pitch.
- **Synchronized motion:** converted commanded turns and pitch into coordinated rotary and linear motion.
- **Lead clamp and removable stock:** anchored the wire and let finished coils come off without a wrestling match.
- **Passive tensioner and nozzle:** guided wire across different diameters and gauges while limiting slack.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-criteria.png" alt="Coil winder customer needs and parameter range"><figcaption>Customer needs were translated into measurable geometry, pitch, turn-count, and wire-gauge targets.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-design-concepts.png" alt="Coil winding concept sketches"><figcaption>Concept selection favored flexible geometry and quick changeover over fixed-geometry production speed.</figcaption></figure>
</div>

## Results

<div class="video-center coil-results-video">
  <figure class="figure-card video-card">
    <video class="project-video card-video" controls muted playsinline preload="metadata" poster="/assets/images/portfolio/coilboy-results-poster.jpg">
      <source src="/assets/videos/coilboy-multilayer-winding.mp4" type="video/mp4">
    </video>
    <figcaption>CoilBoy winding a finished coil during final demonstration.</figcaption>
  </figure>
</div>

The final test campaign covered **five single-layer and two multi-layer configurations**. Westinghouse defined success as repeated coils within **±3% of each configuration’s average inductance**.

<div class="metric-grid">
  <div class="metric-card"><strong>6 / 7</strong><span>configurations met the average ±3% target</span></div>
  <div class="metric-card"><strong>1.07%</strong><span>best single-layer average difference</span></div>
  <div class="metric-card"><strong>100%</strong><span>pass rate for both multi-layer configurations</span></div>
  <div class="metric-card"><strong>5.41%</strong><span>AWG24 average difference—the clear outlier</span></div>
</div>

<div class="figure-row two chart-pair coil-precision-charts">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coilboy-single-layer-precision.png" alt="Average inductance difference for single-layer CoilBoy tests"><figcaption>Four of five single-layer configurations averaged below the 3% target. AWG24 was the exception.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coilboy-multilayer-precision.png" alt="Average inductance difference for multi-layer CoilBoy tests"><figcaption>Both multi-layer configurations stayed below 3% average difference and passed every repeated run.</figcaption></figure>
</div>

<div class="data-table-wrap" role="region" aria-label="CoilBoy inductance repeatability data" tabindex="0">
<table class="data-table">
  <thead>
    <tr>
      <th>Configuration</th>
      <th>Run values</th>
      <th>Mean</th>
      <th>Runs within ±3%</th>
      <th>Pass rate</th>
      <th>Average difference</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>75 mm, 20T</td><td>67.93, 66.32, 64.81, 66.56</td><td>66.41</td><td>4/4</td><td><span class="table-status good">100%</span></td><td>1.43%</td></tr>
    <tr><td>25 mm, 20T</td><td>16.44, 16.55, 16.43, 16.02</td><td>16.36</td><td>4/4</td><td><span class="table-status good">100%</span></td><td>1.07%</td></tr>
    <tr><td>6 mm, 20T, p=0.20</td><td>2.64, 2.61, 2.53, 2.62</td><td>2.60</td><td>4/4</td><td><span class="table-status good">100%</span></td><td>1.35%</td></tr>
    <tr><td>6 mm, 40T, p=0.50</td><td>2.87, 2.70, 2.65, 2.72</td><td>2.74</td><td>3/4</td><td><span class="table-status watch">75%</span></td><td>2.71%</td></tr>
    <tr><td>25 mm, 20T, AWG24</td><td>10.74, 12.37, 11.13, 11.95</td><td>11.55</td><td>1/4</td><td><span class="table-status fail">25%</span></td><td>5.41%</td></tr>
    <tr><td>Multi-layer 25 mm</td><td>2029, 2108</td><td>2069</td><td>2/2</td><td><span class="table-status good">100%</span></td><td>1.91%</td></tr>
    <tr><td>Multi-layer 13 mm</td><td>576, 603</td><td>590</td><td>2/2</td><td><span class="table-status good">100%</span></td><td>2.00%</td></tr>
  </tbody>
</table>
</div>

## Discussion

CoilBoy met Westinghouse’s **±3% repeatability target** for the AWG32 single-layer coils and both multi-layer configurations. <br>

The best result was the 25 mm, 20-turn AWG32 coil at **1.07% average difference**; the AWG24 case was the outlier at **5.41%**, pointing to wire stiffness, nozzle resistance, tension, and placement—not motor control—as the main limits.

Wheeler’s formula tracked the measured coils better than the long-coil approximation, while the successful multi-layer runs showed that much higher inductance did not require giving up repeatability. The next useful iteration is mostly mechanical: improve tension control and nozzle alignment, calibrate pitch by wire gauge and mandrel diameter, then retest AWG24 and the 6 mm configurations.

<div class="figure-row single coilboy-award-photo">
  <figure class="figure-card wide"><img src="/assets/images/portfolio/coilboy-best-prototype.jpg" alt="CoilBoy team holding Best Prototype awards at the Carnegie Mellon Spring Design Expo"><figcaption>CoilBoy received the Best Prototype award at Carnegie Mellon’s 2026 Spring Design Expo—a pleasant confirmation that the machine worked outside our own test spreadsheet.</figcaption></figure>
</div>
