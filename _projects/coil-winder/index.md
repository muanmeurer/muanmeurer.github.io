---
layout: post
order: 2
title: "Coil Winder: Automated Inductance Sensor Fabrication"
description: "Bottom line: I designed and built a semi-automated coil winder for Westinghouse eVinci sensor development, producing variable-diameter coils from 6–75 mm and meeting the <3% inductance deviation target across the strongest tested configurations."
skills:
  - Mechatronics
  - Arduino control
  - Mechanism design
  - Stepper motors
  - Prototyping
  - Design iteration
main-image: "/cover.jpg"
---

<div class="bluf-card"><p><strong>Bottom line:</strong> I designed and built a semi-automated coil winder for Westinghouse eVinci sensor development, producing variable-diameter coils from 6–75 mm and meeting the &lt;3% inductance deviation target across the strongest tested configurations.</p></div>

## Introduction

Westinghouse needed a faster way to prototype custom coils for Linear Variable Differential Transformer sensor testing. Manual winding made it difficult to control pitch, diameter, wire tension, and repeatability, especially across coil diameters that varied by more than 12×. The objective was to build a semi-automated winder that could support in-house prototyping across 6–75 mm inner diameter, 18–32 AWG wire, 1–600 turns, and coil lengths from 1–6 cm.

## Methods

<div class="figure-row single">
  <figure class="figure-card wide"><img src="/assets/images/portfolio/coil-criteria.png" alt="Coil winder customer needs and parameter range"><figcaption>Customer needs and parameter range guided the design: geometric flexibility, repeatability, 0–2 mm pitch, 1–6 cm coil length, 6–75 mm diameter, 1–600 turns, and 18–32 AWG wire.</figcaption></figure>
</div>

I helped design the machine around a lathe-style architecture. A NEMA 23-driven spindle rotates an interchangeable mandrel while a NEMA 17-driven ball screw carriage moves the nozzle axially to control pitch and coil length. The mechanical system uses a lead clamp, removable coiling stock, passive spring-arm tensioning, and quick-swap mandrels. The control work focused on homing, synchronized spindle and rail motion, speed scaling, user prompts, and multi-layer winding behavior.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-winder.jpg" alt="Automated coil winder prototype"><figcaption>Final prototype with spindle drive, linear rail, controls, lead clamp, and interchangeable winding hardware.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-winder-prototype2.png" alt="Coil winder prototype two CAD concept"><figcaption>Prototype 2 layout showing the lathe chuck, removable stock, X-rail, nozzle, tensioning arm, pulleys, and spindle hardware.</figcaption></figure>
</div>

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-design-concepts.png" alt="Coil winding concept sketches"><figcaption>Concept work compared winding methods and focused the final design around flexible geometry rather than fixed-geometry production.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/coil-multilayer.jpg" alt="Multilayer coil winding result"><figcaption>Wound coil samples exposed the practical issues that matter most: wire tension, pitch control, layer alignment, and removal from the mandrel.</figcaption></figure>
</div>

## Results

The prototype demonstrated semi-automated winding across the required geometry and wire-gauge range. Testing compared coils made with 18, 24, and 32 AWG wire at minimum contact pitch and at 2 mm pitch. All tested 2 mm pitch configurations met Westinghouse's &lt;3% inductance deviation target, while minimum-pitch cases struggled at finer gauges. This showed that the machine could support repeatable prototyping, while also identifying pitch control at small geometries as the next refinement area.

<div class="metric-grid">
  <div class="metric-card"><strong>6–75 mm</strong><span>Supported coil inner diameter range</span></div>
  <div class="metric-card"><strong>18–32 AWG</strong><span>Supported wire gauge range</span></div>
  <div class="metric-card"><strong>1–600</strong><span>Programmable turn-count range</span></div>
  <div class="metric-card"><strong>&lt;3%</strong><span>Inductance deviation target met at 2 mm pitch</span></div>
</div>

<div class="figure-row two">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coil-induction-precision-data.png" alt="Coil induction precision data"><figcaption>Inductance percent deviation results showed that 2 mm pitch gave the most consistent performance across gauges.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/coil-induction-ratio-data.png" alt="Coil induction ratio data"><figcaption>Measured-to-predicted inductance ratio helped identify where geometry, pitch, and gauge combinations deviated from theory.</figcaption></figure>
</div>

## Discussion

The project showed that repeatable fabrication is a full mechatronic systems problem. A good coil depends on synchronized motion, stable tension, clean fixturing, usable controls, and removal hardware that does not damage the part. Coil Boy achieved the main prototyping goal and created a testbed for future improvements to minimum-pitch winding. The project demonstrates mechanism design, motion control, embedded programming, prototyping, testing, and customer-driven engineering.
