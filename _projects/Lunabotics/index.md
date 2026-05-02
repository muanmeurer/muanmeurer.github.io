---
layout: post
order: 1
title: "CMU Moon Miners: NASA Lunabotics Rover"
description: "I helped lead CMU Moon Miners from a first-year team into a buildable lunar robotics program, producing a rover architecture, review process, test arena, and integrated hardware for autonomous excavation and berm construction."
skills:
  - Systems engineering
  - Mechanical design
  - Design reviews
  - Integration planning
  - Test planning
  - Leadership
main-image: "/cover.jpg"
---


## Introduction

Future lunar infrastructure will require machines that can excavate, move, and shape regolith without constant human control. NASA Lunabotics turns that challenge into a student engineering problem: build a robot that can autonomously excavate simulated lunar soil and deposit it into a useful berm. For CMU Moon Miners, the objective was bigger than one mechanism. We had to build the rover and also build the process that would let a new multidisciplinary team make reliable design decisions under competition, schedule, and integration pressure.

## Methods

I served as project lead and helped connect mechanical, avionics, software, and systems work into one buildable robot. I translated competition rules and advisor feedback into system requirements, interface-control decisions, trade studies, design reviews, and manufacturing priorities. The team used SRR, PDR, and CDR as hard gates so that subsystem owners had to justify their design choices before fabrication. This process forced early decisions around drivetrain packaging, excavation architecture, sensor mast placement, e-stop behavior, power-domain separation, harness routing, and service access.

<div class="figure-grid three">
  <img src="/assets/images/portfolio/lunabotics-cad-breakdown.png" alt="Lunabotics CAD subsystem breakdown">
  <img src="/assets/images/portfolio/lunabotics-team.jpg" alt="CMU Moon Miners team photo">
  <img src="/assets/images/portfolio/lunabotics-presentation.jpg" alt="Presenting the Lunabotics system overview">
</div>
<p class="caption">Design communication mattered as much as CAD. The team used subsystem breakdowns, review presentations, and live integration work to keep mechanical, avionics, software, and systems decisions aligned.</p>

## Results

The project produced a full rover architecture, a physical test arena at the Robotics Innovation Center, and a team process for requirements, trade studies, risk tracking, manufacturing planning, and verification. Review feedback led to practical changes: a simpler e-stop path to the main contactor, clearer power separation between compute and actuators, stronger attention to battery sag and undervoltage behavior, and path-planning requirements that accounted for heading and turning-radius limits. The outcome was not just a CAD concept; it was a real integrated rover platform with a team structure behind it.

## Discussion

The biggest lesson was that early systems engineering prevents late-stage integration chaos. A rover can fail because of a weak bracket, but it can also fail because the electrical box cannot be serviced, a sensor loses field of view, a harness conflicts with a moving mechanism, or a software planner assumes motions the drivetrain cannot execute. This project shows my ability to lead cross-disciplinary engineering work, communicate technical tradeoffs, and make mechanical design decisions around risk, testing, and real hardware constraints.
