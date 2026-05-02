---
layout: post
order: 2
title: "Coil Winder: Automated Inductance Sensor Fabrication"
description: "Designed and built an automated variable-geometry coil winder to improve repeatability and reduce manual fabrication time for inductance sensor prototyping."
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

Inductance sensor development depends on coils that can be fabricated repeatably. Hand-winding made it difficult to control turns, pitch, diameter, wire tension, and layer alignment, which slowed testing and made sensor comparisons less reliable. The objective was to build a compact automated coil winder that could produce variable-geometry coils for Westinghouse eVinci microreactor sensor prototyping with better repeatability than manual winding.

## Methods

I designed the machine around a lathe-style architecture: a rotating spindle drives the mandrel while a synchronized linear rail moves the wire guide. The prototype used stepper-driven motion, Arduino-based control, homing logic, user prompts for coil geometry, winding-speed scaling, and multi-layer winding behavior. Mechanical work focused on wire placement, lead security, passive tensioning, and interchangeable mandrels so the machine could support different coil diameters and wire gauges.

![Automated coil winder prototype](/assets/images/portfolio/coil-winder.jpg)
<p class="caption">Prototype coil winder with spindle, linear rail, wire guide, controls, and interchangeable winding hardware.</p>

## Results

The prototype produced a functional mechatronic platform for automated winding and clarified the main design risks: tension variation, layer-to-layer alignment, spindle-to-rail synchronization, and reliable start/end behavior. The system demonstrated the core winding workflow and supported iteration toward coils with less than 3% inductance variability. The build also created a practical testbed for comparing mandrel geometry, wire tension, and winding settings.

![Coil winder test result placeholder](/assets/images/portfolio/coil-results-placeholder.svg)

## Discussion

The project showed that repeatable fabrication is a systems problem, not just a motor-control problem. A coil that looks simple depends on synchronized motion, consistent wire tension, clean fixturing, usable controls, and reliable homing. This project demonstrates mechatronics, mechanism design, controls, prototyping, debugging, and the ability to translate a research fabrication need into a physical engineering tool.
