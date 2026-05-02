---
layout: post
order: 2
title: "Coil Winder: Automated Inductance Sensor Fabrication"
description: "Designed and prototyped an automated coil-winding machine to improve repeatability and reduce manual fabrication time for inductance sensor research."
skills:
  - Mechatronics
  - Arduino control
  - Mechanism design
  - Stepper motors
  - Prototyping
  - Design iteration
main-image: "/cover.svg"
---

## Objective

The coil winder was developed to remove a manual bottleneck in inductance sensor prototyping. Hand-winding coils made it difficult to control turns, pitch, diameter, and repeatability, which slowed down testing and made it harder to compare sensor configurations. The goal was to build a compact machine that could wind coils with adjustable geometry and provide more consistent test articles for engineering development.

## My Role

I worked on the mechanical layout, motion concept, control logic, and prototype integration. The design used a lathe-style architecture: a rotating spindle drove the mandrel while a traversing nozzle positioned the wire along the coil length. I also worked through practical implementation issues such as homing, start position offsets, acceleration behavior, multi-layer winding, wire tension, and synchronization between spindle rotation and X-axis travel.

## Design and Process

The system was organized around four core functions: wire placement, lead security, tensioning, and quick-swap mandrels. A stepper-driven spindle controlled coil rotation while a linear rail moved the wire guide. A passive tensioning system helped maintain wire consistency across different wire gauges, and a chuck-style mandrel interface allowed faster changes between coil diameters. As the prototype matured, the control code was updated to support homing, automatic travel to the start of the spindle, user prompts for coil geometry, and multi-layer winding where the X-axis reverses direction while maintaining spindle motion.

## Outcome and Evaluation

The project produced a working prototype direction for automated coil fabrication and clarified the main design risks: wire tension, layer-to-layer alignment, synchronization, and reliable start/end behavior. Even when the machine exposed problems, those failures were useful because they showed exactly where manual assumptions broke down. The project demonstrates hands-on mechatronics work: combining mechanical design, electronics, controls, and user-facing software into a physical tool that has to behave repeatably.

## Skills Demonstrated

- Designed a lathe-style winding architecture for variable coil geometries
- Integrated stepper motors, limit switches, and Arduino-based motion control
- Added homing, start-position logic, winding-speed scaling, and multi-layer behavior
- Iterated around real build issues including wire snagging, tension variation, and X-axis alignment
- Translated a research fabrication need into a practical machine concept

## Suggested Images to Add

Useful images would include the full prototype, spindle/mandrel close-up, X-axis rail/nozzle, wiring/control setup, and one finished coil.
