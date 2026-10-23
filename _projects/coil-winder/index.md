---
layout: post
permalink: /projects/coil-winder/
order: 5
title: "CoilBoy: Programmable Coil Winder"
description: "Mechanical Engineer - Designed and built a programmable coil winder for Westinghouse."
skills:
  - Mechatronics
  - Motion synchronization
  - Stepper motor control
  - Design validation
main-image: "/cover.jpg"
---

<div class="story-project coilboy-story">
  <div class="story-intro">
    <div class="story-intro-copy">
      <p class="story-eyebrow">WESTINGHOUSE · MECHATRONIC DESIGN</p>
      <h2>Coils are simple. Repeating them isn’t.</h2>
      <p>Westinghouse needed to prototype LVDT sensor coils for its eVinci program. Hand winding was flexible, but wire pitch, tension, and repeatability changed with the operator—and so did the inductance.</p>
      <p>We designed <strong>CoilBoy</strong>: a semi-automated winder that changes mandrel diameter, wire gauge, turn count, and pitch without redesigning the entire machine every time.</p>
    </div>
    <figure class="story-feature">
      <img src="/assets/images/portfolio/coilboy-winding-closeup.jpg" alt="CoilBoy mechanical assembly and winding mechanism" loading="lazy">
      <figcaption>The winding head, where tension and wire placement have to cooperate.</figcaption>
    </figure>
  </div>
  <div class="story-stats" aria-label="CoilBoy project results">
    <div><span>CLIENT</span><strong>Westinghouse</strong><small>eVinci sensor development</small></div>
    <div><span>REPEATABILITY TARGET</span><strong>±3%</strong><small>Inductance about each configuration's mean</small></div>
    <div><span>BEST SINGLE-LAYER CASE</span><strong>1.07%</strong><small>Average difference, 25 mm / 20 turns</small></div>
  </div>

  <section class="story-section">
    <h2>How does it work?</h2>
    <p>Think of a very small, opinionated lathe. The spindle turns the mandrel while a nozzle traverses along its length. Coordinating those two axes gives us control of wire placement and pitch.</p>
    <div class="story-cards">
      <div class="story-card"><span>ROTATION</span><h3>NEMA 23 spindle</h3><p>Rotates the interchangeable mandrel at the commanded winding speed.</p></div>
      <div class="story-card"><span>TRAVERSE</span><h3>NEMA 17 + ball screw</h3><p>Moves the wire guide along the axis so pitch follows spindle rotation.</p></div>
      <div class="story-card"><span>REPEATABILITY</span><h3>Guidance + tension</h3><p>Clamps, interchangeable stock, and a passive tensioner help keep each run consistent.</p></div>
    </div>
    <p>My job was the mechanical design and integration, plus getting the synchronized motion to behave across different coil geometries. Designing the mechanism was one thing; making the wire agree with the plan was another.</p>
    <figure class="story-feature story-requirements"><img src="/assets/images/portfolio/coil-criteria.png" alt="Westinghouse coil geometry and process requirements" loading="lazy"><figcaption>Westinghouse's requirements — the design space CoilBoy needed to accommodate.</figcaption></figure>
    <div class="figure-row single coilboy-large-diagram"><figure class="figure-card wide"><img src="/assets/images/portfolio/coil-design-concepts.png" alt="CoilBoy mechanism concept sketches" loading="lazy"><figcaption>Design concepts before the final machine architecture emerged.</figcaption></figure></div>
  </section>

  <section class="story-section story-data">
    <h2>Did it actually wind repeatably?</h2>
    <p>We tested five single-layer and two multi-layer configurations. Westinghouse defined success as coils remaining within <strong>±3% of the configuration's average inductance</strong>.</p>
    <div class="video-center coil-results-video"><figure class="figure-card video-card"><video class="project-video card-video" controls muted playsinline preload="metadata" poster="/assets/images/portfolio/coilboy-results-poster.jpg"><source src="/assets/videos/coilboy-multilayer-winding.mp4" type="video/mp4"></video><figcaption>CoilBoy winding a finished coil during the final demonstration.</figcaption></figure></div>
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
    <p>Most AWG32 single-layer trials and both multi-layer configurations met the ±3% target; the 6 mm, 40-turn case had one outlying run. The 25 mm, 20-turn AWG32 coil averaged <strong>1.07% difference</strong>; the AWG24 case was the clear outlier at 5.41%.</p>
    <p>That pointed to the mechanical issues—wire stiffness, nozzle resistance, tension, and placement—rather than a fundamental motor-control problem. Wheeler's formula also tracked measured inductance better than the long-coil approximation.</p>
    <div class="story-conclusion"><p>The next useful iteration is to refine tension control and nozzle alignment, calibrate pitch for wire gauge and mandrel diameter, and retest the difficult cases.</p></div>
  </section>

  <section class="story-section">
    <h2>One nice bonus.</h2>
    <div class="story-split reverse">
      <figure class="story-picture story-award"><img src="/assets/images/portfolio/coilboy-best-prototype.jpg" alt="CoilBoy team receiving the Best Prototype award" loading="lazy"><figcaption>Best Prototype, CMU Spring Design Expo 2026.</figcaption></figure>
      <div><p>CoilBoy won <strong>Best Prototype</strong> at CMU's 2026 Spring Design Expo. Always nice when your test data and the people standing in front of the machine agree that it works.</p></div>
    </div>
  </section>
</div>
