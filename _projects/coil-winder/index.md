---
layout: post
order: 2
title: "CoilBoy: Automated Variable-Diameter Coil Winder"
description: "Built a programmable coil winder for Westinghouse, synchronized spindle motion with wire travel, and validated repeatability across AWG32 and multi-layer coils."
skills:
  - Mechatronics
  - Motion synchronization
  - Stepper motor control
  - Design validation
main-image: "/cover.jpg"
---

## Introduction

**Westinghouse needed a faster way to prototype coils for eVinci LVDT sensor development.** Hand winding was flexible, but pitch, tension, diameter, and repeatability depended too heavily on the operator.

**Objective:** build a semi-automated winder that could change diameter, pitch, turn count, and wire gauge without rebuilding the machine around every coil.

<div class="figure-row single">
  <figure class="figure-card wide"><img src="/assets/images/portfolio/coilboy-full-assembly.jpg" alt="Complete CoilBoy automated coil winding machine"><figcaption>The final prototype combined spindle rotation, axial wire placement, interchangeable tooling, tension control, and a removable coil fixture on one test platform.</figcaption></figure>
</div>

## Methods

I helped design and integrate a **lathe-style winding architecture** that coupled spindle rotation to the nozzle’s linear travel.

- **NEMA 23 spindle:** rotated an interchangeable mandrel and set winding speed.
- **NEMA 17 X-axis:** translated the wire nozzle along a ball screw to control pitch.
- **Synchronized motion:** converted commanded turns and pitch into coordinated rotary and linear motion.
- **Lead clamp and removable stock:** anchored the wire and allowed finished coils to come off without a fight.
- **Passive tensioner and nozzle:** guided wire across different diameters and gauges while limiting slack.

The design targeted **6–75 mm inner diameters, 18–32 AWG wire, and 1–600 programmable turns**.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-criteria.png" alt="Coil winder customer needs and parameter range"><figcaption>Customer needs were translated into measurable geometry, pitch, turn-count, and wire-gauge targets.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-design-concepts.png" alt="Coil winding concept sketches"><figcaption>Concept selection favored flexible geometry and quick changeover over fixed-geometry production speed.</figcaption></figure>
</div>

## Results

<div class="video-center coil-results-video">
  <figure class="figure-card video-card">
    <video class="project-video card-video" controls muted playsinline preload="metadata" poster="/assets/images/portfolio/coilboy-winding-closeup.jpg">
      <source src="/assets/videos/coilboy-multilayer-winding.mp4" type="video/mp4">
    </video>
    <figcaption>Multi-layer winding during final validation. The layer transition also made the remaining alignment and tension-control weaknesses easy to see.</figcaption>
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

The strongest single-layer result was the **25 mm, 20-turn AWG32 coil**, with a 1.07% average difference and a 4/4 pass rate. The 75 mm and 6 mm, 20-turn AWG32 configurations also passed all four runs. The 6 mm, 40-turn coil averaged 2.71% but passed only three of four runs, showing that a good average can still hide one bad winding.

Both multi-layer configurations passed every run, with average differences of **1.91% and 2.00%**. The clear failure was the **25 mm, 20-turn AWG24 coil**: only one of four runs landed within ±3%, and the average difference rose to 5.41%.

## Conclusions

CoilBoy met the core R&D need: it reliably reproduced **AWG32 single-layer coils and both multi-layer configurations** without rebuilding the machine for each geometry. Not all copper was equally cooperative, but the useful operating range was clear.

- **AWG32 was the most reliable wire** across the tested diameters.
- **Mid-sized and larger mandrels were easier to control** than the smallest 6 mm geometry.
- **Thicker AWG24 wire increased variation**, likely through greater wire stiffness, nozzle resistance, deflection, and placement inconsistency.
- **Coil-length variation tracked inductance variation**, pointing to pitch and wire placement as major remaining error sources.
- **Wheeler’s formula matched measured behavior better than the long-coil formula** and is the better prediction model for this machine.
- **Multi-layer winding was successful**, producing much higher inductance while remaining repeatable.

## Next Steps

The motors followed commands reliably; the wire was the less obedient half of the system. The next iteration should focus on the wire path rather than simply adding more control complexity.

- Improve tension control so wire feeds consistently through layer transitions.
- Calibrate pitch and nozzle travel separately for each wire gauge and mandrel diameter.
- Improve nozzle alignment to reduce lateral placement error.
- Add more repeated multi-layer trials to strengthen the validation set.
- Retest AWG24 and the 6 mm configurations after calibration, since those exposed the main weaknesses.
