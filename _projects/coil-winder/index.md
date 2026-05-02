---
layout: post
order: 2
title: "Coil Winder: Automated Sensor-Coil Fabrication"
description: "I helped design and build Coil Boy, a semi-automated coil winder that produced repeatable custom coils across a 6–75 mm diameter range and helped replace slow manual winding for Westinghouse eVinci sensor prototyping."
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

Westinghouse’s eVinci microreactor research team needed custom coils for Linear Variable Differential Transformer sensor testing. Manual winding made prototyping slow and inconsistent because coil diameter, pitch, wire tension, and turn count all affected inductance. The objective was to build a semi-automated winder that could produce accurate, repeatable coils from 6 mm to 75 mm inner diameter so the team could test more sensor configurations in-house.

## Methods

Our design used a lathe-style architecture. A NEMA 23 motor rotated an interchangeable mandrel in a lathe chuck, while a NEMA 17 motor drove a ball-screw carriage that moved the wire guide along the coil axis. I contributed to the mechanical architecture, winding workflow, and integration decisions around lead clamping, passive tensioning, mandrel swapping, coil removal, and synchronized spindle-to-rail motion. The design also included a spring-loaded arm and pulley tensioner so the system could maintain more consistent laydown across 18–32 AWG wire.

<div class="figure-grid three">
  <img src="/assets/images/portfolio/coil-winder-prototype2.png" alt="Coil Boy prototype with labeled subsystems">
  <img src="/assets/images/portfolio/coil-criteria.png" alt="Coil winder customer needs and parameter ranges">
  <img src="/assets/images/portfolio/coil-induction-precision-data.png" alt="Coil winder precision data">
</div>
<p class="caption">The prototype combined spindle rotation, axial wire traversal, passive tensioning, and removable winding stock into one testable mechatronic system.</p>

## Results

Coil Boy demonstrated semi-automated winding across the geometry range required by the sponsor. Testing compared coils made with 18, 24, and 32 AWG wire at minimum contact pitch and at a uniform 2 mm pitch. The 2 mm pitch configurations met the sponsor’s less-than-3% inductance-deviation target across all gauges, while minimum-pitch cases struggled for 24 and 32 AWG. The final prototype supported 1–600 turns, 1–6 cm coil lengths, 0–2 mm pitch, and 6–75 mm coil diameters.

![Induction ratio data for Coil Boy](/assets/images/portfolio/coil-induction-ratio-data.png)
<p class="caption">Test data showed that wider pitch and finer-gauge configurations were more repeatable, while minimum-pitch winding remained the main area for refinement.</p>

## Discussion

This project showed that repeatable fabrication is a full mechatronics problem, not just a motor-control problem. The coil quality depended on synchronized motion, tension stability, fixturing, lead security, and a workflow that a user could actually run. The outcome was a functional prototype that supported Westinghouse’s in-house R&D workflow and gave the team a clear path for improving minimum-pitch performance. This project demonstrates mechanism design, controls, prototyping, test planning, and design iteration around a real sponsor need.
